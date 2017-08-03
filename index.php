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

get_header();

include('partials/hero.php');
?>

<div class="container wide-container">
	<div class="row">
		<section class='articles--list articles--hero col-lg-8'>
			<p class="text-right pr-3 mb-0 lead recent-posts">
				<a href="/feed"><i class="fa fa-rss" aria-hidden="true"></i></a>
				Recent Posts <i class="fa fa-level-down" aria-hidden="true"></i></p>
			<?php
				// Show recent 5 posts with
				$i = 0;
				while (have_posts() && ($i++ < 5)) : the_post();
 					get_template_part( 'template-parts/content-hero', get_post_format() );
 				endwhile;
			?>
		</section>

		<section class="col-lg-4 sidebar">
			<?php include('partials/about.php'); ?>
			<?php include('partials/categories.php') ?>
			<?php include('partials/social.php') ?>
			<?php include('partials/email-sidebar.php'); ?>
			<?php include('partials/archives.php'); ?>
		</section>
	</div>

	<div class="row">
		<h2 class="col-12 articles--recent">Recent Articles</h2>
	</div>

	<div class="row articles--list articles--group">

		<?php
			$args = array(
				'posts_per_page'   => 9,
				'offset'           => 5
			);
			$myposts = get_posts( $args );
			foreach($myposts as $post) : setup_postdata( $post );
				get_template_part( 'template-parts/content-title', get_post_format() );
			endforeach;
			wp_reset_postdata();
		?>
	</div>

	<div class="row">
		<div class="col-12">
			Haven't found something yet?
			<a href="/archives">See all posts</a>
		</div>
	</div>

</div>

<?php get_footer(); ?>
