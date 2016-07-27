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
	<header>
    <h1><?php the_title(); ?></h1>
  </header>

  <section class="article--content">
		<?php the_content(); ?>
  </section>
</article>
