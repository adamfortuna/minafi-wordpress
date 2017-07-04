<?php
/**
 * The template for displaying search results pages
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>

<div class='first-content container'>
	<section>
		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title"><?php printf( __( 'Search Results for: %s', 'twentysixteen' ), '<span>' . esc_html( get_search_query() ) . '</span>' ); ?></h1>
			</header><!-- .page-header -->

			<section class='articles--list first-content'>
				<div class="row">
				<?php
				// Start the loop.
				while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/content', 'title' );
				// End the loop.
				endwhile;
				?>
				</div>
				<div class="row">
					<div class="col-12">
						<?php
							// Previous/next page navigation.
							the_posts_pagination( array(
								'prev_text'          => __( 'Previous page', 'twentysixteen' ),
								'next_text'          => __( 'Next page', 'twentysixteen' ),
								'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'twentysixteen' ) . ' </span>'
							) );
						?>
					</div>
				</div>

			<?php
			// If no content, include the "No posts found" template.
			else :
				get_template_part( 'template-parts/content', 'none' );

			endif;
			?>
		</section>
	</section>
</div>

<?php get_footer(); ?>
