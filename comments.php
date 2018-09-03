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
	<?php if ( have_comments() ) : ?>
		<div class='comments--current row'>
			<div class='col-12'>
				<?php the_comments_navigation(); ?>

				<ul class="nav nav-tabs">
				  <li class="nav-item">
				    <a class="nav-link active" id="comments-tab" data-toggle="tab" href="#comment-list" role="tab" aria-controls="home" aria-selected="true">
							<?php
								if ( 1 === $comments_number ) {
									/* translators: %s: post title */
									printf( _x( 'One comment', 'comments title', 'twentysixteen' ), get_the_title() );
								} else {
									printf(
										/* translators: 1: number of comments, 2: post title */
										_nx(
											'Comment (%1$s)',
											'Comments (%1$s)',
											$comments_number,
											'comments title',
											'twentysixteen'
										),
										number_format_i18n( $comments_number ),
										get_the_title()
									);
								}
							?>
				    </a>
				  </li>
				  <li class="nav-item ml-2">
				    <a class="nav-link" id="trackbacks-tab" data-toggle="tab" href="#trackback-list" role="tab" aria-controls="home" aria-selected="true">Trackbacks</a>
				  </li>
				</ul>

				<div class="tab-content mt-3" id="myTabContent">
					<ol class="comment-list tab-pane fade show active" id="comment-list" role="tabpanel" aria-labelledby="comments-tab">
						<?php wp_list_comments(array(
							'type'				=> 'comment',
	    				'avatar_size' => 48,
							'style'       => 'ol',
							'short_ping'  => true
						)); ?>
					</ol>

					<ol class="trackbacks-list tab-pane fade" id="trackback-list" role="tabpanel" aria-labelledby="trackbacks-tab">
						<?php wp_list_comments(array(
							'type'				=> 'pings',
	    				'avatar_size' => 48,
							'style'       => 'ol',
							'short_ping'  => true
						)); ?>
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
		<div class='col-1'></div>
		<div class='col-10'>
			<?php
				comment_form( array(
					'title_reply_before' => '<h2 id="reply-title" class="comment-reply-title">',
					'title_reply_after'  => '</h2>',
				) );
			?>
		</div>
	</div>

</div><!-- .comments-area -->
