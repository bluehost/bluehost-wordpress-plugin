<?php

// Load up Composer dependencies
require dirname( dirname( __DIR__ ) ) . '/vendor/autoload.php';

$wp_phpunit_dir = getenv( 'WP_PHPUNIT__DIR' );

// Bootstrap tests
require $wp_phpunit_dir . '/includes/bootstrap.php';
