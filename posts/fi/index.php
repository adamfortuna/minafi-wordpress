<?php
  $theme_path = get_template_directory_uri();
?>
<script src="<?php echo $theme_path; ?>/posts/fi/js/d3.js"></script>
<script src="<?php echo $theme_path; ?>/posts/fi/js/fi.js"></script>
<script src="<?php echo $theme_path; ?>/posts/fi/js/sr.js"></script>

<p>Let's talk about financial independence and early retirement! These phrases alone have a lot of weight associated with them, and you might have an immediate gut response to just hearing these terms.</p>

<p>You might love your job and wouldn't think about leaving it. Maybe you hate your job and can't wait to leave it. Maybe you're looking for a change. Maybe you feel you never want to retire because you'd just "be bored", Or maybe you plan to work until you can't anymore. <b>For this post, I'm going to ask one request of you:</b></p>

<blockquote class="text-center">
  <p>My request for you:<br/> Don't assume financial independence means retirement.</p>
</blockquote>

<p>Instead, for this post, think of financial independence (abbreviated FI) as the point where if for any reason you stopped working, you'd be set for the rest of your life. What you choose to do with your life at that point is up to you!</p>

<p>After making your way through this post and filling in your numbers, you're going to know what you'll need to do in order to make it happen. Here's a rundown of what we'll be talking about.</p>

<ul class="list-unstyled">
	<li><a href="#part-1">Part 1: Where am I now?</a></li>
  <li><a href="#part-2">Part 2: How much should I save?</a></li>
  <li><a href="#part-3">Part 3: How much do I need?</a></li>
  <li><a href="#part-4">Part 4: How much could I spend then?</a></li>
	<li><a href="#part-5">Part 5: How is that enough?</a></li>
	<li><a href="#part-6">Part 6: What can I do to retire sooner?</a></li>
  <li><a href="#part-7">Part 7: Who is actually doing this?</a></li>
  <li><a href="#part-8">Part 8: Where can I learn more?</a></li>
  <li><a href="#part-9">Part 9: What Next?</a></li>
</ul>



<a name="part-1"></a>
<h2>Part 1: Where am I now?</h2>

<p>The most common question when it comes to financial independence and early retirement is the big one:</p>

<blockquote class="text-center">
  <p>How much money do I need to retire?</p>
</blockquote>

<p>This is going to be the core question we answer in this article, exploring it in a number of different ways. My goal is that after reading this post, you know exactly how much you'd need to retire in your current state, but also give some advice on small tweaks to your lifestyle that could hugely impact this number.</p>

<p>The first step is understanding your current financial footing and where your current path would take you. Depending on your current financial health, this can range from a breath a relief to a sobering realization. <b>Please</b>, bear with it. I guarantee that knowing your financial health is better than not knowing.</p>

<h3>This Article Is Interactive!</h3>
<p>
  This whole article is a bit of an experiment. Whenever you see
  <span data-var="exampleClick" class="TKToggle TKSwitch">
		<span>green dotted unlined text</span>
		<span>yes! just like that!</span>
	</span>, that indicates this is a place that needs your input! Just hover over it and it'll tell you what to do. <b>The content of this post will change based on your input</b>. Consider it an old-school choose your own adventure blog post like you read as a kid. Give the one in this paragraph a shot.
</p>

<p>Next, let's dive into <b>your numbers</b> starting with some basics.</p>

<div class="card container container-slim card--info">
	<h3>Savings Rate Calculator</h3>
	<p class="lead">Try changing the underlined values and see what happens!</p>
	<p>
		My yearly after-tax income is
    $<span data-var="yearlyIncome" data-format="currency" class="TKNumberField tooltippable" data-min="0" data-max="10000000" data-toggle="tooltip" title="Use take home pay + 401k contribution, and subtract taxes. This is the total amount that you have to play with after taxes."></span> and I save $<span data-var="yearlySavings" data-format="currency" class="tooltippable TKNumberField" data-min="0" data-max="10000000" data-toggle="tooltip" title="Include 401k + IRA + Roth + checking + brokerage savings."></span> total for retirement – including 401k and all other means. Using these figures, my savings rate (SR) will be about <span data-var="savingsRate" data-format="percent" class="tangle--dynamic"></span>.
	</p>
	<p>This is calculated with the following formula:</p>
	<p class="text-center">
	  (<span  class="tangle--dynamic" data-var="yearlySavings" data-format="currency"></span> / <span class="tangle--dynamic"data-var="yearlyIncome" data-format="currency"></span>) * 100% = <span class="tangle--dynamic"data-var="savingsRate" data-format="percent"></span> Savings Rate
	</p>
	<p class="lead fi--info">
		<i>Adam Says:</i> Nothing filled out here will be sent to any server - it's just for you. These values <span data-var="storeCookies" class="TKToggle TKSwitch">
				<span>will NOT be stored in a cookie</span>
				<span>will be stored in a cookie</span>
			</span> in your browser, so if you revisit this page, you
			<span data-var="storeCookies" class="TKToggle TKSwitch">
				<span>will NOT</span>
				<span>will</span>
			</span>
			see the same results. If you want you can <a href="#" class="fi--reset">reset all values to the defaults</a> at any time.
	</p>
</div>

