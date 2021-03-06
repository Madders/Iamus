# Iamus Changelog
## Version 2.3.9

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/75d22ab6786b25262a09face4037ff5b3ba3bc08">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/8dd3770b043351a8b35a7c52c47ae1608b58163d">view &bull;</a> Update histogram begin time calculation for both EventHistogram and ValueHistogram.     Beginning and end dates were not calculated correctly.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/0e33a26e983055ee37d2245fb187506e4c36aeaa">view &bull;</a> Add tracking of connected sockets so can force shutdown.     ExpressJS http.server will not close if there are open sockets     so close open sockets when shutting down.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/d6f162c9f335c1fe528e89f8b52149191a36316e">view &bull;</a> Bump version to 2.3.9</li> 
</ul>

## Version 2.3.8

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/c1671fa5576c2c7f2aced46647654592882f16ae">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/8300f8aa96626a7aa5337c7a2af8e92b3047ce32">view &bull;</a> Update DockerFile to pull from the official location: 'vircadia/Iamus'.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/4d46a409ee853b7bd541603db690e278026b6f54">view &bull;</a> Fix line endings to be UNIX format.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/73b2b91cc867e54332964652c29a8d4d14d50bf5">view &bull;</a> Remove 'friends' and 'connections' from buildAccountProfile() response.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/f1bb24c6d42dad66f154d8733d8a20c9b37e4a85">view &bull;</a> Separate error messages for /api/v1/domain/:domainId     separate 'not logged in' from 'domain not found' Add comments on request processors for set variables. Change no auth info error to "Not logged in"</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/198550c165fdd9af55c407fa785b39a0cf71b4e3">view &bull;</a> Clean up 'imports' in Db.ts so all @Tools are together</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/2be04a3f53c56bee58e47db90a68a38ca8c5881c">view &bull;</a> Add comments to request processors making clear set request variables.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/715e9fbfa0f5d66e26a007d553069ffc27f891a4">view &bull;</a> Add "backup" section to config.ts for the BackupDb.sh script.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/8a5b14e99d11cc834377104f0223bc6d96dc51a8">view &bull;</a> Fix wrong calculation of monitoring histogram 'timeBase'     'timeBase' should now be the start time of the first bucket.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/3db9af9be1ce2dd77d56cc20fe671455b9bca9ec">view &bull;</a> Bump version to 2.3.8</li> 
</ul>

## Version 2.3.7

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/c2350d627178836c5edcd7f2516bdcaf8b28ec59">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/ad8adc9dd94fa797e978131ccf0e840eda7e77df">view &bull;</a> Update documentation     Clarify that fetching of accounts can be done either by accountId or username. Add comments to AccountScopeFilter to describe its use.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/c692f2b4081a33673dc5e6006407637a20f21e7d">view &bull;</a> Replace build bash scripts with node.js scripts. (#68)</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/37a4dbee5137ef2da8cb1b876ac86c22baa2c4d5">view &bull;</a> Clean up some code in Util.buildLocationInfo(). No functional changes.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/12f31a4f23e14d264b7e0feddef3cc5214f3dd8f">view &bull;</a> Limit the size of input JSON to Config.server.max-body-size.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/249b26d0989caa820a2d9d79db30f05083d56c72">view &bull;</a> Fix pagination so it returns the proper number of items on a page.     Makes the "?per_page=N&page_num=M" work properly.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/47bab57be416826773550493430844b113fe2188">view &bull;</a> Add Perm.PUBLIC to check if accessing an AccountEntity that is "public"     ie, 'availability' is either unspecified or Perm.ALL.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/d7c169fd05782d45fa5b76915b410e89b95a8d09">view &bull;</a> Add AccountEntity.profileDetail that just stores a JSON object. Modify AccountEntity.locker to accept a JSON object. Add validators for 'object' that allows storing JSON object values.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/696007d84fa5752acb165c28be5c1bd586a50e3f">view &bull;</a> Modify returned Account fields to include 'profileDetail'. Update documentation.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/43813c4ff380e3e7f6704b479593d149e0e745e9">view &bull;</a> Add /api/v1/profile and /api/v1/profile/:accountId Add documentation for same.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/dfda90f4731c4f0aa16d8fc8a5d6cd840403965d">view &bull;</a> Bump to 2.3.7</li> 
</ul>

## Version 2.3.6

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/d39b5731e0481cc0006dae2e6fb4a8530137b0bb">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/c67706945d71c51d806023c02dce26d4147ea1a6">view &bull;</a> Minor bug fixes in BackupDb.sh</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/6b05304c326f8303a18afbde9421ccf030949297">view &bull;</a> Update links and names (#66)</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/cc8e9d64f077c2ee62405cfe2437ad3483845c24">view &bull;</a> Update NPM package version.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/8cf1eee04aab3a069442c346241cf96aa8572f1a">view &bull;</a> Fix problem where user wasn't returned their token by /api/v1/tokens     The search field must be specified to AccountScopeFilter     A few other places were checked and updated.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/1d0be3bf637315c3196390124600cada3fc218f1">view &bull;</a> Bump version to 2.3.6</li> 
</ul>

