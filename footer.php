<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>

<div class='footer'>
	<div class='container <?php if(use_slim_container()) { echo 'container-slim'; } ?>'>
		<div class='row'>
			<div class="footer--content col">
				<p>Looking for where to start? <a href="/start-here">Start here</a>.</p>
			</div>
		</div>
	</div>
</div>

<?php do_action('aesop_theme_body_inside_bottom'); ?>
</body>
<?php do_action('aesop_theme_body_after'); ?>
</html>
