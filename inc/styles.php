<?php

/**
 * Register Google fonts for Twenty Sixteen.
 * Create your own twentysixteen_fonts_url() function to override in a child theme.
 *
 * @return string Google fonts URL for the theme.
 */
function minafi_fonts_url() {
	$fonts_url = '';
	$fonts     = array();
	$subsets   = 'latin,latin-ext';
	// $fonts[] = 'Lato:300,400,700,900|Merriweather:300,300i,400,400i,700';
  $fonts[] = 'Lato:300,400,700,900';
	// $fonts[] = 'Open Sans:400,700,900,400italic,700italic';

	if ( $fonts ) {
		$fonts_url = add_query_arg( array(
			'family' => urlencode( implode( '|', $fonts ) ),
			'subset' => urlencode( $subsets ),
		), 'https://fonts.googleapis.com/css' );
	}

	return $fonts_url;
}

function minafi_scripts() {
	// Add custom fonts, used in the main stylesheet.
	// wp_enqueue_style( 'minafi-fonts', minafi_fonts_url(), array(), null );

	// Theme stylesheet.
	wp_enqueue_style('minafi-style', get_stylesheet_directory_uri() . '/assets/css/app.css', array(), null);
}
add_action( 'wp_enqueue_scripts', 'minafi_scripts' );
