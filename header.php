<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?><!DOCTYPE html>
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
	<style><?php include('assets/css/critical-'.criticalCssFile().'.css'); ?></style>
</head>
<?php do_action('aesop_theme_body_before'); ?>
<body <?php body_class(); ?>>
	<?php do_action('ase_theme_body_inside_top'); ?>
	<div id="navbar--wrapper">
	  <div class="container">
			<?php wp_nav_menu( array('theme_location' => 'primary-menu')); ?>
		</div>
	</div>
