<?php
/**
 * Auto-update related functionality.
 *
 * By default, all auto-updates are enabled (including major releases).
 *
 * @package bluehost-wordpress-plugin
 */

/**
 * Convert string boolean values to actual booleans.
 *
 * @param string $value   The value to convert.
 * @param bool   $default Default value to use if $value is neither 'true' or 'false'.
 *
 * @return bool The conversion result.
 */
function bh_auto_update_make_bool( $value, $default = true ) {
	if ( 'false' === $value ) {
		$value = false;
	}
	if ( 'true' === $value ) {
		$value = true;
	}
	if ( true !== $value && false !== $value ) {
		$value = $default;
	}

	return $value;
}

/**
 * Configures auto-update behaviors for a site.
 *
 * If defined, constants override any settings selected on the Settings > General page.
 *
 * @since 5.5.0 Translation auto-updates are no longer managed by the plugin. These should always auto-update, which is
 *              Core's default behavior.
 * @since 5.5.0 When plugin and theme auto-updates are set to "off", WordPress core will manage
 */
function bh_auto_update_configure() {
	global $wp_version;

	$settings = array(
		'allow_major_auto_core_updates' => get_option( 'allow_major_auto_core_updates', true ),
		'allow_minor_auto_core_updates' => get_option( 'allow_minor_auto_core_updates', true ),
		'auto_update_plugin'            => get_option( 'auto_update_plugin', true ),
		'auto_update_theme'             => get_option( 'auto_update_theme', true ),
	);

	// only change setting if the updater is not disabled
	if ( ! defined( 'AUTOMATIC_UPDATER_DISABLED' ) || AUTOMATIC_UPDATER_DISABLED === false ) {
		if ( defined( 'WP_AUTO_UPDATE_CORE' ) ) {
			switch ( WP_AUTO_UPDATE_CORE ) {
				case true:
					$settings['allow_major_auto_core_updates'] = true;
					$settings['allow_minor_auto_core_updates'] = true;
					break;
				case false:
					$settings['allow_major_auto_core_updates'] = false;
					$settings['allow_minor_auto_core_updates'] = false;
					break;
				default:
					$settings['allow_major_auto_core_updates'] = true;
					$settings['allow_minor_auto_core_updates'] = true;
					break;
			}
		}

		$settings = array_map( 'bh_auto_update_make_bool', $settings );

		// WordPress 5.6 introduces the ability to opt-in to major updates. Let Core handle this now.
		if ( version_compare( $wp_version, '5.6', '>=' ) ) {
			unset( $settings['allow_major_auto_core_updates'] );
		}

		// If plugin or theme settings are disabled, allow the site admin to manage auto-updates in WordPress.
		if ( false === $settings['auto_update_plugin'] && version_compare( $wp_version, '5.5.0', '>=' ) ) {
			unset( $settings['auto_update_plugin'] );
		}

		if ( false === $settings['auto_update_theme'] && version_compare( $wp_version, '5.5.0', '>=' ) ) {
			unset( $settings['auto_update_theme'] );
		}

		foreach ( $settings as $name => $value ) {
			if ( $value ) {
				add_filter( $name, '__return_true' );
			} else {
				add_filter( $name, '__return_false' );
			}
		}
	}
}

add_action( 'plugins_loaded', 'bh_auto_update_configure', 5 );

/**
 * Changes the text in the Automatic updates column of the plugin list table to inform the user
 * that the plugin setting is enabling auto-updates site wide.
 *
 * @param string $html The generated HTML for the automatic updates column.
 *
 * @return string The adjusted HTML for the automatic updates column.
 */
function bh_plugin_auto_update_setting_html( $html ) {
	$bulk_auto_update_enabled = bh_auto_update_make_bool( get_option( 'auto_update_plugin', true ) );

	if ( ! $bulk_auto_update_enabled ) {
		return $html;
	}

	return str_replace(
		'<span class="label">Auto-updates enabled</span>',
		sprintf(
		/* translators: %s Settings > General page URL. */
			__( 'Auto-updates enabled on the <a href="%s">Bluehost > Settings</a> page.', 'bluehost-wordpress-plugin' ),
			admin_url( 'admin.php?page=bluehost#/settings' )
		),
		$html
	);
}