<p>When working towards FI and Retirement, <b>your savings rate is one of the most important numbers</b>. The more you save each year, the faster you'll be able to retire – that's obvious – but <b>how much faster</b>? See where your <span class="tangle--dynamic" data-var="savingsRate" data-format="percent"></span> SR falls on the following chart:</p>

<div class="card container container-wide graph--sr--container mb-3 card--info">
	<div class="graph graph--sr"></div>
	<p class="lead fi--info">
		<i>Adam Says:</i> Assumptions abound! This assumes $0 current savings, you save what you don't spend, <span data-var="marketGrowth" class="TKAdjustableNumber" data-step="0.002" data-max="0.20" data-min="0.001" data-format="percentDecimal" class="tangle--dynamic">/yr investment growth</span>, <span data-var="wr" class="TKAdjustableNumber" data-step="0.001" data-max="0.20" data-min="0" data-format="percentDecimal" class="tangle--dynamic"> WR</span>, and that your spending will be the same when you retire. If you don't know what these terms mean, don't worry -- we'll get to them.
	</p>
</div>

<p>
  For your savings rate, <span class="tangle--dynamic" data-var="savingsRate" data-format="percent"></span>, you can see on the chart that you would need <span class="tangle--dynamic" data-var="yearsUntilFiOnlySR" data-format="years"></span> to earn enough to be financially independent if you were starting today.

  If you were to continue saving and investing <span class="tangle--dynamic" data-var="yearlySavings" data-format="currency"></span> every year during that time, eventually you would have
  <span class="tangle--dynamic" data-var="impliedRetirementStashNeeded" data-format="currency"></span>
  saved up. At that point, you would be able to retire and withdraw
  <span class="tangle--dynamic" data-var="impliedYearlySpending" data-format="currency"></span> every year.
</p>

<p>Throughout this post, we'll be diving into the math behind these numbers, why this is enough, how can you lower this number and what's required of you (and the world) to hit it.</p>



<a name="part-2"></a>
<blockquote>
  <p>The art is not in making money, but in keeping it.</p>
</blockquote>

<h2>Part 2: How much should I save?</h2>
<p>What floors me about the above chart is that a 10% SR, is often sighted as a "good" savings rate. In practice, it will take you <b>41 years</b> to save up enough to retire, and that's only if your spending stays the same! If your income and spending go up, it'll take even longer.</p>

<p>If you double that savings rate to 20% though, you can retire in 38 years. That's 25% time working for 10% of your salary.</p>

<blockquote>
  <p>If you want to retire before you're 65, the common wisdom "save 10% of your income" is terrible advice!</p>
</blockquote>

<p>If you're hoping to be financially independent before collecting social security, you'll need to save more. Let's look into ways to reduce this number. These estimates are making a <b>LOT</b> of assumptions. We can refine this a little, but for that, I'm going to need your help – in the form of answering a few more questions.</p>

<p>
  You could be reading this and think there's no way you could save any money. I know when I was growing up, at times my mom was scrapping to make ends meet, and saving was the last thing on her mind. For those reading in that situation, I empathize with but struggle to find the best advice. You know your situation better than I ever could, as well as what you could do to make it better.
</p>

<div class="container text-center pb-3 mb-3">
  <img src="https://minafi.com/wp-content/uploads/2017/08/callistus-ndemo-157554.jpg" alt="hiking">
</div>

<h3>Saving Money is a Hike</h3>

<p>You're starting with a time period of <span class="tangle--dynamic" data-var="yearsUntilFiOnlySR" data-format="years"></span> based on just your savings rate. Saving this much isn't a sprint, or even a marathon but a hike. Depriving yourself for a few months, only to be exhausted, or spend more the following months, isn't going to have a positive impact. Pace and progress are the keys.</p>

<p>I've personally tried maxing out my savings some months – spending the least amount I possibly could to get that SR formula looking better. The problem was that the next month I'd reward myself for doing so and things would balance out.</p>

<blockquote>
  <p>Favor lifestyle changes that help you save over changes that feel like deprivation.</p>
</blockquote>

<p>Instead, make changes that make your life better, and that you look forward to week after week and year after year. If you're spending money on something that brings that kind of joy into your life, to me that's well worth it.</p>

<p>Find a way to enjoy saving the same way you'd enjoy a hike. Make it effortless, make it relaxing, make it feel right.</p>

<a name="part-3"></a>
<h2>Part 3: How much do I need?</h2>

<p>In order to understand how much you need, we'll need to learn a little more about you.</p>

