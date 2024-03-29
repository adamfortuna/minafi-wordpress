<?php $read_time = do_shortcode('[rt_reading_time label="" postfix="min read." postfix_singular="min read."]') ?>

<article id="post-<?php the_ID(); ?>" class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
  <a href='<?php echo esc_url(get_permalink()); ?>' class="article--header-image">
    <div class="post-thumbnail thumbnail--small">
      <div class="article--header-overlay"></div>
      <?php
        $count = get_comments_number();
        $comments = sprintf(_n( '%s Comment', '%s Comments', $count), $count );
      ?>
      <span class="article--comments-count"><?php echo $comments ?></span>

      <?php
        if(has_post_thumbnail()) {
      		the_post_thumbnail('large');
        } else { ?>
          <img src="<?php echo get_template_directory_uri() ?>/assets/images/default-medium.jpeg" />
        <?php }
      ?>
    </div>
  </a>

  <header class="article--header article-header--hero">
    <h2><a href='<?php echo esc_url(get_permalink()); ?>'><?php the_title(); ?></a></h2>
    <p class="article-subtitle--small"><? the_subtitle(); ?>

    <div class="article--header-meta">
      <span class="article--header-meta-date">
        <?php the_time( get_option('date_format') ); ?>.
      </span>
      <?php echo $read_time ?>
    </div>

    <div class="article--header-categories">
      <?php echo get_the_category_list() ?>
    </div>
  </header>
</article>
