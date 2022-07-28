<a href="https://bluehost.com/" target="_blank">
    <img src="static/images/logo.svg" alt="Bluehost Logo" title="Bluehost" align="right" height="32" />
</a>

[![Cypress Tests](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/cypress.yml/badge.svg)](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/cypress.yml)
[![Lint](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/lint.yml/badge.svg)](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/lint.yml)
[![Build Plugin](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/upload-artifact-on-push.yml/badge.svg)](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/upload-artifact-on-push.yml)

Bluehost WordPress Plugin
==========================

WordPress plugin that integrates your WordPress site with the Bluehost control panel, including performance, security, and update features. 


### Release Steps

Steps to release a new version of the plugin:

- [ ] Ensure `master` branch has desired/latest/approved PRs merged.
- [ ] Ensure `master` branch has properly bumped the version. 
  - [ ] The [plugin header version](bluehost-wordpress-plugin.php#L5).
  - [ ] The [plugin constant version](bluehost-wordpress-plugin.php#L35).
- [ ] Ensure `master` branch has passing cypress tests.
- [ ] Ensure `master` branch has passing lint tests.
- [ ] Download latest build and install on a site for a manual test.
- [ ] Create a [new release](https://github.com/bluehost/bluehost-wordpress-plugin/releases/new) tagged and named for the version.
- [ ] Ensure the satis [build](https://bluehost.github.io/satis/#bluehost/bluehost-wordpress-plugin) is [triggered](https://github.com/bluehost/bluehost-wordpress-plugin/actions/workflows/satis-webhook.yml) and [completes](https://github.com/bluehost/satis/actions).
- [ ] Ensure [cloudflare worker](https://wp-github-release-api.bluehost.workers.dev/plugins/bluehost/bluehost-wordpress-plugin) displays the release as latest/current version.