## Version 2.3.5

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/e95291d4988f48d780795e134a364d9120f22fc3">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/b360944a70a994ee701a0f2b23303a1d71dd76fb">view &bull;</a> Change Place filter 'maturity' to take a comma separated string     of maturity classes to match.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/00355c7481b1958379d574a1ff7acc65a18d2eed">view &bull;</a> When creating a Place, default maturity to the parent domain's maturity. Default DomainEntity.maturity to Maturity.UNRATED.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/a80864dfea02c284c195000184392f9c1f7bdcce">view &bull;</a> Massive refactoring to remove circular import dependencies that were     causing null value initializations due to how Javascript loads. Move Entity field definitions into separate files. Moved Entity field getting and setting into the Entity controlling class. Repackaged (into multiple files) Permission and Get/Set/Validate routines.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/bf4df1bad8290c7ef4b20e5ce940b1a925f3b04e">view &bull;</a> Bump version to 2.3.5</li> 
</ul>

## Version 2.3.4

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/387e26b76f6c98b5fe5e55f34d319c588f77b5a8">view &bull;</a> Update Changelog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/d9759a3986c7c906b687047df268a9476193648d">view &bull;</a> Add documentation on the design of the Entity field get/set system.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/356b27369300f543e57dd7e7a73bc8f1d686ea15">view &bull;</a> Fix DELETE Place so the owner of the Place's domain can delete the Place.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/f9651d25d43a76d8e4aa5ee932f3e0a0f279514a">view &bull;</a> Make Monitoring.event so it doesn't fail if monitoring was not inited.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/d45833f889f838bdefe5cf8bfb31d316aad486e5">view &bull;</a> Record network_address and network_port if specified when creating doamin.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/acaa36a494ad439122f48376ba31f08068219566">view &bull;</a> Added "maturity" and "tags" to PlaceEntity Centralized "maturity" specifications into src/Entities/sets/Maturity.ts Moved AccountAvailability and AccountRoles to src/Entities/sets and made a set pattern. Documented "/api/v1/places?maturity=LEVEL" and "/api/v1/places?tags=TAGLIST" Added comments to src/Entities/EntityFilters/CriteriaFilter.ts explaining how filters are to be used Added "maturity-catagories" to Places responses Fixed /api/v1/users/places to return only the places that belong to the requesting user Deleted bin/www -- what was that from??</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/56c4649b60f58915c3b05907f3f1149cf3fe0e71">view &bull;</a> Bump version to 2.3.4</li> 
</ul>

## Version 2.3.3

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/fe0518f44cbbab7e87a68c8e2bf44a8149cf9262">view &bull;</a> Update Changelog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/f1299154d43fe10687de6bc8ee79460fa4e24e53">view &bull;</a> Add proper handling of SIGTERM and SIGINT     Shutdown server, finish requests, and then cleanly exit.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/6a8c2b0fab15558ef684555ff35843d030dcf718">view &bull;</a> Add domain.sponsorAccountId to Places information returned by /api/v1/places/... Update documentation.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/fc4f64670e5836f732b8cef1f5a5a477d3aea76f">view &bull;</a> Fix problem with changing username: update AccountEntity setPermissions. Should fix vircadia/project-iamus-dashboard#21</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/8cf02628b3c8055d0e84655fa2e65951bd2a6a4b">view &bull;</a> Bump version to 2.3.3</li> 
</ul>

## Version 2.3.2

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/1a137f8f7b2722234ef5d3a5fd110d1007a502fd">view &bull;</a> Fix sorting of versions in genChangeLog.sh Update Changelog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/4654f30bb6af0cb89ac0a4c7fcf9f640576876f3">view &bull;</a> Return more useful error message when finding a domain name contains     non-allowed characters. Some non-functional formatting and code cleanup.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/729cdd156c95d514751a7663bafd6b584c725d49">view &bull;</a> Fix line endings to Linux style</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/0511c01854bebf75a46a7ad79dbf243f194aa06d">view &bull;</a> Modify Entity field value validation to return reason for any validation failure.     Rather than just returning 'false', the validator returns a structure with         an optional reason for the validation failure. Modify the callers of Entity field setting to return error. Closes #48 Fix AccountEntity.Availability and AccountEntity.Roles to validate values correctly.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/8dca92378f89629819e544ff3d73351756902b2e">view &bull;</a> Tone down the AccountEntity.email format validation to require one AT sign     An RFC complient email address can be very complex so rely on later     email verification handshake to really checkout that email is a good format. Closes #63</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/3d6f7679ea605c288f537ddf8fffd011d9795922">view &bull;</a> Bump version to 2.3.2</li> 
</ul>

## Version 2.3.1

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/a0edba9f67e250ba5d1b8ad5c758bd17d4981af3">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/ffe9c154e709e5138c3afaa7377b448abac81354">view &bull;</a> Bump version to 2.3.1</li> 
</ul>

