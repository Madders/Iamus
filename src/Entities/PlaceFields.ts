//   Copyright 2020 Vircadia Contributors
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
'use strict'

import Config from '@Base/config';

import { Entity } from '@Entities/Entity';
import { PlaceEntity } from '@Entities/PlaceEntity';

import { Domains } from '@Entities/Domains';
import { Places } from '@Entities/Places';
import { AuthToken } from '@Entities/AuthToken';
import { Maturity } from '@Entities/Sets/Maturity';

import { Perm } from '@Route-Tools/Perm';
import { checkAccessToEntity } from '@Route-Tools/Permissions';

import { FieldDefn, ValidateResponse } from '@Route-Tools/EntityFieldDefn';
import { isStringValidator, isSArraySet, isPathValidator, isDateValidator } from '@Route-Tools/Validators';
import { simpleGetter, simpleSetter, noSetter, sArraySetter, dateStringGetter } from '@Route-Tools/Validators';

import { IsNullOrEmpty, IsNotNullOrEmpty } from '@Tools/Misc';

import { Logger } from '@Tools/Logging';

// Naming and access for the fields in a PlaceEntity.
// Indexed by request_field_name.
export const placeFields: { [key: string]: FieldDefn } = {
  'id': {
    entity_field: 'id',
    request_field_name: 'id',
    get_permissions: [ Perm.ALL ],
    set_permissions: [ Perm.NONE ],
    validate: isStringValidator,
    setter: simpleSetter,
    getter: simpleGetter
  },
  'name': {
    entity_field: 'name',
    request_field_name: 'name',
    get_permissions: [ Perm.ALL ],
    set_permissions: [ Perm.DOMAIN, Perm.OWNER, Perm.ADMIN ],
    validate: async (pField: FieldDefn, pEntity: Entity, pVal: any): Promise<ValidateResponse> => {
      // Verify that the placename is unique
      let validity: ValidateResponse;
      if (typeof(pVal) === 'string') {
        const maybePlace = await Places.getPlaceWithName(pVal);
        // If no other place with this name or we're setting our own name
        if (IsNullOrEmpty(maybePlace) || (pEntity as PlaceEntity).id === maybePlace.id) {
          validity = { valid: true };
        }
        else {
          validity = { valid: false, reason: 'place name already exists' };
        };
      }
      else {
        validity = { valid: false, reason: 'place name must be a string' };
      };
      return validity;
    },
    setter: simpleSetter,
    getter: simpleGetter
  },
  'description': {
    entity_field: 'description',
    request_field_name: 'description',
    get_permissions: [ Perm.ALL ],
    set_permissions: [ Perm.DOMAIN, Perm.OWNER, Perm.ADMIN ],
    validate: isStringValidator,
    setter: simpleSetter,
    getter: simpleGetter
  },
  'domainId': {
    entity_field: 'domainId',
    request_field_name: 'domainId',
    get_permissions: [ Perm.ALL ],
    set_permissions: [ Perm.OWNER, Perm.ADMIN ],
    validate: async (pField: FieldDefn, pEntity: Entity, pVal: any, pAuth: AuthToken): Promise<ValidateResponse> => {
      // This is setting a place to a new domainId. Make sure the domain exists
      //         and requestor has access to that domain.
      let validity: ValidateResponse = { valid: false, reason: 'system error' };
      if (typeof(pVal) === 'string') {
        const maybeDomain = await Domains.getDomainWithId(pVal);
        if (IsNotNullOrEmpty(maybeDomain)) {
          if (IsNotNullOrEmpty(pAuth)) {
            if (await checkAccessToEntity(pAuth, maybeDomain, [ Perm.SPONSOR, Perm.ADMIN ])) {
              validity = { valid: true };
            }
            else {
              Logger.error(`PlaceEntity:domainId.validate: attempt to set to non-owned domain. RequesterAId=${pAuth.accountId}, DomainId=${pVal}`);
              validity = { valid: false, reason: 'not authorized to change domainId' };
            };
          };
        }
        else {
          Logger.error(`PlaceEntity:domainId.validate: attempt to set to non-existant domain. RequesterAId=${pAuth.accountId}, DomainId=${pVal}`);
          validity = { valid: false, reason: 'domain not found' };
        };
      }
      else {
        validity = { valid: false, reason: 'invalid domainId format' };
      };
      return validity;
    },
    setter: simpleSetter,
    getter: simpleGetter
  },
  'address': {
    entity_field: 'address',
    request_field_name: 'address',
    get_permissions: [ Perm.ALL ],
    set_permissions: [ Perm.DOMAINACCESS, Perm.ADMIN ],
    validate: isPathValidator,
    setter: simpleSetter,
    getter: simpleGetter
  },
  'path': { // alternate external name for 'address'
    entity_field: 'address',
    request_field_name: 'path',
    get_permissions: [ Perm.ALL ],
    set_permissions: [ Perm.DOMAINACCESS, Perm.ADMIN ],
    validate: isPathValidator,
    setter: simpleSetter,
    getter: simpleGetter
  },
  'maturity': {
    entity_field: 'maturity',
    request_field_name: 'maturity',
    get_permissions: [ Perm.ALL ],
    set_permissions: [ Perm.DOMAINACCESS, Perm.ADMIN ],
    validate: async (pField: FieldDefn, pEntity: Entity, pVal: any): Promise<ValidateResponse> => {
      if(typeof(pVal) === 'string' && Maturity.KnownMaturity(pVal)) {
        return { valid: true };
      }
      return { valid: false, reason: 'not accepted maturity value'};
    },
    setter: simpleSetter,
    getter: simpleGetter
  },
  'tags': {
    entity_field: 'tags',
    request_field_name: 'tags',
    get_permissions: [ Perm.ALL ],
    set_permissions: [ Perm.DOMAINACCESS, Perm.ADMIN ],
    validate: isSArraySet,
    setter: sArraySetter,
    getter: simpleGetter
  },
  'thumbnail': {
    entity_field: 'thumbnail',
    request_field_name: 'thumbnail',
    get_permissions: [ Perm.ALL ],
    set_permissions: [ Perm.DOMAINACCESS, Perm.ADMIN ],
    validate: isStringValidator,
    setter: simpleSetter,
    getter: simpleGetter
  },
  'images': {
    entity_field: 'images',
    request_field_name: 'images',
    get_permissions: [ Perm.ALL ],
    set_permissions: [ Perm.DOMAINACCESS, Perm.ADMIN ],
    validate: isSArraySet,
    setter: sArraySetter,
    getter: simpleGetter
  },
  // admin stuff
  'addr_of_first_contact': {
    entity_field: 'iPAddrOfFirstContact',
    request_field_name: 'addr_of_first_contact',
    get_permissions: [ Perm.ALL ],
    set_permissions: [ Perm.NONE ],
    validate: isStringValidator,
    setter: simpleSetter,
    getter: simpleGetter
  },
  'when_place_entry_created': {
    entity_field: 'whenCreated',
    request_field_name: 'when_place_entry_created',
    get_permissions: [ Perm.ALL ],
    set_permissions: [ Perm.NONE ],
    validate: isDateValidator,
    setter: noSetter,
    getter: dateStringGetter
  }
};

