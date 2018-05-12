<?php
function register_my_menus() {
  register_nav_menus(
    array(
      'my-story-menu' => __( 'My Story Menu' ),
      'learn-to-invest-menu' => __( 'Learn to Invest Menu' )
     )
   );
 }
 add_action( 'init', 'register_my_menus' );


 class WalkerCard extends Walker_Nav_Menu  {
   function start_lvl(&$output, $depth=0, $args=array()) { }
   function end_lvl(&$output, $depth=0, $args=array()) { }

   function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
     global $post;
     $post = get_page($item->object_id);
     $output .= get_template_part('template-parts/content-card', get_post_format());
   }

    function end_el(&$output, $item, $depth=0, $args=array()) { }
  }
?>
