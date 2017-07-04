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

		<section class="article--meta container" style="display: none;">
      <?php echo get_the_category_list() ?>
      <?php echo get_avatar() ?>
      <?php echo get_the_author_meta('nicename') ?>

			<?php minafi_meta(); ?>
		</section>
	</article>
</div>

<?php do_action('ase_theme_post_after'); ?>