add_filter( 'plugin_auto_update_setting_html', 'bh_plugin_auto_update_setting_html' );

/**
 * Changes the text in the Automatic updates column of the theme list table to inform the user
 * that the themes setting is enabling auto-updates site wide.
 *
 * This only adjusts the themes page in the network admin.
 *
 * @param string $html The generated HTML for the automatic updates column.
 *
 * @return string The adjusted HTML for the automatic updates column.
 */
function bh_theme_auto_update_setting_html( $html ) {
	$bulk_auto_update_enabled = bh_auto_update_make_bool( get_option( 'auto_update_theme', true ) );

	if ( ! $bulk_auto_update_enabled ) {
		return $html;
	}

	return sprintf(
	/* translators: %s Settings > General page URL. */
		__( 'Auto-updates enabled on the <a href="%s">Bluehost > Settings</a> page.', 'bluehost-wordpress-plugin' ),
		admin_url( 'admin.php?page=bluehost#/settings' )
	);
}

add_filter( 'theme_auto_update_setting_html', 'bh_theme_auto_update_setting_html' );

/**
 * Changes the text in the theme details overlay to inform the user
 * that the themes setting is enabling auto-updates site wide.
 *
 * @param string $template The JavaScript template for displaying the auto-update setting link.
 *
 * @return string The modified JavaScript template for displaying the auto-update setting link.
 */
function bh_theme_auto_update_setting_template( $template ) {
	$bulk_auto_update_enabled = bh_auto_update_make_bool( get_option( 'auto_update_theme', true ) );

	if ( ! $bulk_auto_update_enabled ) {
		return $template;
	}

	$template_string = '<# } else if ( data.autoupdate.forced ) { #>
					' . __( 'Auto-updates enabled', 'bluehost-wordpress-plugin' );
	$replacement     = '<# } else if ( data.autoupdate.forced ) { #>';
	$replacement     .= sprintf(
	/* translators: %s Settings > General page URL. */
		__( 'Auto-updates enabled on the <a href="%s">Bluehost > Settings</a> page.', 'bluehost-wordpress-plugin' ),
		admin_url( 'admin.php?page=bluehost#/settings' )
	);

	return str_replace( $template_string, $replacement, $template );
}

add_filter( 'theme_auto_update_setting_template', 'bh_theme_auto_update_setting_template' );

/**
 * Sync the plugin's Core major auto-update setting with core's.
 *
 * @param mixed  $old_value The old option value.
 * @param mixed  $value     The new option value.
 */
function bh_sync_plugin_major_auto_core_update_option( $old_value, $value ) {
	if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
		return;
	}

	if ( 'disabled' === $value ) {
		update_option( 'allow_major_auto_core_updates', 'false' );
	} else {
		update_option( 'allow_major_auto_core_updates', 'true' );
	}
}

add_action( 'update_option_auto_update_core_major', 'bh_sync_plugin_major_auto_core_update_option', 10, 2 );

/**
 * When upgrading from < 5.6, sync the plugin option with Core's new option.
 *
 * @param int $wp_db_version         The new $wp_db_version.
 * @param int $wp_current_db_version The old (current) $wp_db_version.
 */
function bh_core_update_560( $wp_db_version, $wp_current_db_version ) {
	if ( 49572 > $wp_current_db_version && 49572 < $wp_db_version ) {
		$update_option = get_option( 'allow_major_auto_core_updates', 'true' );

		if ( 'false' === $update_option ) {
			update_option( 'auto_update_core_major', 'disabled' );
		} else {
			update_option( 'auto_update_core_major', 'enabled' );
		}
	}
}

add_action( 'wp_upgrade', 'bh_core_update_560', 10, 2 );
