<?php
/*
Template Name: All posts
*/
get_header();
$debut = 0
?>
<div class='first-content container'>
	<section class="<?php minafi_columns(); ?> latest-article">
    <span class='pull-right lead'>All Articles <i class="fa fa-level-down" aria-hidden="true"></i></span>
  </section>

  <section class='articles--list <?php minafi_columns(); ?>'>
    <?php
      while(have_posts()) : the_post();
        $myposts = get_posts('numberposts=-1&offset=$debut');
        foreach($myposts as $post) :
          get_template_part('template-parts/content-title', get_post_format());
        endforeach;
      endwhile;
    ?>
	</section>
</div>

<?php get_footer(); ?>
