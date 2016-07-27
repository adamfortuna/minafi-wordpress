<?php

if ( ! function_exists( 'minafi_date' ) ) :
function minafi_date() {
  $time_string = '<time class="article--date lead published updated" datetime="%1$s">%2$s %3$s <span class="article--date-year">%4$s</span></time>';

	$time_string = sprintf( $time_string,
    esc_attr( get_the_date( 'c' ) ),
		esc_attr(get_the_date('F')),
    esc_attr(get_the_date('j')),
    esc_attr( get_the_date( 'Y' ) )
	);

	printf($time_string);
}
endif;


if(!function_exists('minafi_meta')) :
function minafi_meta() {
	printf('<p>Written on %1$s by <a href="%2$s">%3$s</a> in %4$s.</p>',
		minafi_date(),
		esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
		get_the_author(),
		get_the_category_list( __( ', ', 'twentyeleven' ) )
	);
}

endif;


if(!function_exists('minafi_date')) :
function minafi_date() {
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';

	if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time>';
	}

	$time_string = sprintf( $time_string,
		esc_attr( get_the_date( 'c' ) ),
		get_the_date(),
		esc_attr( get_the_modified_date( 'c' ) ),
		get_the_modified_date()
	);

	return $time_string;
}
endif;


if(!function_exists('minafi_columns')) :
function minafi_columns() {
  printf("offset-xl-2 col-xl-8 offset-lg-1 col-lg-10 col-xs-12");
}
endif;

?>
