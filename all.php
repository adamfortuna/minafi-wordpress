<?php
/*
Template Name: All posts
*/
get_header();
?>
<div class='first-content container'>
  <section class='articles--list articles--group'>
		<div class="row">
	    <?php
	      while(have_posts()) : the_post();
	        $myposts = get_posts('numberposts=-1&offset=$debut');
	        foreach($myposts as $post) :
	          get_template_part('template-parts/content-title', get_post_format());
	        endforeach;
	      endwhile;
	    ?>
		</div>
	</section>
</div>

<?php get_footer(); ?>
