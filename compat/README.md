# Compatibility

The Bluehost WordPress Plugin is designed to replace the Mojo Marketplace WordPress Plugin for Bluehost customers.

Originally started as a fork, the Bluehost WordPress Plugin is a full refactor of the Mojo Marketplace WordPress Plugin. Despite being refactored to avoid code conflict, the plugins duplicate functionality and should not be run together simultaneously.

The plugin also bumps some minimum requirements for both underlying technologies and WordPress.

Due to the distributed and open-source nature of the plugins, this plugin uses self-diagnostic tools to assure functionality isn't duplicated and this plugin is compatible with the site it's being installed on.

## The `/compat` directory

* `scan.php` is used to diagnose software compatibility, WordPress compatibility and the presence of the `mojo-marketplace-wp-plugin` to avoid errors for site owners.
* `safety-mode.php` is run when a scan fails and is used to communicate errors and steps for resolution to site owners.

## On-going monitoring

For a short time while Bluehost systems are updated, this plugin will monitor for the `mojo-marketplace-wp-plugin` getting inadvertantly reactivated by Bluehost systems or restored by users via backups.

In `../inc/Admin/Compat_Mojo_Plugin.php`, this plugin will monitor for the Mojo Marketplace plugin.

If detected, this plugin will remain active in WordPress, but will automatically put itself back in safe mode, notifying users to remove the `mojo-marketplace-wp-plugin`.

## Long-term

Over time, the goal is to remove these compatibility shims. Part of the reason they've been largely separated from the codebase is to make yanking this code at a later date. Eventually, this plugin will lean on WordPress-native solutions for WordPress Version and PHP version compatibility.