<div class="card container container-slim card--info">
	<h3>Let's Talk More About You</h3>
	<p class="lead"></p>
  <p>
    I'm <span data-var="age" class="TKAdjustableNumber" data-min="8" data-max="100"> years old</span>
		and have a total combined savings of
		$<span data-var="networth" data-format="currency" class="tooltippable TKNumberField" data-min="0" data-max="10000000" data-toggle="tooltip" data-placement="top" title="For simplicity sake, we'll just look at your savings - 401k, Roth IRA, brokerage and any other currency assets."></span>.
		Right now, I'm
		<span data-var="phase" class="TKToggle TKSwitch">
			<span>retired</span>
			<span>saving money for retirement</span>
		</span>.
	</p>

  <p>
    Each year I spend about $<span data-var="yearlySpending" data-format="currency" class="TKNumberField" data-min="0" data-max="10000000"></span>, but when I retire I'll likely spend

		<span data-var="retirementSpendingPercent" data-format="percent" class="TKAdjustableNumber tooltippable" data-step="0.01" data-min="0" data-max="100" data-min="0" data-max="10000000" data-toggle="tooltip" data-placement="top" title="If you're not sure, stick to 80% here."></span> of that (equal to about <span data-var="retirementYearlySpending" data-format="currency" class="tangle--dynamic"></span>/yr).
  </p>

	<hr style="width: 96%;">

	<h4>Minafi's Take On Your Finances</h4>
	<p>
		Given your
		<span data-var="savingsRate" data-format="percent" class="tangle--dynamic"> SR</span>
		and a net worth
		<span data-var="networth" data-format="currency" class="tangle--dynamic"></span>,
		if you continue to invest
		<span class="tangle--dynamic" data-format="currency" data-var="yearlySavings">/yr</span>, then you're on track to be financially independent in
		<span class="tangle--dynamic" data-var="yearsUntilFi" data-format="years"></span>
		– at age
		<span class="tangle--dynamic" data-var="fiAge" data-format="years"></span>.
	</p>
	<p>
	 At age
	 	<span class="tangle--dynamic" data-var="fiAge" data-format="years"></span>, you would have
		<span data-var="fiStash" data-format="currency" class="tangle--dynamic"></span>
		in retirement savings and can start withdrawing
		<span data-var="retirementYearlySpending" data-format="currency" class="tangle--dynamic"></span>/yr.
	</p>


	<div class="BlockSwitch" data-var="fiPhase">
		<div class="alert alert-success" role="alert">
			<strong>Well done!</strong> You successfully made it to FI! Why not try setting a stretch goal? Turn down the stock market rate of <span data-var="marketGrowth" class="TKAdjustableNumber" data-step="0.002" data-max="0.20" data-min="0" data-format="percentDecimal" class="tangle--dynamic">/yr</span> or turn the withdrawal rate down even further below <span data-var="wr" class="TKAdjustableNumber" data-step="0.001" data-max="0.20" data-min="0" data-format="percentDecimal" class="tangle--dynamic"></span>.
		</div>
		<div class="alert alert-info" role="alert">
		  <strong>Keep going!</strong> You have less than 5 years of working ahead of you at your current pace. There are a bunch of way you can speed this up that we'll look into in this post.
		</div>
		<div class="alert alert-warning" role="alert">
		  <strong>You're Getting There</strong> You have less than 15 years of working ahead of you at your current pace. Small changes can still make a huge dent in this number.
		</div>
		<div class="alert alert-danger" role="alert">
		  <strong>Time to Make a Change?</strong> You have more than 15 years of working ahead of you at your current pace. If you want to reach financial independence sooner, you're going to need to make some major changes.
		</div>
	</div>

	<p class="lead fi--info">
		<i>Adam Says:</i> For these numbers, I'm assuming <span data-var="marketGrowth" class="TKAdjustableNumber" data-step="0.002" data-max="0.20" data-min="0" data-format="percentDecimal" class="tangle--dynamic">/yr investment growth</span> and a <span data-var="wr" class="TKAdjustableNumber" data-step="0.001" data-max="0.20" data-min="0" data-format="percentDecimal" class="tangle--dynamic"> withdrawal rate</span>. If you're not sure what these numbers mean, don't worry! I'll explain them later on in this post.
	</p>
</div>

<p>This is where things start to get fun! There's now enough information to know a rough estimate of when you'd be <b>financially independent</b> – in <span class="tangle--dynamic" data-var="yearsUntilFi" data-format="years"></span> at age <span class="tangle--dynamic" data-var="fiAge" data-format="years"></span>. Let's dive into how we got to this number.
</p>

<p>Financial Independence (FI) is different from retirement. Think of financial independence as the amount of money you'd need in order to never work again. Retirement (RE), on the other hand, is the act of not working.</p>

<div class="card container container-wide mb-3">
  <div class="row mt-3">
    <p class="col-md-10 h2 text-center fi-share--message">I'm on track to be financially independent in <span class="tangle--dynamic" data-var="yearsUntilFi" data-format="years"></span> at age <span class="tangle--dynamic" data-var="fiAge" data-format="yearsOnly"></span>! Find your FI date at Minafi.</p>
    <p class="col-md-2 h1 fi--share">
      <span class="h6 text-center">Share On</span><br/>
      <a href="#" title="Share on Facebook" class="fi-share-fb" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
      <a href="#" class="fi-share-twitter" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
    </p>
  </div>
</div>

<p><b>It's possible for people to be FI but continue working</b> – you see it all the time. From CEOs of companies to quiet employees who have saved huge amounts to bloggers talking about retirement (well, some – not me). There are also people who are retired, but who may need to return to work someday down the line when their savings run out, or if social security fails somewhere down the line.</p>

<p>To be FIRE (financially independent + retired) is an aim with <b>the goal of minimizing stress from external sources</b>. It does rely on stock markets to perform in a similar pattern to the last 100+ years, but aside from that, it's not based on too many assumptions.</p>

