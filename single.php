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

<?php if ( comments_open() || get_comments_number() ) { ?>
<div class="comments">
	<div class='container container-slim'>
		<section class="comments--content <?php minafi_columns() ?>">
			<?php comments_template(); ?>
		</section>
	</div>
</div>

<?php } ?>

<?php endwhile; ?>

<?php get_footer(); ?>
