<?php

// Delete the `mm_brand` option. We've removed all situations where it is used.
delete_option( 'mm_brand' );

// Remove the icon hash transient, just in case it doesn't contain the Bluehost logo
delete_transient( 'mm_icon_hash' );
