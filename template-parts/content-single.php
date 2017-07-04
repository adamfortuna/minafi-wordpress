<?php
  $thumbnail_class = '';

  if(has_post_thumbnail()) {
    $thumbnail_class = 'article--has-thumbnail';
  }
  do_action('ast_article_before');
?>

<?php do_action('ase_theme_post_before'); ?>

<div class='article-single--wrapper'>
	<article id="post-<?php the_ID(); ?>" <?php post_class(['article--singular', $thumbnail_class]); ?> >
    <?php do_action('ase_theme_post_inside_top'); ?>

		<header class="container article--header">
      <?php do_action('ase_theme_post_inside_header_top'); ?>

      <?php do_action('ase_theme_post_before_title'); ?>
		  <h1><?php the_title(); ?></h1>
      <?php do_action('ase_theme_post_after_title'); ?>
      <p><? the_subtitle(); ?>

      <div class="article--header-meta">
        <span class="article--header-meta-date">
          <?php the_time( get_option('date_format') ); ?>.
        </span>
        <?php echo do_shortcode('[rt_reading_time label="" postfix="min read." postfix_singular="min read."]') ?>
        <span class="article--header-categories">
          <?php echo get_the_category_list(', '); ?>.
        </span>
      </div>


			<?php minafi_date(); ?>
      <?php do_action('ase_theme_post_inside_header_bottom'); ?>
	  </header>

    <?php if(has_post_thumbnail()) { ?>
      <div class="article--poster">
        <?php minafi_post_thumbnail() ?>
      </div>
    <?php } ?>

	  <section class="article--content aesop-entry-content">
			<?php the_content(); ?>
      <?php do_action('ase_theme_post_inside_bottom'); ?>
	  </section>

		<section class="article--meta container">
      <?php echo get_the_category_list() ?>
    </section>

    <section class="article--author container">
      <div class="row">
        <div class="col-2">
          <img src="<?php echo get_avatar_url(get_the_author_meta('user_email')) ?>" class="rounded pull-right" height="80" width="80" />
        </div>
        <div class="col-9">
          <p class="article--author-name"><?php echo get_the_author_meta('display_name') ?></p>
          <p class="article--author-description"><?php echo get_the_author_meta('description') ?></p>
        </div>
      </div>
    </section>
	</article>
</div>

<?php do_action('ase_theme_post_after'); ?>
