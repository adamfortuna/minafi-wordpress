<div class="col-6">
  <h2>Earn More</h2>
  <p class="lead">See how you could achieve financial independence faster by investing, advancing your career, side hustles and paying less taxes.</li>

  <h3>Invest</h3>
  <?php
  $posts = get_posts(array(
            'name' => 'why-should-i-invest-now-how-to-be-brave-start-investing',
            'posts_per_page' => 1,
            'post_type' => 'post',
            'post_status' => 'publish'
    ));
    the_post();
    get_template_part( 'template-parts/content', 'side');
  ?>
</div>
