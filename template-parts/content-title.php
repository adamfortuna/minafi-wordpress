<?php
/**
 * The template part for displaying content
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

$thumbnail_class = '';

if(has_post_thumbnail()) {
  $thumbnail_class = 'article--has-thumbnail';
}

?>
<article id="post-<?php the_ID(); ?>" <?php post_class($thumbnail_class); ?>>
  <a href='<?php echo esc_url(get_permalink()); ?>' class='clearfix'>
    <?php minafi_post_thumbnail('thumbnail', true); ?>
    <?php minafi_title() ?>
    <?php minafi_excerpt(); ?>
    <?php minafi_date(); ?>
  </a>
</article>
