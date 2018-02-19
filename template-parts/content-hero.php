<?php $read_time = do_shortcode('[rt_reading_time label="" postfix="min read." postfix_singular="min read."]') ?>

<article id="post-<?php the_ID(); ?>" class="row articles--list-hero mb-3">
  <a href='<?php echo esc_url(get_permalink()); ?>' class="article--header-image col-md-7 col-xs-12">
    <div class="post-thumbnail">
      <div class="article--header-overlay"></div>
      <?php
        if(has_post_thumbnail()) {
      		the_post_thumbnail('large');
        } else { ?>
          <img src="<?php echo get_template_directory_uri() ?>/assets/images/default-large.jpeg" />
        <?php }
      ?>
    </div>
  </a>

  <header class="article--header article-header--hero col-md-5 col-xs-12">
    <h2><a href='<?php echo esc_url(get_permalink()); ?>'><?php the_title(); ?></a></h2>
    <div class="article--header-meta">
      <span class="article--header-meta-date">
        <?php the_time( get_option('date_format') ); ?>.
      </span>
      <?php echo $read_time ?>
      <?php
        $count = get_comments_number();
        $comments = sprintf(_n( '%s Comment.', '%s Comments.', $count), $count );
      ?>
      <span><a href="<?php comments_link(); ?>"><?php echo $comments ?></a></span>
    </div>

    <div class="article-hero--excerpt my-3">
      <p itemprop="description"><? echo get_the_excerpt(); ?></p>
    </div>

    <div class="article--header-meta">
      <span class="article--header-categories">
        <?php echo get_the_category_list(); ?>
      </span>
    </div>
  </header>
</article>