<a name="part-4"></a>
<div class="container text-center pb-3 mb-3">
  <img src="https://minafi.com/wp-content/uploads/2016/09/fi.jpg" alt="financial independence">
</div>
<h2>Part 4: How much could I spend then?</h2>

<p>Up until this point, we've been a little rosy in our withdrawal rate (WR). The withdrawal rate is the percent of your savings you withdraw each year. This can be calculated as follows:</p>

<div class="card container container-slim card--info">
  <h3>Withdrawal Rate Calculator</h3>
  <p>
    This assumes that you'll spend
    <span data-var="retirementSpendingPercent" data-format="percent" class="TKAdjustableNumber tooltippable" data-step="0.01" data-min="0" data-max="100" data-min="0" data-max="10000000" data-toggle="tooltip" data-placement="top" title="If you're not sure, stick to 80% here."></span>
    of your current spending of about
    $<span data-var="yearlySpending" data-format="currency" class="TKNumberField" data-min="0" data-max="10000000">/yr</span>
    in retirement, which would be
    <span data-var="retirementYearlySpending" data-format="currency" class="tangle--dynamic">/yr</span>.
  </p>

	<p class="text-center">
		(Yearly Retirement Spending / Retirement Savings) * 100% = WR
		<br/>
		(<span data-var="retirementYearlySpending" data-format="currency" class="tangle--dynamic"></span> / <span class="tangle--dynamic" data-var="fiStash" data-format="currency"></span>) * 100% = <span data-var="wr" data-format="percentDecimal" class="TKAdjustableNumber tooltippable tangle--dynamic" data-step="0.001" data-max="1" data-min="0" data-toggle="tooltip" data-placement="top" title="3% is considered very stable. 4% is starting to get risky. Above 4% is not advised."></span>
	</p>

	<p>
		In other words, at a <span data-var="wr" data-format="percentDecimal" class="tangle--dynamic tangle--dynamic"> WR</span> , you'll need to save up <span data-var="fiStash" data-format="currency" class="tangle--dynamic"></span> before you stop working completely. At your current pace, this will take <span class="tangle--dynamic" data-var="yearsUntilFi" data-format="years" class="tangle--dynamic"></span> - allowing you retire at age <span data-var="fiAge" data-format="years" class="tangle--dynamic"></span>.
	</p>

	<p class="lead fi--info">Adam Says:
    This assumes the same
    <span data-var="marketGrowth" class="TKAdjustableNumber" data-step="0.002" data-max="0.20" data-min="0" data-format="percentDecimal" class="tangle--dynamic">/yr investment growth</span> as before.
    According to the <a href="https://www.bogleheads.org/wiki/Trinity_study_update" target="_blank">Trinity Study</a>, 3% WR will work 98% of the time, while 4% WR will work out 87% over 30 years.
</div>

<p>Withdrawal rate is one the most talked about (and heavily debated) topics when it comes to early retirement. I'm only going to introduce the topic in this article, but if you want to read more here's a great post on <a href="https://earlyretirementdude.com/4-rule-come-anyway-hint-wasnt-trinity-study/" target="_blank">Where'd the 4% Rule Come From Anyway?</a></p>

<p>My personal withdrawal rate I use for calculations is 3%. I'm in no rush to retire right now, and I'd prefer to rest easy and be overwhelmingly confident -- or at least as much as possible.</p>


<a name="part-5"></a>
<div class="container text-center pb-3 mb-3">
  <img src="https://minafi.com/wp-content/uploads/2016/08/financial.jpg" alt="investing">
</div>
<h2 class="pt-5">Part 5: How is this enough?</h2>

<p>When I first saw these numbers and did the math on it, I immediately asked the following question:</p>

<blockquote>
	If I retire with
	<span data-var="fiStash" data-format="currency" class="tangle--dynamic tangle--dynamic"></span>
	and spend
	<span data-var="retirementYearlySpending" data-format="currency" class="tangle--dynamic tangle--dynamic">/yr</span>
	when I retire, doesn't that mean my cash will run out in
	<span data-var="fiStash" data-format="currency" class="tangle--dynamic tangle--dynamic"></span>/<span data-var="retirementYearlySpending" data-format="currency" class="tangle--dynamic tangle--dynamic"></span> =
  <span data-var="yearsOfFiNoInvestment" data-format="years" class="tangle--dynamic tangle--dynamic"></span>?
</blockquote>

<p>If you put your money into a savings account, then this is exactly how long your investment would last. There are better places to put your money than a savings account through!</p>

<h3>Factoring In Inflation</h3>

<p>Even worse, each of those <span data-var="yearsOfFiNoInvestment" data-format="years" class="tangle--dynamic tangle--dynamic"></span>, your spending power would be slightly less due to inflation, which is generally around 3%. Inflation is something we have no control over individually but is something we can plan for.</p>

<p>Inflation means that each year, what you can buy with your money is going down by some small amount. If you've seen prices rise since you were a kid, that's potentially a result of inflation.</p>

