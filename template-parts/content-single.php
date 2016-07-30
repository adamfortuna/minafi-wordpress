<?php
/**
 * The template part for displaying single posts
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('article--singular'); ?> >
	<header class="row">
		<div class="col-xs-12">
	    <h1><?php the_title(); ?></h1>
	    <?php minafi_excerpt(); ?>
			<?php minafi_date(); ?>
		</div>
  </header>

  <section class="article--content">
		<?php the_content(); ?>
  </section>

	<section class="article--meta">
		<?php minafi_meta(); ?>
	</section>
</article>
