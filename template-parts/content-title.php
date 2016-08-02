<?php
/**
 * The template part for displaying content
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <a href='<?php echo esc_url(get_permalink()); ?>'>
    <?php minafi_post_thumbnail('thumbnail', true); ?>
    <?php minafi_title() ?>
    <?php minafi_excerpt(); ?>
    <?php minafi_date(); ?>
  </a>
</article>
