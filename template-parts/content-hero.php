<?php $read_time = do_shortcode('[rt_reading_time label="" postfix="min read." postfix_singular="min read."]') ?>

<article id="post-<?php the_ID(); ?>" class="col-12 articles--list-hero">
  <a href='<?php echo esc_url(get_permalink()); ?>' class="article--header-image">
    <div class="post-thumbnail thumbnail--small">
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

  <header class="article--header article-header--hero">
    <h2><a href='<?php echo esc_url(get_permalink()); ?>'><?php the_title(); ?></a></h2>
    <p class="article-subtitle"><? the_subtitle(); ?>

    <div class="article--header-meta">
      <span class="article--header-meta-date">
        <?php the_time( get_option('date_format') ); ?>.
      </span>
      <?php echo $read_time ?>
      <span class="article--header-categories">
        <?php echo get_the_category_list(', '); ?>.
      </span>
    </div>
  </header>


  <section class="article--content aesop-entry-content">
    <?php the_content("Continue Reading. ".$read_time); ?>
  </section>
</article>
