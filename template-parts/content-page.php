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
  <section class="article--content aesop-entry-content">
		<h1><?php the_title(); ?></h1>
		<?php the_content(); ?>
  </section>
</article>
