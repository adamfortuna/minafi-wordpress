<article id="post-<?php the_ID(); ?>" class="article--small">
  <a href='<?php echo esc_url(get_permalink()); ?>' class="article--header-image col-3">
    <?php
      if(has_post_thumbnail()) {
    		the_post_thumbnail('thumbnail');
      } else { ?>
        <img src="<?php echo get_template_directory_uri() ?>/assets/images/default-medium.jpeg" />
      <?php }
    ?>
  </a>

  <h5 class="col-9"><a href='<?php echo esc_url(get_permalink()); ?>'><?php the_title(); ?></a></h5>
</article>