<p>
  Because of this, we need to increase our total funds by
  <span data-var="inflationRate" class="TKAdjustableNumber tangle--dynamic" data-step="0.001" data-max="0.20" data-min="-0.10" data-format="percentDecimal" data-toggle="tooltip" data-placement="top" title="You'll want to keep this around 2-3%."></span>
  each year just to have the same buying power as today. If you add in your
  <span data-var="wr" data-format="percentDecimal" class="TKAdjustableNumber tooltippable tangle--dynamic" data-step="0.001" data-max="1" data-min="0"> WR</span>,
  this means that your savings need to increase by
  <span data-var="neededMarketRate" data-format="percentDecimal" class="tangle--dynamic tangle--dynamic">/yr</span>
  in order for you to draw from it long-term.
</p>


<h3>Enter Market Investing</h3>

<p>The missing piece here is that you can <a href="https://minafi.com/investment-literacy/" target="_blank">invest that money in the stock market</a> -- both while you're growing it and when you're drawing down from it.</p>

<p>Stock markets in the US have returned on average 7% a year since their beginning. This is an important number! If you're withdrawing at most 4% of this, and 3% of it is going to inflation, then your net worth will go down ever so slightly over time. This is why 4% is often sighted as a maximum WR.</p>

<p>Learning how to invest and earn ~7% will sound intimidating at first. It will take trial and error, but more than that it'll take being brave and putting money into the stock market. Using a simple <a href="https://minafi.com/simple-three-fund-portfolio-vanguard/" target="_blank">3-fund portfolio</a> is a great place to start learning how to invest.</p>

<h3>Your Numbers with Market Investing</h3>
<p>
	If you put your money into savings and spent it that way, the total amount you'd spend would be <span data-var="fiStash" data-format="currency" class="tangle--dynamic"></span>. However, if you invested this and it grew at a pace of
	<span data-var="marketGrowth" class="TKAdjustableNumber" data-step="0.002" data-max="0.20" data-min="0" data-format="percentDecimal" class="tangle--dynamic">/yr</span>,
	and you withdrew an inflation adjusted
	<span data-var="retirementYearlySpending" data-format="currency" class="tangle--dynamic tangle--dynamic">/yr</span>,
	then this amount could provide you with
	<span data-var="fiTotalSpending" data-format="currency" class="tangle--dynamic"></span> before your 100th birthday.
</p>

<p>
	That
	<span data-var="fiTotalSpending" data-format="currency" class="tangle--dynamic"></span>
	wouldn't be all at once but in the form of
	<span data-var="retirementYearlySpending" data-format="currency" class="tangle--dynamic">/yr</span>.
	This is the true power of compound interest!
	Imagine how many more years you'd need to work to save this amount without investing. Actually, no need to imagine -- it's <span data-var="investmentYearsDifference" data-format="years" class="tangle--dynamic"></span>! If you learn how to invest, you can retire <span data-var="investmentYearsDifference" data-format="years" class="tangle--dynamic"></span> years earlier.
</p>

<p class="text-center"><img src="<?php echo $theme_path; ?>/posts/fi/images/mind_blown.gif"></p>

<p>This is the number one difference between people who retire early and those who wait until social security -- <b>people who retire early learn how to invest</b>.</p>

<p>When I first did the math on compound interest I was floored. The idea that I'd make more money during retirement than during my working years seemed counterintuitive, but the numbers were right there.</p>

<a name="part-6"></a>
<div class="container text-center pb-3 mb-3">
  <img src="https://minafi.com/wp-content/uploads/2017/08/pexels-photo-287240.jpeg" alt="retire sooner">
</div>

<h2 class="pt-6">Part 6: What can I do to retire sooner?</h2>

<p>Now that you have a baseline of <span class="tangle--dynamic" data-var="yearsUntilFi" data-format="years" class="tangle--dynamic"></span> until you've saved up enough at your current pace, let's see what small steps you can take to lower that number!</p>

<p>There are only 2 ways you can affect this number:</p>

<blockquote class="text-center">
	Make more money.<br/>Spend less money.
</blockquote>

<p>The savings rate calculation we looked at is based entirely on these two numbers (spending/savings). Let's look at a few scenarios and see what impact they have on your FI dates.</p>

<div class="card container container-slim card--info">
	<h2>What If: You Reduce Spending & Save It?</h2>
	<p>
		If you reduce your spending by
		<span data-var="spendingReductionPercent" data-format="percentDecimal" data-step="0.01" data-max="1" data-min="0" class="tangle--dynamic TKAdjustableNumber"></span>
		(saving
		<span data-var="impliedSpendingReductionYearlySavings" data-format="currency" class="tangle--dynamic "></span>
		a year more), then you could retire
		<span data-var="spendingReductionYearsEarlier" data-format="years" class="tangle--dynamic"> earlier</span>
		once you have saved
		<span data-var="spendingReductionStash" data-format="currency" class="tangle--dynamic"></span>.
	</p>

	<p>
		By reducing your yearly spending by <span data-var="spendingReductionPercent" data-format="percentDecimal" class="tangle--dynamic"></span>, you'll need
		<span data-var="spendingReductionStashDifference" data-format="currency" class="tangle--dynamic"></span>
		less to retire. Upon retiring, you'd be spending <span data-var="impliedSpendingReductionYearlySpending" data-format="currency" class="tangle--dynamic"></span> a year.
	</p>

	<p class="lead fi--info">
		Adam Says: Are there things in your lifestyle that you'd be happy to cut? Would you rather cut spending by
		<span data-var="impliedSpendingReductionYearlySavings" data-format="currency" class="tangle--dynamic ">/yr</span>
		or work for an additional
		<span data-var="spendingReductionYearsEarlier" data-format="years" class="tangle--dynamic"> years</span>?
	</p>
