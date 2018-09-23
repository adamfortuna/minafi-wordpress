<?php

  // include jQuery at the optimal location based on the page type
  function optimize_jquery_position() {
  	wp_deregister_script('jquery');
    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-1.12.4.min.js', array(), null, true);
  }
  add_action('wp_enqueue_scripts', 'optimize_jquery_position');


  function enqueue_minfi_script() {
    wp_enqueue_script('minafi-app', get_template_directory_uri() . '/assets/js/app.bundle.js', array('jquery'), null, true);
  }
  add_action('wp_enqueue_scripts', 'enqueue_minfi_script');

  // Force load of jQuery later on pages where it's not used.
  $GLOBALS['$already_added_js'] = false;
  function minafi_js_scripts() {
    if(!$GLOBALS['$already_added_js']) {
      // Leaving this hook in case I want to add it back
      echo '<script src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>';
    }
    $GLOBALS['$already_added_js'] = true;
  }
  add_action('ase_theme_post_inside_header_bottom', 'minafi_js_scripts');


  // REMOVE WP EMOJI
  remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
  remove_action( 'wp_print_styles', 'print_emoji_styles' );
  remove_action( 'admin_print_styles', 'print_emoji_styles' );

  // REMOVE dashicons
  // Note: these are used by megamaxmenu and aesop story engine
  // add_action( 'wp_print_styles', 'my_deregister_styles', 100 );
  // function my_deregister_styles()    {
  //    wp_deregister_style( 'dashicons' );
  // }


  function criticalCssFile() {
    if(is_page()) {
      return "page";
    } elseif(is_single()) {
      return "post";
    } elseif(is_archive()) {
      return "archive";
    } else {
      return "index";
    }
  }
?>
