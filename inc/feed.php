<?php


// display featured post thumbnails in WordPress feeds
function wcs_post_thumbnails_in_feeds( $content ) {
    global $post;
    if( has_post_thumbnail( $post->ID ) ) {
        $content = '<p>' . get_the_post_thumbnail( $post->ID ) . '</p>' . $content;
    }
    return $content;
}
add_filter( 'the_excerpt_rss', 'wcs_post_thumbnails_in_feeds' );
add_filter( 'the_content_feed', 'wcs_post_thumbnails_in_feeds' );

function init_drip_feed() {
  add_feed('drip', 'add_drip_feed');
}
add_action('init', 'init_drip_feed');
function add_drip_feed() {
  add_filter('pre_option_rss_use_excerpt', '__return_zero');
  load_template(TEMPLATEPATH . '/feeds/drip.php' );
}

add_filter( 'rss2_head', 'feedly_head' );
function feedly_head() {
 echo '<webfeeds:cover image="https://minafi.com/wp-content/uploads/2017/07/mfi-logo-200x200.png" />';
 echo '<webfeeds:icon>https://minafi.com/wp-content/uploads/2017/07/mfi-logo-200x200.png</webfeeds:icon>';
 echo '<webfeeds:logo>https://minafi.com/wp-content/uploads/2017/07/mfi-logo-200x200.png</webfeeds:logo>';
}

?>
