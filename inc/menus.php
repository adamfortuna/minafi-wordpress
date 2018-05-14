<?php
function register_my_menus() {
  register_nav_menus(
    array(
      'primary-menu' => __( 'Primary Menu' )
     )
   );
 }
 add_action( 'init', 'register_my_menus' );
?>
