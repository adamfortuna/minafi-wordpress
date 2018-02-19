<!-- Featured articles -->
<!--
    ________
   |       |   TITLE
   |_______|   ~~~~~
   ___   ___   ___
  |__|  |__|  |__|
  TLE   TLE   TLE
  ~~    ~~    ~~
-->
<section class='container wide-container articles--list articles--hero'>
  <div class='home--section mb-3'>
    <h2>
      Featured Articles
      <small>These are some of my favorites!</small>
    </h2>
  </div>
  <div class="articles--list articles--group">
    <?php
      $args = array(
        'posts_per_page'   => 1,
        'category' => 74
      );
      $myposts = get_posts( $args );
      foreach($myposts as $post) : setup_postdata( $post );
        get_template_part( 'template-parts/content-hero', get_post_format() );
      endforeach;
      wp_reset_postdata();
    ?>
    <div class="row">
      <?php
        $args = array(
          'posts_per_page'   => 3,
          'category' 				 => 74,
          'offset'           => 1
        );
        $myposts = get_posts( $args );
        foreach($myposts as $post) : setup_postdata( $post );
          get_template_part( 'template-parts/content-title', get_post_format() );
        endforeach;
        wp_reset_postdata();
      ?>
    </div>
  </div>
</section>
<!-- End Featured Articles -->
