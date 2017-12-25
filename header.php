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
</head>
<?php do_action('aesop_theme_body_before'); ?>
<body <?php body_class(); ?>>
	<?php do_action('ase_theme_body_inside_top'); ?>
	<div id="header" class="container <?php if(use_slim_container()) { echo 'container-slim'; } ?>">
	  <div class='row justify-content-center'>
	    <div class="header <?php minafi_columns(); ?>">
	      <nav class="navbar navbar-toggleable-md">
	        <a class="navbar-brand" itemprop="publisher url" href="/" itemscope itemtype="http://schema.org/Organization">
						<span itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
							<img src="/mfi-white-bg.png" class="d-inline-block align-top" width="42" height="42" alt="Minafi Logo" />
							<meta itemprop="url" content="https://minafi.com/mfi-white-bg.png" />
							<meta itemprop="width" content="230" />
							<meta itemprop="height" content="230" />
						</span>
						<span class="navbar-brand--text">inafi</span>
						<meta itemprop="name" content="Minafi" />
						<meta itemprop="url" content="https://minafi.com" />
					</a>

	        <ul class="nav collapse navbar-toggleable-xs pull-right"  id="collapsingNavbar">
						<li class="nav-item">
	            <a class="nav-link" href="/fi">What is FI?</a>
	          </li>
						<li class="nav-item">
	            <a class="nav-link" href="/about">About</a>
	          </li>

	          <li class="nav-item dropdown">
	            <a class="nav-link dropdown-toggle" href="#" id="navArticlesDropdownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Articles</a>
			        <div class="dropdown-menu" role="menu" aria-labelledby="navArticlesDropdownLink">
			          <a class="dropdown-item" href="/category/minimalism">Minimalism</a>
			          <a class="dropdown-item" href="/category/mindfulness">Mindfulness</a>
			          <a class="dropdown-item" href="/category/financial-independence">Financial Independence</a>
								<a class="dropdown-item" href="/category/goals">Goals</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="/archives">All Articles</a>
								<a class="dropdown-item" href="/category/personal">Personal</a>
			        </div>
			      </li>

	          <li class="nav-item nav-item--search">
							<form role="search" method="get" class="form-inline search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
                <div class="search--form form-group">
                  <label class="sr-only" for="searchInput">Search</label>
									<div class="input-group">
                  	<input type="text" class="form-control" id="searchInput" name="s" placeholder="Search articles...">
		                <button type="submit" class="input-group-addon search--link">
											<i class="fa fa-search" aria-hidden="true"></i>
										</button>
									</div>
                </div>
              </form>
	          </li>
	        </ul>
	      </nav>
	    </div>
	  </div>
	</div>
	<script type='text/javascript' src='/wp-content/themes/minafi/assets/js/app.bundle.js'></script>
