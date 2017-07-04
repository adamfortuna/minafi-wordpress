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
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
</head>
<?php do_action('aesop_theme_body_before'); ?>
<body <?php body_class(); ?>>
	<?php do_action('ase_theme_body_inside_top'); ?>
	<div class="container">
	  <div class='row justify-content-center'>
	    <div class="header <?php minafi_columns(); ?>">
	      <nav class="navbar navbar-toggleable-md">
	        <a class="navbar-brand" href="/">
						<img src="/wp-content/themes/minafi/assets/images/mfi.png" class="d-inline-block align-top" width="42" height="42" alt="Minafi Small Logo">
						<span class="navbar-brand--text">inifi</span>
					</a>

	        <ul class="nav nav-pills collapse navbar-toggleable-xs pull-right"  id="collapsingNavbar">
	          <li class="nav-item">
	            <a class="nav-link" href="/about">About</a>
	          </li>

	          <li class="nav-item dropdown">
	            <a class="nav-link dropdown-toggle" href="#" id="navArticlesDropdownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Articles</a>
			        <div class="dropdown-menu" role="menu" aria-labelledby="navArticlesDropdownLink">
			          <a class="dropdown-item" href="/categories/minimalism">Minimalism</a>
			          <a class="dropdown-item" href="/categories/mindfulness">Mindfulness</a>
			          <a class="dropdown-item" href="/categories/financial-independence">Financial Independence</a>
								<a class="dropdown-item" href="/categories/goals">Goals</a>
								<a class="divider"></a>
								<a class="dropdown-item" href="/archives">All Articles</a>
								<a class="dropdown-item" href="/categories/personal">Personal</a>
			        </div>
			      </li>

	          <li class="nav-item">
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
