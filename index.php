<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>

<div class="container first-content">
	<div class='row'>
    <section class="welcome jumbotron <?php minafi_columns(); ?>">
			<p>Hey hey! I'm Adam Fortuna, and I explore the intersection of
      <a href='/articles/category/minimalism' class='minimalism--text'>minimalism</a>,
      <a href='/articles/category/financial-independence' class='fi--text'>financial independence</a> and
      <a href='/articles/category/mindfulness' class='mindfulness--text'>mindfulness</a>.</p>

			<p>Read more about <a href="/about">what these topics have in common</a>, or jump into an area that looks interesting to you!</a>

			<form class="form-inline" action="https://feedburner.google.com/fb/a/mailverify" method="post" target="popupwindow" onsubmit="window.open('https://feedburner.google.com/fb/a/mailverify?uri=minafi', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true">
				<div class="form-group">
	    		<input type="text" name="email" class="form-control form-control-sm email-address" id="emailAddress" placeholder="What's your email address?" width='100'>
				</div>

				<input type="hidden" value="minafi" name="uri"/>
				<input type="hidden" name="loc" value="en_US"/>

				<button type="submit" class="btn btn-outline-primary btn-sm">
					<i class="fa fa-envelope" aria-hidden="true"></i>
				  Subscribe to Minafi
				</button>

				<small class="form-text text-muted">We'll keep your email secret and only email you when new posts come out.</small>
			</form>
    </section>
	</div>
</div>

<div class="container">
	<section class="<?php minafi_columns(); ?> latest-article">
    <span class='pull-right lead'>
			<a href='/feed'><i class="fa fa-rss" aria-hidden="true"></i></a>
			Latest Articles <i class="fa fa-level-down" aria-hidden="true"></i></span>
  </section>


	<section class='articles--list <?php minafi_columns(); ?>'>
		<?php if ( have_posts() ) : ?>
			<?php
			// Start the loop.
			while ( have_posts() ) : the_post();

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content-title', get_post_format() );

			// End the loop.
			endwhile;

			// Previous/next page navigation.
			the_posts_pagination( array(
				'prev_text'          => __( 'Previous page', 'twentysixteen' ),
				'next_text'          => __( 'Next page', 'twentysixteen' ),
				'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'twentysixteen' ) . ' </span>',
			) );

		// If no content, include the "No posts found" template.
		else :
			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>
	</section>
</div>

<?php get_footer(); ?>
