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
  printf("col");
}
endif;



if ( ! function_exists( 'bootstrap3_comment_form_fields' ) ) :
add_filter( 'comment_form_default_fields', 'bootstrap3_comment_form_fields' );
function bootstrap3_comment_form_fields( $fields ) {
    $commenter = wp_get_current_commenter();

    $req      = get_option( 'require_name_email' );
    $aria_req = ( $req ? " aria-required='true'" : '' );
    $html5    = current_theme_supports( 'html5', 'comment-form' ) ? 1 : 0;

    $fields   =  array(
        'author' => '<div class="form-group comment-form-author">' . '<label for="author">' . __( 'Name' ) . ( $req ? ' <span class="required">*</span>' : '' ) . '</label> ' .
                    '<input class="form-control" id="author" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) . '" size="30"' . $aria_req . ' /></div>',
        'email'  => '<div class="form-group comment-form-email"><label for="email">' . __( 'Email' ) . ( $req ? ' <span class="required">*</span>' : '' ) . '</label> ' .
                    '<input class="form-control" id="email" name="email" ' . ( $html5 ? 'type="email"' : 'type="text"' ) . ' value="' . esc_attr(  $commenter['comment_author_email'] ) . '" size="30"' . $aria_req . ' /></div>',
        'url'    => '<div class="form-group comment-form-url"><label for="url">' . __( 'Website' ) . '</label> ' .
                    '<input class="form-control" id="url" name="url" ' . ( $html5 ? 'type="url"' : 'type="text"' ) . ' value="' . esc_attr( $commenter['comment_author_url'] ) . '" size="30" /></div>'
    );

    return $fields;
}
endif;

if ( ! function_exists( 'bootstrap3_comment_form' ) ) :
add_filter( 'comment_form_defaults', 'bootstrap3_comment_form' );
function bootstrap3_comment_form( $args ) {
    $args['comment_field'] = '<div class="form-group comment-form-comment">
            <label for="comment">' . _x( 'Comment', 'noun' ) . '</label>
            <textarea class="form-control" id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea>
        </div>';
    $args['class_submit'] = 'btn btn-default'; // since WP 4.1

    return $args;
}
endif;

if ( ! function_exists( 'bootstrap3_comment_button' ) ) :
add_action('comment_form', 'bootstrap3_comment_button' );
function bootstrap3_comment_button() {
    echo '<button class="btn btn-outline-primary" type="submit">' . __( 'Submit Comment' ) . '</button>';
}
endif;










if ( ! function_exists( 'twentysixteen_entry_meta' ) ) :
/**
 * Prints HTML with meta information for the categories, tags.
 *
 * Create your own twentysixteen_entry_meta() function to override in a child theme.
 *
 * @since Twenty Sixteen 1.0
 */
function twentysixteen_entry_meta() {
	if ( 'post' === get_post_type() ) {
		$author_avatar_size = apply_filters( 'twentysixteen_author_avatar_size', 49 );
		printf( '<span class="byline"><span class="author vcard">%1$s<span class="screen-reader-text">%2$s </span> <a class="url fn n" href="%3$s">%4$s</a></span></span>',
			get_avatar( get_the_author_meta( 'user_email' ), $author_avatar_size ),
			_x( 'Author', 'Used before post author name.', 'twentysixteen' ),
			esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
			get_the_author()
		);
	}

	if ( in_array( get_post_type(), array( 'post', 'attachment' ) ) ) {
		twentysixteen_entry_date();
	}

	$format = get_post_format();
	if ( current_theme_supports( 'post-formats', $format ) ) {
		printf( '<span class="entry-format">%1$s<a href="%2$s">%3$s</a></span>',
			sprintf( '<span class="screen-reader-text">%s </span>', _x( 'Format', 'Used before post format.', 'twentysixteen' ) ),
			esc_url( get_post_format_link( $format ) ),
			get_post_format_string( $format )
		);
	}

	if ( 'post' === get_post_type() ) {
		twentysixteen_entry_taxonomies();
	}

	if ( ! is_singular() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
		echo '<span class="comments-link">';
		comments_popup_link( sprintf( __( 'Leave a comment<span class="screen-reader-text"> on %s</span>', 'twentysixteen' ), get_the_title() ) );
		echo '</span>';
	}
}
endif;

if ( ! function_exists( 'twentysixteen_entry_date' ) ) :
/**
 * Prints HTML with date information for current post.
 *
 * Create your own twentysixteen_entry_date() function to override in a child theme.
 *
 * @since Twenty Sixteen 1.0
 */
