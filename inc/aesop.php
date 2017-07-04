<?php

function aesop_setup(){
  // Add extended style support for aesop
  // add_theme_support("aesop-component-styles", array("image", "quote", "gallery", "content", "video", "collection", "chapter", "document", "character"));
  add_theme_support("aesop-component-styles", array("parallax", "image", "quote", "gallery", "content", "video", "audio", "collection", "chapter", "document", "character", "map", "timeline" ) );

  if ( function_exists( 'register_nav_menus' ) ){
		register_nav_menus(
			array(
			  'primary' => __('Primary','aesop-story-theme')
			)
		);
	}
}

add_theme_support("aesop-component-styles", array("parallax", "image", "quote", "gallery", "content", "video", "audio", "collection", "chapter", "document", "character", "map", "timeline" ) );

function aesop_body_class($classes){
  $classes[] = 'aesop-minafi-theme';
  return $classes;
}

function aesop_editor_styles(){
  add_editor_style('editor-style.css');
}

// Set some constants
define('AI_CORE_UNSTYLED', true);
add_action('after_setup_theme', aesop_setup);
add_filter('body_class', aesop_body_class);
add_action('init', aesop_editor_styles);