</div>

<p>The less you need, the less you'll need to save. If you reduce your spending to $0/yr, you'd need $0 to retire. That's likely unrealistic, but the less you spend, the less you need.</p>

<p>Taking steps to reduce your lifestyle can pay off by reducing the time you'll be required to work to maintain it. Be careful not to go overboard though. Build a life you want, then save for it.</p>


<div class="card container container-slim card--info">
	<h2>What If: You Earn Money In Retirement?</h2>

	<p>
		You're on track to spend
		<span data-var="retirementYearlySpending" data-format="currency" class="tangle--dynamic">/yr</span>
		during retirement. What if you still spent this exact same amount, but
		<span data-var="eirIncomePercent" data-format="percent" data-step="0.01" data-max="1" data-min="0" class="tangle--dynamic TKAdjustableNumber"></span>
		of it comes from income in retirement? This would be finding a way to make
		<span data-var="eirIncomeAfterRetirement" data-format="currency" class="tangle--dynamic">/yr</span> in side income.
	</p>

	<p>
		In that case, you can retire
		<span data-var="eirTimeSooner" data-format="years" class="tangle--dynamic"></span> earlier!
	</p>

	<p class="lead fi--info">
		<i>Adam says:</i> What can you start doing today to add another income stream? It would reduce your time until retirement, but also add stability for later on.
	</p>
</div>

<p>Finding a small way to supplement your income can reduce the amount you'll need to save.</p>

<div class="card container container-slim card--info">
	<h2>What If: Your Income Grows but your Expenses Don't?</h2>

	<p>
		What if each year of your working career your income grows, but rather than spending it you save it? By <a href="https://minafi.com/avoiding-the-lifestyle-inflation-trap/" target="_blank">avoiding lifestyle inflation</a>, you can benefit from increased earnings without your yearly spending increasing.
  </p>

  <p>
    If your earnings increase by
    <span data-var="payIncreasePercent" data-format="percent" data-step="0.01" data-max="1" data-min="0" class="tangle--dynamic TKAdjustableNumber">/yr</span>,
    and you save all of it, then you could retire
		<span data-var="payIncreaseSooner" data-format="years" class="tangle--dynamic"></span> earlier!
	</p>

	<p class="lead fi--info">
		<i>Adam says:</i> Growing your income without increasing expenses is more difficult than it sounds. I'd recommend keeping track of your savings over time so you know you're sticking to it.
	</p>
</div>

<p><b>Lowering expenses</b>, <b>earning money in retirement</b> and <b>earning more while avoiding lifestyle inflation</b> are three very clear ways to reduce the time until you are financially independent.</p>


<div class="card container container-slim card--info">
	<h2>What If: You do all 3? Reduce spending, earn income &amp; save raises?</h2>

  <p>
    You reduce spending by <span data-var="spendingReductionPercent" data-format="percentDecimal" data-step="0.01" data-max="1" data-min="0" class="tangle--dynamic TKAdjustableNumber"></span>
    while replacing
    <span data-var="eirIncomePercent" data-format="percent" data-step="0.01" data-max="1" data-min="0" class="tangle--dynamic TKAdjustableNumber"></span>
    of your income during retirement (<span data-var="impliedSpendingReductionYearlySavings" data-format="currency" class="tangle--dynamic"></span>)
    while also having your yearly income increase by
    <span data-var="payIncreasePercent" data-format="percent" data-step="0.01" data-max="1" data-min="0" class="tangle--dynamic TKAdjustableNumber">/yr</span> while you're working
    and saving it.
  </ul>

	<p>
    This would result in you reaching FI in
    <span data-var="allSoonerYears" data-format="years" class="tangle--dynamic"></span>, which would be
    <span data-var="allSoonerYearsEarly" data-format="years" class="tangle--dynamic"></span> earlier than your timeline of <span data-var="yearsUntilFi" data-format="years" class="tangle--dynamic"></span>.
  </p>

	<p class="lead fi--info">
		<i>Adam says:</i> It's crazy to think that these 3 things could result in a <span data-var="allSoonerPercent" data-format="percent" class="tangle--dynamic"></span> reduction in your working years.
	</p>
</div>

<p>Making more money and spending less is the key to achieving financial independence sooner.</p>



<a name="part-7"></a>
<div class="container text-center pb-3 mb-3">
  <img src="https://minafi.com/wp-content/uploads/2017/08/tegan-mierle-157974.jpg" alt="who is this for">
</div>
<h2 class="pt-3">Part 7: Who is actually doing this?</h2>

<p>You might be surprised by who is pursuing FI. It ranges from people in debt to multi-millionaires who are FI already. There is likely someone who is in a similar situation to you out there.</p>

<p>I was lucky enough to chat with a number of people who are in various states of financial independence and get their takes on the subject.</p>

