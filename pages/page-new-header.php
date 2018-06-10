<?php
/*
Template Name: Post - New Header
*/
?>


<!DOCTYPE html>
<html lang='en'>
<head itemscope itemtype="http://schema.org/WebSite">
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="p:domain_verify" content="e6b90cdd99284ef5b749982befb28b37"/>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>

	<?php wp_head(); ?>
	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap_index.xml" />

	<!-- Google Adsense -->
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script>
	  (adsbygoogle = window.adsbygoogle || []).push({
	    google_ad_client: "ca-pub-9536487334502274",
	    enable_page_level_ads: true
	  });
	</script>
</head>
<?php do_action('aesop_theme_body_before'); ?>
<body <?php body_class(); ?>>
	<?php do_action('ase_theme_body_inside_top'); ?>

	<div id="navbar--wrapper">
	  <div class="container">
			<?php wp_nav_menu( array('theme_location' => 'primary-menu')); ?>
		</div>
	</div>

<?php
	while ( have_posts() ) : the_post();
	?>

	<?php get_template_part('template-parts/content', 'single' ) ?>

	<?php endwhile; ?>

	<?php get_footer(); ?>