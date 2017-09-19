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

<?php do_action('aesop_theme_body_inside_bottom'); ?>
<?php minafi_js_script() ?>
<script type='text/javascript' src='/wp-content/themes/minafi/assets/js/more.bundle.js'></script>

<div id="fb-root"></div>
  <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=200902338079";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>
<script src="https://platform.twitter.com/widgets.js" async></script>

<!-- Drip -->
<script type="text/javascript">
  var _dcq = _dcq || [];
  var _dcs = _dcs || {};
  _dcs.account = '4066935';

  (function() {
    var dc = document.createElement('script');
    dc.type = 'text/javascript'; dc.async = true;
    dc.src = '//tag.getdrip.com/4066935.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(dc, s);
  })();
</script>
</body>
<?php do_action('aesop_theme_body_after'); ?>
</html>
