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
	<div class='container'>
		<div class='row'>
			<div class="<?php minafi_columns(); ?> footer--content">
				<ul class='list-inline pull-left'>
					<li class='list-inline-item'><a href='/about'>About</a></li>
					<li class='list-inline-item'><a href='/articles'>Articles</a></li>
				</ul>
				<span class='pull-right'>By <a href='http://adamfortuna.com'>Adam Fortuna</span>
			</div>
		</div>
	</div>
</div>

<?php do_action('aesop_theme_body_inside_bottom'); ?>
</body>
<?php do_action('aesop_theme_body_after'); ?>
</html>
