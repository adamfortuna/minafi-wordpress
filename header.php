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

<body <?php body_class(); ?>>

	<div class="container">
	  <div class='row'>
	    <div class="header <?php minafi_columns(); ?>">
	      <nav class="navbar">
	        <a class="navbar-brand" href="/">Minafi</a>

	        <button class="navbar-toggler hidden-sm-up pull-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
	          &#9776;
	        </button>

	        <ul class="nav nav-pills collapse navbar-toggleable-xs pull-right"  id="collapsingNavbar">
	          <li class="nav-item">
	            <a class="nav-link" href="/about">About</a>
	          </li>

	          <li class="nav-item">
	            <a class="nav-link" href="/articles">Articles</a>
	          </li>

	          <li class="nav-item">

	            <div class='search--wrapper'>
	              <form class="form-inline">
	                <div class="form-group">
	                  <label class="sr-only" for="searchInput">Search</label>
	                  <div class="input-group">
	                    <div class="input-group-addon"><i class="fa fa-search" aria-hidden="true"></i></div>
	                    <input type="text" class="form-control" id="searchInput" placeholder="Search articles...">
	                  </div>
	                </div>
	                <button type="submit" class="btn btn-primary">Go</button>
	              </form>
	            </div>

	            <a class="nav-link search--link" href='#'>
	              <i class="fa fa-search" aria-hidden="true"></i>
	            </a>
	          </li>
	        </ul>
	      </nav>
	    </div>
	  </div>
	</div>
</div>
