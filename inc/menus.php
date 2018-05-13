<?php
function register_my_menus() {
  register_nav_menus(
    array(
      'my-story-menu' => __( 'My Story Menu' )
     )
   );
 }
 add_action( 'init', 'register_my_menus' );
?>
