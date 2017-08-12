<?php
/*
Template Name: All posts
*/
get_header();
?>
<div class='first-content container'>
  <div class="row">
    <div class="col-12">
      <h2 class="page-title">All Articles</h2>
      <p class="taxonomy-description">Here are all <?php $count_posts = wp_count_posts(); echo $count_posts->publish; ?> articles written on Minafi, sorted from most recent to oldest.</p>
      <p class="taxonomy-description">
        If you're looking to read about something in particular, I'd recommend checking out the category pages on
        <a href="/category/minimalism/">minimalism</a>,
        <a href="/category/mindfulness/">mindfulness</a>,
        <a href="/category/financial-independence/">financial independence</a>,
        <a href="/category/goals/">goals</a> or look at ones that are
        <a href="/category/personal/">personal</a>.
    </div>
  </div>

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
