<?php
function register_my_menus() {
  register_nav_menus(
    array(
      'primary-menu' => __( 'Primary Menu' )
     )
   );
 }
 add_action( 'init', 'register_my_menus' );
 
 
function hidden_widgets_init() {
	register_sidebar( array(
		'name'          => 'Hidden Widgets Area',
		'id'            => 'hidden_widgets'
	));
}
add_action( 'widgets_init', 'hidden_widgets_init' );


?>
