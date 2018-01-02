<?php
/**
 * The template used for displaying page content
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>


<article id="post-<?php the_ID(); ?>" class='<?php post_class(); ?>'>
  <section class="article--content aesop-entry-content">
    <?php do_action('ase_theme_post_inside_top'); ?>
    <?php do_action('ase_theme_post_inside_header_top'); ?>
    <?php do_action('ase_theme_post_before_title'); ?>
		<h1><?php the_title(); ?></h1>
    <?php do_action('ase_theme_post_after_title'); ?>
    <?php if(post_has_affiliate_link()) { ?>
      <p class="pt-2 article--disclosure">This post contains affiliate links. Please read <a href="/disclosure">my disclosure</a> for more information.</p>
    <?php } ?>
    <?php do_action('ase_theme_post_inside_header_bottom'); ?>
		<?php the_content(); ?>
    <?php do_action('ase_theme_post_inside_bottom'); ?>
  </section>
</article>
<?php do_action('ase_theme_post_after'); ?>
