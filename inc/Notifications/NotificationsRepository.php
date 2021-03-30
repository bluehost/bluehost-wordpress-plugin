<?php

namespace Bluehost\Notifications;

use Endurance\WP\Module\Data\HubConnection;
use WP_Forge\Helpers\Arr;
use wpscholar\Collection;

/**
 * Class NotificationsRepository
 *
 * @package Bluehost\Notifications
 */
class NotificationsRepository {

	/**
	 * Transient name where notifications are stored.
	 */
	const TRANSIENT = 'bluehost_notifications';

	/**
	 * Collection of notifications.
	 *
	 * @var Notification[]
	 */
	protected $notifications = array();

	/**
	 * NotificationsRepository constructor.
	 */
	public function __construct() {

		$notifications = get_transient( self::TRANSIENT );

		if ( false === $notifications ) {
			$response = wp_remote_get(
				BH_HUB_URL . '/notifications',
				array(
					'headers' => array(
						'Content-Type'  => 'application/json',
						'Accept'        => 'application/json',
						'Authorization' => 'Bearer ' . HubConnection::get_auth_token(),
					),
				)
			);
			if ( ! is_wp_error( $response ) ) {
				$body = wp_remote_retrieve_body( $response );
				$data = json_decode( $body, true );
				if ( $data && is_array( $data ) ) {
					$notifications = Arr::get( $data, 'data' );
					set_transient( self::TRANSIENT, $notifications, 5 * MINUTE_IN_SECONDS );
				}
			}
		}

		$notifications = is_array( $notifications ) ? $notifications : array();

		// Index by ID and convert all data to Notification objects before storing.
		$this->notifications = Collection::make( $notifications )->indexBy( 'id' )->map(
			function ( $notification ) {
				return new Notification( $notification );
			}
		)->all();
	}

	/**
	 * Get all of the notifications as objects.
	 *
	 * @return Notification[]
	 */
	public function all() {
		return $this->notifications;
	}

	/**
	 * Get the notifications as a collection.
	 *
	 * @return Collection
	 */
	public function collection() {
		return Collection::make( $this->all() );
	}

	/**
	 * Get a notification by ID.
	 *
	 * @param string $id Notification ID.
	 *
	 * @return Notification
	 */
	public function get( $id ) {
		return $this->notifications[ $id ];
	}

	/**
	 * Check if a notification exists.
	 *
	 * @param string $id Notification ID.
	 *
	 * @return bool
	 */
	public function has( $id ) {
		return isset( $this->notifications[ $id ] );
	}

	/**
	 * Remove a notification from the collection.
	 *
	 * @param string $id Notification ID.
	 */
	public function remove( $id ) {
		$notification = $this->notifications[ $id ];
		$notification->dismiss();
		unset( $this->notifications[ $id ] );
		self::setTransient( $this->asArray() );
	}

	/**
	 * Set the transient where notifications are stored.
	 *
	 * @param array     $notifications Array of notifications.
	 * @param float|int $expiration    Transient expiration.
	 */
	public static function setTransient( array $notifications, $expiration = 5 * MINUTE_IN_SECONDS ) {
		set_transient( self::TRANSIENT, array_values( $notifications ), $expiration );
	}

	/**
	 * Delete the transient where notifications are stored.
	 */
	public static function deleteTransient() {
		delete_transient( self::TRANSIENT );
	}

	/**
	 * Get all notifications as an array.
	 *
	 * @return array
	 */
	public function asArray() {
		return array_map(
			function ( Notification $notification ) {
				return $notification->asArray();
			},
			$this->notifications
		);
	}

	/**
	 * Get all notifications as JSON.
	 *
	 * @return string
	 */
	public function asJson() {
		return (string) wp_json_encode( $this->asArray(), JSON_PRETTY_PRINT );
	}

	/**
	 * Convert object to a string.
	 *
	 * @return string
	 */
	public function __toString() {
		return $this->asJson();
	}

}
