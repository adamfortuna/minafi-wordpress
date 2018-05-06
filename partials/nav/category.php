<?php
  $idObj = get_category_by_slug($category);
  $id = $idObj->term_id;
  $name = $idObj->name;
  $count = $idObj->category_count;
?>

<div class="card nav--category">
  <h5><a href="/category/<?php echo $category; ?>"><?php echo $name; ?> (<?php echo $count; ?>)</a></h5>
  <ul class="list-unstyled">
    <?php
      $args = array(
        'posts_per_page'   => 2,
        'category' 				 => $id,
        'exclude' => $GLOBALS['archive-nav']
      );
      $myposts = get_posts( $args );
      foreach($myposts as $post) : setup_postdata( $post );
        array_push($GLOBALS['archive-nav'], $post->ID);
      ?>
        <li><a class='underline-link' href='<?php echo esc_url(get_permalink()); ?>'><?php the_title(); ?></a></li>
      <?php
      endforeach;
      wp_reset_postdata();
    ?>
  </ul>
</div>
