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

<div class='container'>
	<section class="<?php minafi_columns() ?>">
		<?php get_template_part( 'template-parts/content', 'single' ) ?>
	</section>
</div>

<?php if ( comments_open() || get_comments_number() ) { ?>
<div class="comments">
	<div class='container'>
		<section class="comments--content <?php minafi_columns() ?>">
			<?php comments_template(); ?>
		</section>
	</div>
</div>

<?php } ?>




<div class='container'>
	<section class="related-posts <?php minafi_columns() ?>">
		<h3>Related Posts</h3>

		<section class='articles--list related-posts--articles'>
		<?php
			$related = get_posts( array( 'category__in' => wp_get_post_categories($post->ID), 'numberposts' => 5, 'post__not_in' => array($post->ID) ) );
			if( $related ) foreach( $related as $post ) {
				setup_postdata($post);
				?>
					<?php get_template_part( 'template-parts/content-title', get_post_format() ); ?>
			<?php }
			wp_reset_postdata();
		?>
		</section>
  </section>
</div>


<?php endwhile; ?>

<?php get_footer(); ?>
