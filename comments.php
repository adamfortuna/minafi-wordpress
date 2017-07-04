<?php
/**
 * The template for displaying comments
 *
 * The area of the page that contains both current comments
 * and the comment form.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}

$columns = (have_comments())? 4 : 6;
$columns_offset = (have_comments())? 1 : 3;

$comments_number = get_comments_number();

?>

<div id="comments" class="comments-area">

	<div class='row'>
		<button class='comments--leave-comment-button offset-xs-<?php print($columns_offset); ?> col-xs-<?php print($columns); ?> btn btn-lg btn-outline-primary' onclick='$("#comments").toggleClass("comment--new-form")'>Leave a Comment</button>
		<?php if ( have_comments() ) : ?>
			<button class='comments--view-all offset-xs-1 col-xs-4 btn btn-lg btn-outline-primary' onclick='$("#comments").toggleClass("comment--viewing-comments");'>See Comments (<?php print($comments_number); ?>)</button>
		<?php endif; ?>
	</div>


	<?php if ( have_comments() ) : ?>
		<div class='comments--current row'>
			<div class='col-12'>
				<h2>
					<?php
						if ( 1 === $comments_number ) {
							/* translators: %s: post title */
							printf( _x( 'One comment', 'comments title', 'twentysixteen' ), get_the_title() );
						} else {
							printf(
								/* translators: 1: number of comments, 2: post title */
								_nx(
									'%1$s comment',
									'%1$s comments',
									$comments_number,
									'comments title',
									'twentysixteen'
								),
								number_format_i18n( $comments_number ),
								get_the_title()
							);
						}
					?>
				</h2>

				<?php the_comments_navigation(); ?>

				<ol class="comment-list">
					<?php wp_list_comments(); ?>
				</ol><!-- .comment-list -->

				<?php the_comments_navigation(); ?>
			</div>
		</div>

	<?php endif; // Check for have_comments(). ?>



	<?php
		// If comments are closed and there are comments, let's leave a little note, shall we?
		if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) :
	?>
		<p class="no-comments"><?php _e( 'Comments are closed.', 'twentysixteen' ); ?></p>
	<?php endif; ?>

	<div class='comment--new row'>
		<div class='col-12'>
			<?php
				comment_form( array(
					'title_reply_before' => '<h2 id="reply-title" class="comment-reply-title">',
					'title_reply_after'  => '</h2>',
				) );
			?>
		</div>
	</div>

</div><!-- .comments-area -->
