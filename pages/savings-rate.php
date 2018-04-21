<?php
/*
Template Name: Calculators - Savings Rate
*/

get_header();

while ( have_posts() ) : the_post();
?>

<?php get_template_part('pages/page', 'single' ) ?>

<div class="container container-slim">
<div class="card card--info">
	<h3>Savings Rate Calculator</h3>
	<p class="lead">Try changing the underlined values and see what happens!</p>
	<p>
		My yearly after-tax income (w/401k included) is
    $<span data-var="yearlyIncome" data-format="currency" class="TKNumberField tooltippable with--tip" data-min="0" data-max="10000000"></span>
    and I save
    $<span data-var="yearlySavings" data-format="currency" class="tooltippable TKNumberField" data-min="0" data-max="10000000"></span>
    total for retirement – including 401k and all other means. Using these figures, my savings rate (SR) will be about
    <span data-var="savingsRate" data-format="percent" class="tangle--dynamic"></span>.
	</p>
	<p>This is calculated with the following formula:</p>
	<p class="text-center">
	  (<span class="tangle--dynamic" data-var="yearlySavings" data-format="currency"></span> / <span class="tangle--dynamic" data-var="yearlyIncome" data-format="currency"></span>) * 100% = <span class="tangle--dynamic" data-var="savingsRate" data-format="percent"></span> Savings Rate
	</p>
	<p class="lead fi--info">
		<i>Adam Says:</i> These values <span data-var="storeCookies" class="TKToggle TKSwitch tooltippable" title="All stats are anonymous - no IP or personally identiable information.">
				<span>will NOT be stored in a cookie in your browser and NOT be anonymously aggregated</span>
				<span>will be stored in a cookie in your browser and be anonymously aggregated</span>
			</span>. If you revisit this page, you
			<span data-var="storeCookies" class="TKToggle TKSwitch">
				<span>will NOT</span>
				<span>will</span>
			</span>
			see the same results. If you want, you can <a href="#" class="fi--reset">reset all values to the defaults</a> at any time.
	</p>

  <?php include('email_results.php'); ?>
</div>
</div>


<?php endwhile; ?>

<script src="https://www.gstatic.com/firebasejs/4.3.0/firebase.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/fi.bundle.js" async></script>

<?php get_footer(); ?>
