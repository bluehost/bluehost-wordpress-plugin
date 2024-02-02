<?php

use NewfoldLabs\WP\Module\Performance\CachePurgingService;
use NewfoldLabs\WP\Module\Performance\CacheTypes\File;

// Remove the file-based caching rules from the .htaccess file
File::removeRules();

// Purge the file-based cache
( new CachePurgingService( array( new File() ) ) )->purgeAll();
