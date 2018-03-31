<section class='container wide-container'>
  <div class='row home--section mb-1'>
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
          'include' => array(1,58,59,56,57,78)
          // 'include' => array(1,73,74,75,76,77)
      ) );
      foreach( $categories as $category ) {
    ?>
      <li class="col-md-4 mb-2 col-xs-6 p-2">
        <span class="home--category-title"><?php echo esc_html( $category->name ); ?></span>
        <p class="home-category--description">
          <?php echo explode(".", $category->description)[0] ?>.
        </p>
        <small><em><a href="<?php echo esc_url( get_category_link( $category->term_id ) );?>"> Read <?php echo $category->count; ?> Articles</a></em></small>
      </li>
    <?php  }?>
  </ul>
</section>
