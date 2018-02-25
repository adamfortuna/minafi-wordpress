<?php

  // include jQuery at the optimal location based on the page type
  function optimize_jquery_position() {
  	wp_deregister_script('jquery');
    wp_enqueue_script('jquery', 'true', array(), null, true);
  }
  add_action('wp_enqueue_scripts', 'optimize_jquery_position');
  
  
  function enqueue_minfi_script() {
    wp_enqueue_script('minafi-app', get_template_directory_uri() . '/assets/js/app.bundle.js', array(), null, true);
  }
  add_action('wp_enqueue_scripts', 'enqueue_minfi_script');

  // Force load of jQuery later on pages where it's not used.
  $GLOBALS['$already_added_js'] = false;
  function minafi_js_scripts() {
    if(!$GLOBALS['$already_added_js']) {
      // Leaving this hook in case I want to add it back
      echo '<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>';
    }
    $GLOBALS['$already_added_js'] = true;
  }
  add_action('ase_theme_post_inside_header_bottom', 'minafi_js_scripts');
?>


