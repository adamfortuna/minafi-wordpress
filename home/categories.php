<section class='container wide-container'>
  <div class='row home--section mb-3'>
    <h2 class="col-12">
      Categories
      <small>How to enjoy life now and later.</small>
    </h2>
  </div>
  <ul class="row post-categories home--categories">
    <?php
      $categories = get_categories( array(
          'orderby' => 'count',
          'order'   => 'DESC',
          'include' => array(1,58,59,56,57,78),
          // 'include' => array(1,73,74,75,76,77)
      ) );
      foreach( $categories as $category ) {
    ?>
      <li class="col-md-4 mb-2 col-xs-6">
        <a class="home-category--card" href="<?php echo esc_url( get_category_link( $category->term_id ) );?>">
          <?php echo esc_html( $category->name ); ?>
          <p class="home-category--description">
            <?php echo explode(".", $category->description)[0] ?>.
          </p>
          <small><em><?php echo $category->count; ?> Articles</em></small>
        </a>
      </li>
    <?php  }?>
  </ul>
</section>
