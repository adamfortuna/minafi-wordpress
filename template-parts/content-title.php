<?php $read_time = do_shortcode('[rt_reading_time label="" postfix="min read." postfix_singular="min read."]') ?>

<article id="post-<?php the_ID(); ?>" class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
  <a href='<?php echo esc_url(get_permalink()); ?>' class="article--header-image">
    <div class="post-thumbnail thumbnail--small">
      <div class="article--header-overlay"></div>
      <?php
        if(has_post_thumbnail()) {
      		the_post_thumbnail('medium');
        } else { ?>
          <img src="<?php echo get_template_directory_uri() ?>/assets/images/default-medium.jpeg" />
        <?php }
      ?>
    </div>
  </a>

  <header class="article--header article-header--hero mb-2">
    <h5><a href='<?php echo esc_url(get_permalink()); ?>'><?php the_title(); ?></a></h5>
    <p class="article-subtitle--small">
      <?php
        $excerpt = get_the_excerpt();
        echo mb_strimwidth($excerpt, 0, 100, '...');
      ?>
    </p>

    <div class="article--header-meta">
      <span class="article--header-meta-date">
        <?php the_time( get_option('date_format') ); ?>.
      </span>
      <?php echo $read_time ?>
      <?php
        $count = get_comments_number();
        $comments = sprintf(_n( '%s Comment', '%s Comments', $count), $count );
      ?>
      <span class="article--comments-count"><?php echo $comments ?></span>
    </div>

    <div class="article--header-categories">
      <?php minafi_primary_category() ?>
    </div>
  </header>
</article>