<a name="profile-adam"></a>
<div style="background-color: rgba(229, 236, 247, 0.85);" class="py-3 my-3 fi--profile fi--profile-collapsed">
  <div id="fi-profile--adam" class="aesop-component aesop-image-component " style="visibility:hidden;">
		<div class="aesop-content">
			<figure class="aesop-image-component-image aesop-component-align-right aesop-image-component-caption-left" style="margin-right:12%; width:500px;">
        <a class="aesop-lightbox" href="https://minafi.com/wp-content/uploads/2017/08/adam-japan-1024x682.jpg" title="Adam outside Niko in Japan">
					<img src="https://minafi.com/wp-content/uploads/2017/08/adam-japan-1024x682.jpg" alt="Adam outside Niko in Japan">
				</a>
  			<figcaption class="aesop-image-component-caption">
  				Adam outside Niko Japan during our honeymoon.
  			</figcaption>
		  </figure>
		</div>
	</div>

  <h3>Adam from <a href="/" target="_blank">Minafi</a></h3>
  <p class="lead">35m, married, working and saving money in Orlando, FL. $1,050,000 in savings. Spending $55k/yr now and in retirement. FI by 40 in a major city. RE date TBD.</p>
  <p>
    That's me! I'm a web developer, board gamer and cocktail lover who is exploring personal finance and related fields. I've worked for years teaching people how to code at <a href="https://www.codeschool.com" target="_blank">Code School</a>, and want to educate others on FI while learning more myself. You can read more of <a href="/about" target="_blank">my story</a> if you'd like the full details.
  </p>

  <div class="profile-toggle--more">
    <h4>How did you learn about FI?</h4>
    <p>Reading <a href="https://minafi.com/recommends/the-bogleheads-guide-to-investing/" target="blank">The Bogleheads Guide to Investing</a> set me on my journey. It made it clear how little I needed to retire if I was investing it in the stock market.</p>

    <h4>What was your financial status when you began?</h4>
    <p>2 months after I graduated college (age 23), my mom passed away and left me her house and $100,000. A few years later I was 28, had experienced investing during the recession and bought my first home. After selling her house, I had $150,000 in investments and -$100,000 in home equity when I started while making about $52,000 a year.</p>

    <h4>What has been the most impactful change you've made towards FI?</h4>
    <p>Learning and executing on a long term investing strategy. When I look at my total investments today, more than 1/3 of it is from investment gains alone in the past 7 years. This, coupled with controlling lifestyle inflation.</p>

    <h4>What, if anything, do you wish you could have done differently?</h4>
    <p>Does buying Bitcoin count? For me, I underestimated the financial impact of buying a house. I did this prior to learning about FI, and I undertook it without enough thought and planning. The extra yearly expenses (1-2% of the home price every year), the additional time for maintenance and improvements, yard work, cleaning - it's a lot to handle. In retrospect, I would've just continued renting.</p>

    <h4>What advice do you have for others going down the path of FI?</h4>
    <p>Save up $3,000 and invest it in your 401k, a Vanguard IRA or a Vanguard Roth IRA. Use that account to learn the basics of investing - how to buy and sell, what investments to pick and how that works. Starting small in an account where you don't have to worry about taxes helped me gain confidence before jumping in completely.</p>
    <p>Following that, keeping your spending in check year after year and not letting it grow out of proportion with your happiness.</p>
  </div>

  <p>
    <a href="#" class="profile-toggle">
      <span class="profile-toggle--read-more">Read more about Adam <i class="fa fa-angle-double-down" aria-hidden="true"></i></span>
      <span class="profile-toggle--read-less">Collapse <i class="fa fa-angle-double-up" aria-hidden="true"></i></span>
    </a>
  </p>
</div>


<a name="part-8"></a>
<h2 class="pt-3">Part 8: Where can I learn more?</h2>

<p>There are a few amazing books on the topic of financial independence and early retirement that go into these topics with much more eloquence than and depth than I could ever explore. If you're curious to learn more, these are all amazing resources.</p>


<h3>Books</h3>
<p>Here are some of the top sources in different mediums to learn about financial independence</p>

<div id="fi-profile--adam" class="aesop-component aesop-image-component " style="visibility:hidden;">
	<div class="aesop-content">
		<figure class="aesop-image-component-image aesop-component-align-right aesop-image-component-caption-left" style="margin-right:25%; width:250px;">
      <a class="aesop-lightbox" href="https://minafi.com/wp-content/uploads/2017/08/your-monet.jpeg" title="Megacon 2016 in Orlando, FL.">
				<img src="https://minafi.com/wp-content/uploads/2017/08/your-monet.jpeg" alt="Adam at the Ghibli Museum in Tokyo.">
			</a>
	  </figure>
	</div>
</div>

<h4 class="card-title"><a href="https://minafi.com/recommends/your-money-or-your-life/" target="_blank">Your Money or Your Life</a></h4>
<p class="card-text"><i>Your Money</i> is an amazing exploration into developing a relationship with money that goes deeper than just buying things. This book is the origin of many articles and concepts that you'll read about in the FI world, told beautifully.</p>
<p class="card-text">As great as <i>Your Money</i> is, it borders on self-help as opposed to finance - which actually helps its topics connect deeper for me.</p>


