<?php
  error_reporting(2);

function minafi_setup() {

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for custom logo.
	 *
	 *  @since Twenty Sixteen 1.2
	 */
	add_theme_support( 'custom-logo', array(
		'height'      => 240,
		'width'       => 240,
		'flex-height' => true,
	) );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 1200, 9999 );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 *
	 * See: https://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'image',
		'gallery'
	) );
}
add_action( 'after_setup_theme', 'minafi_setup' );

require get_template_directory() . '/inc/aesop.php';
require get_template_directory() . '/inc/categories.php';
require get_template_directory() . '/inc/feed.php';
require get_template_directory() . '/inc/images.php';
require get_template_directory() . '/inc/menus.php';
require get_template_directory() . '/inc/settings.php';
require get_template_directory() . '/inc/styles.php';
require get_template_directory() . '/inc/template-tags.php';
require get_template_directory() . '/inc/optimizations.php';
