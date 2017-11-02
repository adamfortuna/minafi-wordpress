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

<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '2006703252919856');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=2006703252919856&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->


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
<?php wp_footer(); ?>
</body>
<?php do_action('aesop_theme_body_after'); ?>
</html>
