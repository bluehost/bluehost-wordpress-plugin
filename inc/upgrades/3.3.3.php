<?php

use NewfoldLabs\WP\Module\Performance\CachePurgingService;
use NewfoldLabs\WP\Module\Performance\CacheTypes\File;

// Remove the file-based caching rules from the .htaccess file
File::removeRules();

// Purge the file-based cache
( new CachePurgingService( [ new File() ] ) )->purgeAll();