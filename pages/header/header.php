<?php

  if ($_GET['page'] === 'mojo-home') {

    require_once( MM_BASE_DIR . 'pages/header/home.php' );

  } elseif ($_GET['page'] === 'mojo-marketplace') {

    if ($_GET['section'] === 'themes') {
      require_once( MM_BASE_DIR . 'pages/header/marketplace/themes.php' );
    }
    elseif ($_GET['section'] === 'plugins') {
      require_once( MM_BASE_DIR . 'pages/header/marketplace/plugins.php' );
    }
    elseif ($_GET['section'] === 'graphics') {
      require_once( MM_BASE_DIR . 'pages/header/marketplace/graphics.php' );
    }
    elseif ($_GET['section'] === 'business-tools') {
      require_once( MM_BASE_DIR . 'pages/header/marketplace/business-tools.php' );
    }
    elseif ($_GET['section'] === 'services') {
      require_once( MM_BASE_DIR . 'pages/header/marketplace/services.php' );
    }
    else {
      require_once( MM_BASE_DIR . 'pages/header/marketplace.php' );
    }


  } elseif($_GET['page'] === 'mojo-purchases') {

    require_once( MM_BASE_DIR . 'pages/header/marketplace/purchases.php' );

  }
  elseif($_GET['page'] === 'mojo-performance') {

    require_once( MM_BASE_DIR . 'pages/header/performance.php' );

  }

?>