function twentysixteen_entry_date() {
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';

	if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
	}

	$time_string = sprintf( $time_string,
		esc_attr( get_the_date( 'c' ) ),
		get_the_date(),
		esc_attr( get_the_modified_date( 'c' ) ),
		get_the_modified_date()
	);

	printf( '<span class="posted-on"><span class="screen-reader-text">%1$s </span><a href="%2$s" rel="bookmark">%3$s</a></span>',
		_x( 'Posted on', 'Used before publish date.', 'twentysixteen' ),
		esc_url( get_permalink() ),
		$time_string
	);
}
endif;

if ( ! function_exists( 'minafi_title' ) ) :
function minafi_title() { ?><h2><?php the_title(); ?></h2><?php }
endif;


if ( ! function_exists( 'minafi_post_thumbnail' ) ) :
/**
 * Displays an optional post thumbnail.
 *
 * Wraps the post thumbnail in an anchor element on index views, or a div
 * element when on single views.
 *
 * Create your own twentysixteen_post_thumbnail() function to override in a child theme.
 *
 * @since Twenty Sixteen 1.0
 */
function minafi_post_thumbnail($size = 'large') {
	if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
		return;
	}

	if ( is_singular() && $size != 'thumbnail') :
	?>

	<div class="post-thumbnail">
		<?php the_post_thumbnail($size); ?>
	</div><!-- .post-thumbnail -->

	<?php else : ?>
		<div class="post-thumbnail thumbnail--small">
			<?php the_post_thumbnail('thumbnail'); ?>
		</div>
	<?php endif; // End is_singular()
}
endif;

if ( ! function_exists( 'minafi_post_thumbnail_background' ) ) :
function minafi_post_thumbnail_background($size = 'large') {
	if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
		return;
	}

	return the_post_thumbnail_url($size);
}
endif;

if ( ! function_exists( 'minafi_excerpt' ) ) :
	/**
	 * Displays the optional excerpt.
	 *
	 * Wraps the excerpt in a div element.
	 *
	 * Create your own twentysixteen_excerpt() function to override in a child theme.
	 *
	 * @since Twenty Sixteen 1.0
	 *
	 * @param string $class Optional. Class string of the div element. Defaults to 'entry-summary'.
	 */
	function minafi_excerpt( $class = 'lead' ) {
		$class = esc_attr( $class );

		if ( has_excerpt()) : ?>
			<div class="<?php echo $class; ?>">
				<?php the_excerpt(); ?>
			</div>
		<?php endif;
	}
endif;

if ( ! function_exists( 'twentysixteen_excerpt_more' ) && ! is_admin() ) :
/**
 * Replaces "[...]" (appended to automatically generated excerpts) with ... and
 * a 'Continue reading' link.
 *
 * Create your own twentysixteen_excerpt_more() function to override in a child theme.
 *
 * @since Twenty Sixteen 1.0
 *
 * @return string 'Continue reading' link prepended with an ellipsis.
 */
function twentysixteen_excerpt_more() {
	$link = sprintf( '<a href="%1$s" class="more-link">%2$s</a>',
		esc_url( get_permalink( get_the_ID() ) ),
		/* translators: %s: Name of current post */
		sprintf( __( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'twentysixteen' ), get_the_title( get_the_ID() ) )
	);
	return ' &hellip; ' . $link;
}
add_filter( 'excerpt_more', 'twentysixteen_excerpt_more' );
endif;



/**
 * Flushes out the transients used in twentysixteen_categorized_blog().
 *
 * @since Twenty Sixteen 1.0
 */
// function twentysixteen_category_transient_flusher() {
// 	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
// 		return;
// 	}
// 	// Like, beat it. Dig?
// 	delete_transient( 'twentysixteen_categories' );
// }
// add_action( 'edit_category', 'twentysixteen_category_transient_flusher' );
// add_action( 'save_post',     'twentysixteen_category_transient_flusher' );

if ( ! function_exists( 'twentysixteen_the_custom_logo' ) ) :
/**
 * Displays the optional custom logo.
 *
 * Does nothing if the custom logo is not available.
 *
 * @since Twenty Sixteen 1.2
 */
function twentysixteen_the_custom_logo() {
	if ( function_exists( 'the_custom_logo' ) ) {
		the_custom_logo();
	}
}
endif;


?>
