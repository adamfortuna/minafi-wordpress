<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header();

while ( have_posts() ) : the_post();
?>

<?php get_template_part('template-parts/content', 'single' ) ?>

<?php endwhile; ?>

<?php get_footer(); ?>
