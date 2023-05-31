<a href="https://bluehost.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/bluehost/bluehost-wordpress-plugin/main/assets/svg/bluehost-logo.svg" alt="Bluehost Logo" title="Bluehost" align="right" height="32" />
</a>

# Bluehost WordPress Plugin
[![Version Number](https://img.shields.io/github/v/release/bluehost/bluehost-wordpress-plugin?color=21a0ed&labelColor=333333)](https://github.com/bluehost/bluehost-wordpress-plugin/releases)
[![Package Plugin](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/upload-asset-on-release.yml/badge.svg?event=release)](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/upload-asset-on-release.yml)
[![Cypress Tests](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/cypress.yml/badge.svg?branch=main)](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/cypress.yml)
[![Lint](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/lint.yml/badge.svg?branch=main)](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/lint.yml)
[![Build Plugin](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/upload-artifact-on-push.yml/badge.svg?branch=main)](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/upload-artifact-on-push.yml)

WordPress plugin that integrates a WordPress site with the Bluehost control panel, including performance, security, and update features.

# Installation

The 3.x version can be found on the `main` branch.

Find the `bluehost-wordpress-plugin.zip` asset for your preferred version at: https://github.com/bluehost/bluehost-wordpress-plugin/releases/.

Alternatively, check the updater endpoint for the latest version at: https://hiive.cloud/workers/release-api/plugins/bluehost/bluehost-wordpress-plugin, this also includes a download link to the latest zip file or use this link to access the latest download: https://hiive.cloud/workers/release-api/plugins/bluehost/bluehost-wordpress-plugin/download/.

# Releasing Updates

## Release Steps

Review the [version control](https://newfold-labs.github.io/how-we-work/9-version-control.html) and [releases](https://newfold-labs.github.io/how-we-work/10-releases.html) "[How We Work](https://newfold-labs.github.io/how-we-work/)"
docs for more information.
## Version 3.x

This plugin has version number set in 3 distinct places in 2 files:

- The plugin header info ([bluehost-wordpress-plugin.php line 14](bluehost-wordpress-plugin.php#14)) - this is used in the plugin php code.
- The constant BLUEHOST_PLUGIN_VERSION ([bluehost-wordpress-plugin.php line 34](bluehost-wordpress-plugin.php#L34)) - this is used by WordPress.
- In the package.json version value ([package.json line 5](package.json#L5)) this is used by the build step to place the release files within a matching version directory for convenient cache busting. All 3 instances need to be incremented in conjuction with new releases via github tagging. (There is have a validation for proper versioning in the release workflow).

## Version 2.x
The legacy 2.x version can be found on the `master` branch. 

### Pre-Releases

- Once code in the `develop` branch is ready for release testing, a `X.Y.Z-alpha.1` version should be created and MUST be tagged as a pre-release. Subsequent alpha releases should increment the last digit of the version (e.g. `X.Y.Z-alpha.2`). Alpha releases are open to having new features added and/or bugs fixed. Tagging a release will trigger the full test matrix. Any test failures should be addressed.
- After all features are finalized and added to the release, a beta version should be tagged and MUST be marked as a pre-release. Beta releases are only open to having bugs fixed. Version numbers should follow the same pattern as the alpha versions (e.g. `X.Y.Z-beta.1`). Tagging a release will trigger the full test matrix. Any test failures should be addressed.

### Production Release

Steps to follow when releasing a new version of the plugin:

- Schedule the release with the team.
- Ensure that the `develop` branch is up-to-date with the latest changes.
- Create a release branch for this release: `release/X.Y.Z` branching from `develop`.
- Ensure `release` branch has properly bumped the version.
  - The [plugin header version](bluehost-wordpress-plugin.php#L5).
  - The [plugin constant version](bluehost-wordpress-plugin.php#L35).
  - The [plugin package veresion](package.json#L5).
- Ensure the `release` branch has passing tests.
- Ensure the `release` branch passes linting.
- Tag an initial release candidate version of the plugin (e.g. `X.Y.Z-rc.1`) and be sure to mark it as a pre-release.
- Ensure that the `release` branch passes the full test matrix.
- Alert the team via chat and announce that the latest build is available for testing.
- Download the latest build and install on a site for manual testing.
- Confirm no issues are found in testing. 
- If issues are found, push changes directly to the release branch, tag a new pre-release
  version (e.g. `X.Y.Z-rc.2`) and run through the manual testing process again.
- When ready to release, merge the release branch into the `master` branch and be sure any changes made directly on the release branch are also merged back into the `develop` branch.
- Create a [new release](https://github.com/bluehost/bluehost-wordpress-plugin/releases/new) tagged (X.Y.Z) and
  named (Version X.Y.Z) for the version. This should NOT be marked as a pre-release.
- Ensure the satis [build](https://bluehost.github.io/satis/#bluehost/bluehost-wordpress-plugin)
  is [triggered](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/satis-webhook.yml)
  and [completes](https://github.com/bluehost/satis/actions).
- Ensure that the [update API](https://hiive.cloud/workers/release-api/plugins/bluehost/bluehost-wordpress-plugin/)
  displays the release as latest/current version.
- Alert the team via chat to announce the end of the release process.
- Watch for the plugin release to rollout in Hiive or monitor by [running a query](https://github.com/bluehost/bluehost-wordpress-hub/wiki/Queries#brand-plugin-rollout) against the Hiive.

# Style and Design
See this [figma for a style guide](https://www.figma.com/file/pNcxXb2avx36YAWOD1XkgZ/Bluehost-Project-SP?type=design&t=j2AyR9xIPKwWeFjO-0).

# How We Work
Newfold Labs is an interdisciplinary product and engineering team at Newfold Digital creating next-generation solutions that support our customers and our business. Learn more about [how we work](https://github.com/newfold-labs/how-we-work).

