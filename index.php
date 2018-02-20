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

$GLOBALS['posts'] = [];

get_header();

include('partials/hero.php');
?>

<?php include('home/featured.php'); ?>
<?php include('home/about.php'); ?>
<?php //include('home/minimal-investor-course.php'); ?>
<?php include('home/categories.php'); ?>
<?php include('home/fi.php'); ?>
<?php include('home/recent.php'); ?>

<div class="container wide-container">
	<div class="row">
		<div class="col-12">
			Haven't found something yet?
			<a href="/archives">See all posts</a>
		</div>
	</div>
</div>

<?php get_footer(); ?>
