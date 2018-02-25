<?php

// Change count of search results to 9
function change_wp_search_size($queryVars) {
	$queryVars['posts_per_page'] = 9;
	return $queryVars; // Return our modified query variables
}
add_filter('request', 'change_wp_search_size');

// Disable Emailing people when a post has the category pre-minafi
function exclude_these( $categories ) {
    $categories = array( 'pre-minafi');
    return $categories;
}
add_filter( 'jetpack_subscriptions_exclude_these_categories', 'exclude_these' );
