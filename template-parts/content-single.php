<?php
  $thumbnail_class = '';

  if(has_post_thumbnail()) {
    $thumbnail_class = 'article--has-thumbnail';
  }
  do_action('ast_article_before');
?>

<?php do_action('ase_theme_post_before'); ?>

<div class='article-single--wrapper'>
	<article id="post-<?php the_ID(); ?>" <?php post_class(['article--singular', $thumbnail_class]); ?> itemscope="" itemtype="http://schema.org/BlogPosting">
    <?php do_action('ase_theme_post_inside_top'); ?>

		<header class="container container-slim article--header">
      <?php do_action('ase_theme_post_inside_header_top'); ?>

      <?php do_action('ase_theme_post_before_title'); ?>
		  <h1 itemprop="name headline mainEntityOfPage"><?php the_title(); ?></h1>
      <?php do_action('ase_theme_post_after_title'); ?>
      <p class="article-subtitle" itemprop="description"><? echo get_the_excerpt(); ?></p>

      <div class="article--header-meta">
        <span class="article--header-meta-date">
          <time datetime="<?php echo get_the_date( DATE_W3C ) ?>" itemprop="datePublished"><?php the_time( get_option('date_format') ); ?></time>.
          <time class="hidden" datetime="<?php echo the_modified_date( DATE_W3C ) ?>" itemprop="dateModified"><?php the_modified_date( get_option('date_format') ); ?></time>
        </span>
        <?php echo do_shortcode('[rt_reading_time label="" postfix="min read." postfix_singular="min read."]') ?>
        <span class="article--header-categories">
          <?php echo get_the_category_list(', '); ?>.
        </span>
      </div>

      <?php if(post_has_affiliate_link()) { ?>
        <p class="pt-2 article--disclosure">This post contains affiliate links. Please read <a href="/disclosure">my disclosure</a> for more information.</p>
      <?php } ?>
      <?php do_action('ase_theme_post_inside_header_bottom'); ?>
	  </header>

    <?php if(has_post_thumbnail()) { ?>
      <div class="article--poster">
        <?php minafi_post_thumbnail() ?>
      </div>
    <?php } ?>

	  <section class="article--content aesop-entry-content" itemprop="articleBody">
			<?php the_content(); ?>
      <?php do_action('ase_theme_post_inside_bottom'); ?>
	  </section>

		<section class="article--meta container container-slim">
      <div class="col-12">
        <?php echo get_the_category_list() ?>
      </div>
    </section>

    <section class="article--email container container-slim">
      <div class="row">
        <div class="col-md-7 col-sm-11 ml-3 mb-3">
          <?php include(get_template_directory().'/partials/email.php'); ?>
        </div>
        <div class="col-md-4 col-sm-11 ml-3">
          <h3>Keep In Touch</h3>

          <div class="hidden" itemprop='publisher' itemscope='itemscope' itemtype='https://schema.org/Organization'>
            <div itemprop='logo' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
              <meta itemprop='url' content='https://minafi.com/mfi-white-bg.png'/>
              <meta itemprop='width' content='60'/>
              <meta itemprop='height' content='60'/>
            </div>
            <meta itemprop='name' content='Minafi'/>
          </div>


          <ul class="list-unstyled article--social">
            <li>
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
              <a href="https://www.facebook.com/minafiblog" target="_blank">MinafiBlog</a>
            </li>
            </li>
              <div class="fb-like" data-href="https://www.facebook.com/minafiblog" data-layout="standard" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
            </li>
          </ul>

          <ul class="list-unstyled article--social">
            <li>
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
              <a href="https://twitter.com/minafiblog" target="_blank">@minafiblog</a>
            </li>
            <li>
              <a class="twitter-follow-button"
                 data-show-screen-name="false"
                 data-show-count="true"
                 data-size="large"
                 href="https://twitter.com/minafiblog">Follow @minafiblog</a>
            </li>
          </ul>
        </div>
      </div>
    </section>


    <section class="article--author container container-slim" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
      <div class="row">
        <div class="col-2 ml-2">
          <img itemprop="image" src="<?php echo get_avatar_url(get_the_author_meta('user_email')) ?>" class="rounded pull-right" height="80" width="80" />
        </div>
        <div class="col-9">
          <p class="article--author-name" itemprop="name" rel="author"><?php echo get_the_author_meta('display_name') ?></p>
          <p class="article--author-description"><?php echo get_the_author_meta('description') ?></p>
        </div>
      </div>
    </section>
	</article>
</div>

<?php if ( comments_open() || get_comments_number() ) { ?>
<div class="comments">
	<div class='container container-slim'>
		<section class="comments--content">
			<?php comments_template(); ?>
		</section>
	</div>
</div>

<?php } ?>

<?php do_action('ase_theme_post_after'); ?>

<section class='container'>
  <h2>Related Posts</h2>
  <p class="lead">Here are a few similar posts you might enjoy checking out.</p>
  <?php if ( function_exists( "minafi_related_posts" ) ) { minafi_related_posts(); } ?>
</section>
