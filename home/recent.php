<!-- Recent articles -->
<!--
    ________
   |       |   TITLE
   |_______|   ~~~~~
   ___   ___   ___
  |__|  |__|  |__|
  TLE   TLE   TLE
  ~~    ~~    ~~
  ___   ___   ___
 |__|  |__|  |__|
 TLE   TLE   TLE
 ~~    ~~    ~~
-->
<section class='container wide-container articles--list articles--hero'>
  <div class='home--section mb-3'>
    <h2>
      Recent Articles
      <small>
        Everything I've written recently in one handy place.
        <a href="/feed"><i class="fa fa-rss" aria-hidden="true"></i></a>
      </small>
    </h2>
  </div>
  <div class="articles--list articles--group">
    <?php
      $args = array(
        'posts_per_page'   => 1
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
          'posts_per_page'   => 6,
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
<!-- End Recent Articles -->
