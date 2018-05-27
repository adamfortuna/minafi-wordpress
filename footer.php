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
				<ul class="list-inline">
					<li class="list-inline-item"><a href="/about">About</a></li>
					<li class="list-inline-item"><a href="/contact">Contact Me</a></li>
					<li class="list-inline-item"><a href="/minafi-brand-assets/">Assets</a></li>
					<li class="list-inline-item"><a href="/disclosure">Advertiser Disclosure</a></li>
					<li class="list-inline-item"><a href="/privacy-policy">Privacy Policy</a></li>

			    <li class="list-inline-item pull-right ml-2">
			      <a href="https://www.facebook.com/minafiblog" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
			    </li>
			    <li class="list-inline-item pull-right">
			      <a href="https://twitter.com/minafiblog" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
			    </li>
				</ul>
			</div>
		</div>
	</div>
</div>

<div class="d-none"><?php dynamic_sidebar('hidden_widgets'); ?></div>

<?php do_action('aesop_theme_body_inside_bottom'); ?>
<?php include('partials/tracking.php'); ?>
<?php wp_footer(); ?>
</body>
<?php do_action('aesop_theme_body_after'); ?>
</html>