<div id="fi-profile--adam" class="aesop-component aesop-image-component " style="visibility:hidden;">
	<div class="aesop-content">
		<figure class="aesop-image-component-image aesop-component-align-left aesop-image-component-caption-left" style="margin-left:16%; width:250px;">
      <a class="aesop-lightbox" href="https://minafi.com/wp-content/uploads/2016/08/bogleheads.jpg" title="Megacon 2016 in Orlando, FL.">
				<img src="https://minafi.com/wp-content/uploads/2016/08/bogleheads.jpg" alt="Adam at the Ghibli Museum in Tokyo.">
			</a>
	  </figure>
	</div>
</div>
<h4 class="card-title"><a href="https://minafi.com/recommends/the-bogleheads-guide-to-investing/" target="blank">The Bogleheads' Guide to Investing</a></h4>
<p class="card-text">This is the book that personally got me into investing and thinking about this subject. By introducing things like the 4% for withdrawal rate, understanding investing, diversification, fees, fund types, account types and more, this book served as my education on investing.</p>
<p class="card-text"><i>The Bogleheads Guide</i> consistently ranks as one of the 3 most influential books I have ever read in my life - serving as an introduction and education all in one.</p>


<div id="fi-profile--adam" class="aesop-component aesop-image-component " style="visibility:hidden;">
  <div class="aesop-content">
    <figure class="aesop-image-component-image aesop-component-align-right aesop-image-component-caption-left" style="margin-right:25%; width:250px;">
      <a class="aesop-lightbox" href="https://minafi.com/wp-content/uploads/2017/08/millionaire.jpg" title="Megacon 2016 in Orlando, FL.">
        <img src="https://minafi.com/wp-content/uploads/2017/08/millionaire.jpg" alt="Adam at the Ghibli Museum in Tokyo.">
      </a>
    </figure>
  </div>
</div>
<h4 class="card-title"><a href="https://minafi.com/recommends/millionaire-next-door/" target="blank">The Millionaire Next Door</a></h4>
<p class="card-text">The term "millionaire" has a connotation of lavish spending and abundance in popular culture. This book looks at a different side of that - working millionaires who worked hard to create a life they wanted.</p>
<p class="card-text">In order to achieve FI, most people will need to earn more than a million dollars. This book put that number into perspective for me, bringing it down to earth.</p>


<h3>Communities</h3>
<p>There are a number of thriving communities focused on financial independence and early retirement. I can't include them all, but here are a few that I've participated in and enjoyed.</p>

<h4><a href="https://www.reddit.com/r/financialindependence/" target="_blank">/r/FinancialIndependence on Reddit</a></h4>
<p>This is a place for people who are or want to become Financially Independent (FI), which means not having to work for money.</p>

<h4><a href="https://www.bogleheads.org/forum/index.php" target="_blank">Bogleheads.org Forum</a></h4>
<p>This was the first forum I discovered when investing. I asked extremely basic questions and people were helpful and welcoming. If you're learning how to invest, and want to do it the smart way, this forum, the associated wiki, is an amazing source of knowledge.</p>

<h4><a href="https://forum.mrmoneymustache.com/" target="_blank">Mr. Money Mustache Community</a></h4>
<p>While Bogleheads leans towards investing, the MMM community ranges from "do it yourself" to "real estate investing" to "taxes" and "entrepreneurship".</p>








<a name="part-9"></a>
<h2 class="pt-3">Part 9: What Next?</h2>
<p>
  If there's one takeaway you get from this post, it's that <b>the concept of financial independence isn't solely for those who are extremely weathy or for those who are nearing social security</b>.
</p>
<p>
  It's a path that starts with understanding and minimizing your expenses -- a valuable undertaking regardless of your long-term goal. Beyond that, it's about understanding how much you need to save to live the life you want and making a plan for it.
</p>
<p>
  There is no predetermined group that financial independence is for. It could work well for people in extreme debt who want to get out and work towards a different future -- or for people in their career looking for what comes next.
</p>

<p>Here's your homework!</p>

<ul>
  <li>Track your spending for a month. Learn where every cent is going.</li>
  <li>Find a community of people to learn from. This could one of the above places, a blog you enjoy, a podcast you jive with - anything that keeps your learning.</li>
  <li>Read more about <a href="/category/minimalism/" target="_blank">minimalism</a>, <a href="/category/mindfulness/" target="_blank">mindfulness</a> or <a href="/category/financial-independence/" target="_blank">financial independence</a> here on Minafi.</li>
  <li>Start learning the basics of investing. I recommend starting with a <a href="/simple-three-fund-portfolio-vanguard/" target="_blank">Simple Three-Fund Portfolio at Vanguard</a> or in your 401k. Understand what you're investing in there.</li>
  <li>Make a plan for when you'd want to be FI, and work backwards to understand what changes you'd need to make in your life to get there.</li>
</ul>

<div class="card container container-wide mb-3">
  <div class="row mt-3">
    <p class="col-md-10 h2 text-center fi-share--message">I read an Interactive Guide to Financial Independence and Early Retirement on Minafi and now know when I'll be FI!</p>
    <p class="col-md-2 h1 fi--share">
      <span class="h6 text-center">Share On</span><br/>
      <a href="#" title="Share on Facebook" class="fi-share-fb" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
      <a href="#" class="fi-share-twitter" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
    </p>
  </div>
</div>

<p class="lead">If you enjoyed this article, or have any thoughts on it, please share it and <a href="/contact" target="_blank">let me know</a> what you think. I would love to hear from you!</p>
