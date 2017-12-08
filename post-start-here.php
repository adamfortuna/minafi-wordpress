<?php
/*
Template Name: Post - Start Here
*/
get_header();
?>

<div class='first-content container container-slim'>
  <header class="page-header">
    <h1 class="page-title">Start Here</h1>
    <p>If you're looking for how to become <b>financially independence</b> you're in the right place! The mission of Minafi is to help you in 4 areas:</p>

    <ul class="list-unstyled">
      <li class="list-unstyled-item"><i class="fa fa-heart"></i> Live the life you want</li>
      <li class="list-unstyled-item"><i class="fa fa-money"></i> Earn more money</li>
      <li class="list-unstyled-item"><i class="fa fa-dollar"></i> Spend less money</li>
      <li class="list-unstyled-item"><i class="fa fa-star"></i> Plan the future of your dreams</li>
    </ul>


    <p>The best place to get started is to learn about FI - what it is, how you can get there. Start with the guide below and move onto content that fits your needs.</p>
  </header>
</div>

<div class='container container-wide'>
  <p class="text-muted text-right mb-0"><small>Read this first <i class="fa fa-level-down" aria-hidden="true"></i></small></p>
  <?php
  $posts = get_posts(array(
            'name' => 'interactive-guide-early-retirement-financial-independence',
            'posts_per_page' => 1,
            'post_type' => 'page',
            'post_status' => 'publish'
    ));
    the_post();
    get_template_part( 'template-parts/content', 'side');
  ?>

</div>

<div class='container container-slim'>
  <p class="text-muted">After you're done, choose a topic that you want to focus on here and read more.</p>
</div>

<div class='first-content container container-wide'>
  <div class="row">
    <?php include('posts/start-here/earn-more.php'); ?>
    <?php include('posts/start-here/spend-less.php'); ?>
    <?php include('posts/start-here/live-life.php'); ?>
    <?php include('posts/start-here/plan-future.php'); ?>
  </div>
</div>

<?php get_footer(); ?>
