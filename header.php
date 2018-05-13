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
	<div id="header" class="container <?php if(use_slim_container()) { echo 'container-slim'; } ?>">
	  <div class='row justify-content-center'>
	    <div class="header col">
	      <nav class="navbar navbar-expand-md">
	        <a class="navbar-brand" itemprop="publisher url" href="/" itemscope itemtype="http://schema.org/Organization">
						<span itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
							<img src="/wp-content/themes/minafi/assets/images/mfi-white-bg.png" class="d-inline-block align-top" width="42" height="42" alt="Minafi Logo" />
							<meta itemprop="url" content="https://minafi.com/mfi-white-bg.png" />
							<meta itemprop="width" content="230" />
							<meta itemprop="height" content="230" />
						</span>
						<span class="navbar-brand--text">
							inafi
							<small class="d-md-none">
								Investing, Minimalism, Mindfulness
							</small>
						</span>
						<meta itemprop="name" content="Minafi" />
						<meta itemprop="url" content="https://minafi.com" />
					</a>


					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="collapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
			    	<span class="navbar-toggler-icon"></span>
			  	</button>

					<div class="collapse navbar-collapse navbar-toggleable-xs" id="collapsingNavbar">
						<ul class="navbar-nav navbar--main-nav ml-auto mt-3">
							<li class="nav-item mx-3">
		            <a class="nav-link" href="/about">Start Here</a>
		          </li>

							<li class="nav-item mx-3">
				        <a class="nav-link" href="/interactive-guide-early-retirement-financial-independence">Retire Early Guide</a>
				      </li>

		          <li class="nav-item mx-3">
		            <a class="nav-link" href="#" id="navArticlesDropdownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Articles</a>
				      </li>
							<li class="nav-item mx-3">
				        <a class="nav-link" href="/minimal-investor-course">Learn To Invest</a>
				      </li>
		        </ul>
					</div>

					<div class="nav-item--search">
						<form role="search" method="get" class="form-inline search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
							<div class="search--form form-group">
								<label class="sr-only" for="searchInput">Search</label>
								<div class="input-group">
									<input type="text" class="form-control" id="searchInput" name="s" placeholder="Search articles...">
									<button type="submit" class="input-group-addon search--link px-3">
										<i class="fa fa-search" aria-hidden="true"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
	      </nav>
	    </div>
	  </div>
	</div>
