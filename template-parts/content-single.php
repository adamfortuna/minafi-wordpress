<?php
/**
 * The template part for displaying single posts
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>

<div class='container article-single--wrapper'>
	<article id="post-<?php the_ID(); ?>" <?php post_class('article--singular'); ?> >

		<header class="row article--header">
			<?php minafi_post_thumbnail() ?>

			<div class="article-header--content <?php minafi_columns() ?>">
		    <h1><?php the_title(); ?></h1>
		    <?php minafi_excerpt(); ?>
				<?php minafi_date(); ?>
			</div>
	  </header>

	  <section class="article--content <?php minafi_columns() ?>">
			<?php the_content(); ?>
	  </section>

		<section class="article--meta <?php minafi_columns() ?>">
			<?php minafi_meta(); ?>
		</section>
	</article>
</div>
