<?php

namespace Bluehost\Notifications;

use NewfoldLabs\WP\Module\Data\HiiveConnection;
use WP_Forge\Helpers\Arr;
use wpscholar\Url;

/**
 * Class Notification
 *
 * @package Bluehost\Notifications
 *
 * @property string $id         Notification ID.
 * @property array  $locations  Locations where the notification should display.
 * @property int    $expiration Notification expiration.
 * @property string $content    Notification content in HTML format.
 */
class Notification {

	/**
	 * ID for the notification.
	 *
	 * @var string
	 */
	protected $id;

	/**
	 * Collection of location contexts where the notification should show.
	 *
	 * @var array
	 */
	protected $locations;

	/**
	 * Expiration timestamp indicating when the notification should no longer be shown.
	 *
	 * @var int
	 */
	protected $expiration;

	/**
	 * The HTML content to be rendered for this notification.
	 *
	 * @var string
	 */
	protected $content;

	/**
	 * Notification constructor.
	 *
	 * @param string|array $data Notification data in JSON or array format.
	 */
	public function __construct( $data ) {
		if ( is_string( $data ) ) {
			$data = json_decode( $data, true );
		}
		if ( is_array( $data ) ) {
			$this->id         = Arr::get( $data, 'id', '' );
			$this->locations  = Arr::get( $data, 'locations', array() );
			$this->expiration = Arr::get( $data, 'expiration', 0 );
			$this->content    = Arr::get( $data, 'content', '' );
		}
	}

	/**
	 * Dismiss a message.
	 */
	public function dismiss() {
		wp_remote_post(
			NFD_HIIVE_URL . '/notifications/' . $this->id,
			array(
				'headers'  => array(
					'Content-Type'  => 'application/json',
					'Accept'        => 'application/json',
					'Authorization' => 'Bearer ' . HiiveConnection::get_auth_token(),
				),
				'blocking' => false,
			)
		);
	}

	/**
	 * Check if notification is expired.
	 *
	 * @return bool
	 */
	public function isExpired() {
		return ! empty( $this->expiration ) && time() >= $this->expiration;
	}

	/**
	 * Check if a notification should be displayed in a particular context.
	 *
	 * @param string $context     Context.
	 * @param array  $contextData Context data.
	 *
	 * @return bool
	 */
	public function shouldShow( $context, array $contextData ) {

		// Never show expired notifications
		if ( $this->isExpired() ) {
			return false;
		}

		// Loop through each location to handle any that are applicable
		foreach ( $this->locations as $location ) {

			// If the location context doesn't match the current context, skip this location.
			if ( Arr::get( $location, 'context' ) !== $context ) {
				continue;
			}

			switch ( $context ) {

				case 'wp-admin-notice': // phpcs:ignore PSR2.ControlStructures.SwitchDeclaration.TerminatingComment
					// Don't show standard WordPress admin notices on the Bluehost plugin pages.
					if ( false !== strpos( Url::getCurrentUrl(), 'admin.php?page=bluehost' ) ) {
						return false;
					}

				case 'bluehost-plugin':
					// The current page
					$current_page = Arr::get( $contextData, 'page' );

					// If bluehost-plugin: Page is the value of the Bluehost plugin page hash (e.g. /home).
					// If wp-admin-notice: Page is the URL path relative to the wp-admin/ directory.
					$pages = Arr::get( $location, 'pages', array() );

					// If pages is a string, it means we should show on all pages.
					if ( is_string( $pages ) ) {
						return true;
					}

					if ( is_array( $pages ) ) {
						// If current page is not set, assume we want to show on all pages (makes REST API work properly).
						if ( is_null( $current_page ) ) {
							return true;
						}

						foreach ( $pages as $path ) {
							if ( false !== strpos( $current_page, $path ) ) {
								return true;
							}
						}
					}

					break;

				case 'wp-plugin-search':
					// TODO: Implement checks for keywords searched and plugin slugs in the results.
					break;
			}
		}

		return false;
	}

	/**
	 * Magic method for checking if a property exists.
	 *
	 * @param string $name Property name.
	 *
	 * @return bool
	 */
	public function __isset( $name ) {
		return property_exists( $this, $name );
	}

	/**
	 * Magic method for fetching protected properties.
	 *
	 * @param string $name Property name.
	 *
	 * @return mixed
	 */
	public function __get( $name ) {
		$value = null;
		if ( property_exists( $this, $name ) ) {
			$value = $this->{$name};
		}

		return $value;
	}

	/**
	 * Get data in array format.
	 *
	 * @return array
	 */
	public function asArray() {
		return array(
			'id'         => $this->id,
			'locations'  => $this->locations,
			'expiration' => $this->expiration,
			'content'    => $this->content,
		);
	}

	/**
	 * Get data in JSON format.
	 *
	 * @return string
	 */
	public function asJson() {
		return (string) wp_json_encode( $this->asArray(), JSON_PRETTY_PRINT );
	}

	/**
	 * Convert object to string.
	 *
	 * @return string
	 */
	public function __toString() {
		return $this->asJson();
	}

}
