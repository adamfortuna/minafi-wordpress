<?php
  $theme_path = get_template_directory_uri();
?>
<script src="<?php echo $theme_path; ?>/posts/fi/js/d3.js"></script>
<script src="<?php echo $theme_path; ?>/posts/fi/js/fi.js"></script>
<script src="<?php echo $theme_path; ?>/posts/fi/js/sr.js"></script>

<p>Let's talk about financial independence and early retirement! Theses phrases alone have a lot of weight associated with them, and you might have immediate gut responses to just hearing these terms.</p>

<p>There's a lot to the idea of retirement. You might love your job and would't think about leaving it. Maybe you feel you never want to retire because we you'd just "be bored", or maybe you plan to work until you can't anymore. <b>For this post, I'm going to ask one request of you:</b></p>

<blockquote>My Request: Don't assume financial independence means retirement.</blockquote>

<p>Instead, for this post, think of financial independence (abbreviated FI) as the point where if for any reason you stopped working, you'd be set for the rest of your life.</p>

<p>After making your way through and filling in your numbers, you're going to know what you'll need to do to make it happen.</p>

<ul class="list-unstyled">
	<li><a href="#part-1">Part 1: Where am I now?</a></li>
  <li><a href="#part-2">Part 2: How much do I need?</a></li>
	<li><a href="#part-3">Part 3: How is that enough?</a></li>
	<li><a href="#part-4">Part 4: How can I retire sooner?</a></li>
	<li><a href="#part-5">Part 5: Where can I learn more?</a></li>
</ul>

<a name="part-1"></a>
<h2>Part 1: Where am I now?</h2>

<p>The most common question when it comes to retirement is an important one:</p>

<blockquote>How much money do I need to retire?</blockquote>

<p>This is going to be the core question we answer in this question, exploring it in a number of different ways. My goal is that after reading this post, you feel empowered with additional information that you can act on immediately to impact your life. Here are the core topics we'll be digging into.</p>

<p>The first step is understanding where you are now. Depending on your current financial health, this can range from a breath a relief to sobering realization. Please, bear with it. I guarantee that knowing your financial health is better than not knowing.</p>

<h3>This Article Is Interactive!</h3>
<p>This is an experiment. Whenever you see <span data-var="exampleClick" class="TKToggle TKSwitch">
		<span>green dotted unlined text</span>
		<span>yes! just like that!</span>
	</span>, that indicates this is a place that needs your input! Just hover over it and it'll tell you what to do. <b>The content of this post will change based on your input</b>. Consider it an old-school choose your own adventure blog post like you read as a kid. Give this one a shot.</p>

<div class="card container container-slim card--info">
	<h3>Savings Rate Calculator</h3>
	<p class="lead">Try changing the underlined values and see what happens!</p>
	<p>
		My yearly after-tax income is $<span data-var="yearlyIncome" data-format="currency" class="TKNumberField" data-min="0" data-max="10000000"></span> and I save $<span data-var="yearlySavings" data-format="currency" class="TKNumberField" data-min="0" data-max="10000000"></span> total for retirement -- including 401k and all other means. Using these figures, my savings rate (SR) will be about <span data-var="savingsRate" data-format="percent" class="tangle--dynamic"></span>.
	</p>
	<p>This is calculated with the following formula:</p>
	<p class="text-center">
	  (<span  class="tangle--dynamic" data-var="yearlySavings" data-format="currency"></span> / <span class="tangle--dynamic"data-var="yearlyIncome" data-format="currency"></span>) * 100% = <span class="tangle--dynamic"data-var="savingsRate" data-format="percent"></span> Savings Rate
	</p>
	<p class="lead fi--info">
		<i>Adam Says:</i> Nothing filled out here will be sent to any server - it's just for you. These values <span data-var="storeCookies" class="TKToggle TKSwitch">
				<span>will NOT be stored in a cookie</span>
				<span>will be stored in a cookie</span>
			</span> in your browser, so if you revist this page, you
			<span data-var="storeCookies" class="TKToggle TKSwitch">
				<span>will NOT</span>
				<span>will</span>
			</span>
			see the same results. If you want you can <a href="#" class="fi--reset">reset all values to defaults</a> at any time.
	</p>
</div>

<p>When working towards retirement, <b>your savings rate is one of the most important numbers</b>. You don't need <i>me</i> to tell you that the more you save, the faster you'll be able to retire, but <b>how much faster</b>? See where your <span class="tangle--dynamic" data-var="savingsRate" data-format="percent"></span> SR falls on the following chart:</p>

<div class="card container container-wide graph--sr--container mb-3 card--info">
	<div class="graph graph--sr"></div>
	<p class="lead fi--info">
		<i>Adam Says:</i> Assumptions abound! This assumes: $0 current savings, you save what you don't spend, <span data-var="marketGrowth" class="TKAdjustableNumber" data-step="0.002" data-max="0.20" data-min="0.001" data-format="percentDecimal" class="tangle--dynamic">/yr investment growth</span>, <span data-var="wr" class="TKAdjustableNumber" data-step="0.001" data-max="0.20" data-min="0" data-format="percentDecimal" class="tangle--dynamic"> WR</span>, and that your spending will be the same when you retire. If you don't know what these terms mean, don't worry -- we'll get to them.
	</p>
</div>

<p>For your savings rate, <span class="tangle--dynamic" data-var="savingsRate" data-format="percent"></span>, you can see on the chart that you would need <span class="tangle--dynamic" data-var="yearsUntilFiOnlySR" data-format="years"></span> to earn enough to be financially independent.</p>

<p>What floors me about this chart is a 10% SR, often sighted as a "good" savings rate, will take <b>41 years</b> to save up enough to retire (4% WR / 7% Market Return) - and that's only if your spending is the same then! If your income and spending goes up, it'll take even longer. If you double that SR to 20% though, you can retire in 38 years. That's 25% time working for 10% of your salary. The takeaway here is clear.</p>

<blockquote class="fi--info">Save 10% of your income is terrible advice!</blockquote>

<p>If you're hoping to be financially independent before collecting social security, you'll need to save more. Let's look into ways to reduce this number. These estimates are making a <b>LOT</b> of assumptions. We can refine this a little, but for that I'm going to need your help -- in the form of answering a few more questions.</p>

<a name="part-2"></a>
<h2>Part 2: How much do I need?</h2>

<p>In order to understand how much you need, we'l need to learn a little more about you.</p>

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
		and a networth
		<span data-var="networth" data-format="currency" class="tangle--dynamic"></span>,
		if you continue to invest
		<span class="tangle--dynamic" data-format="currency" data-var="yearlySavings">/yr</span>, then you're on track to be financially independent in
		<span class="tangle--dynamic" data-var="yearsUntilFi" data-format="years"></span>
		-- at age
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
		  <strong>Time to Make a Change?</strong> You have more than 10 years of working ahead of you at your current pace. If you want to reach financial independence sooner, you're going to need to make some major changes.
		</div>
	</div>

	<p class="lead fi--info">
		<i>Adam Says:</i> For these numbers I'm assuming <span data-var="marketGrowth" class="TKAdjustableNumber" data-step="0.002" data-max="0.20" data-min="0" data-format="percentDecimal" class="tangle--dynamic">/yr investment growth</span> and a <span data-var="wr" class="TKAdjustableNumber" data-step="0.001" data-max="0.20" data-min="0" data-format="percentDecimal" class="tangle--dynamic"> withdrawal rate</span>. If you're not sure what these numbers mean, don't worry! I'll explain them later on in this post.
	</p>
</div>

<p>This is where things start to get fun! There's now enough information to know a rough estimate of when you'd be <b>financially independent</b>.

<h2>Financial Independence vs Retirement</h2>

<p>Financial Independence (FI) is different from retirement. Think of financial independence as the amount of money you'd need in order to never work again. Retirement (RE), on the other hand, is the act of not working.</p>

<p><b>It's possible for people to be FI but continue working</b> -- you see it all the time. From CEOs of companies, to quiet employees who have saved huge amounts to bloggers talking about retirement (well, some -- not me). There are also people who are retired, but who may need to return to work someday down the line when their savings runs out, or if social security fails somewhere down the line.</p>

<p>To be FIRE (financially independent + retired) is an aim with <b>the goal of minimizing stress from external sources</b>. It does rely on stock markets to perform in a similar pattern to the last 100+ years, but aside from that, it's not based around too many assumptions.</p>

<h3>Enter Withdrawal Rate (WR)</h3>

<p>Up until this point, we've been a little rosy in our withdrawal rate (WR). The withdrawal rate is the percent of your savings you withdraw each year. This can be calculated as follows:</p>

<div class="card container container-slim card--info">
	<p class="text-center">
		(Retirement Spending/yr / Retirement Savings) * 100% = WR
		<br/>
		(<span data-var="retirementYearlySpending" data-format="currency" class="tangle--dynamic"></span> / <span class="tangle--dynamic" data-var="fiStash" data-format="currency"></span>) * 100% = <span data-var="wr" data-format="percentDecimal" class="TKAdjustableNumber tooltippable tangle--dynamic" data-step="0.001" data-max="1" data-min="0" data-toggle="tooltip" data-placement="top" title="3% is considered very stable. 4% is starting to get risky. Above 4% is not advised."></span>
	</p>

	<p>
		In other words, at a <span data-var="wr" data-format="percentDecimal" class="tangle--dynamic tangle--dynamic"> WR</span> , you'll need to save up <span data-var="fiStash" data-format="currency" class="tangle--dynamic"></span> before you stop working completely. At your current pace, this will take <span class="tangle--dynamic" data-var="yearsUntilFi" data-format="years" class="tangle--dynamic"></span> - allowing you retire at age <span data-var="fiAge" data-format="years" class="tangle--dynamic"></span>.
	</p>

	<p class="lead fi--info">Adam Says: Try a WR of 3% to be more conservative, or stick to an SR of 4% for a bit more risk. According to the <a href="https://www.bogleheads.org/wiki/Trinity_study_update" target="_blank">Trinity Study</a>, 3% will have a success rate of up to 98%, while a 4% WR had only a rate of 87%.</p>
</div>

<a name="part-3"></a>
<h2 class="pt-3">Part 3: How is this enough?</h2>

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

<p>That's a very good question! If you put your money into a savings account, then this is exactly how long your investment would last.</p>

<h3>Factoring In Inflation</h3>

<p>Even worse, each of those <span data-var="yearsOfFiNoInvestment" data-format="years" class="tangle--dynamic tangle--dynamic"></span>, your spending power would be slightly less due to inflation, which is generally around 3%. Inflation is something we have no control over individually, but is something we can plan for.</p>

<p>Inflation means that each year, what you can buy with your money is going down by some small amount. If you've seen prices rise since you were a kid, that's potentially a result of inflation.</p>

<p>Because of this, we need to increase our total funds by <b>3%</b> due to inflation plus our <span data-var="wr" data-format="percentDecimal" class="tangle--dynamic tangle--dynamic"> WR</span> each year to be in a good spot. Let's talk about what we can do to make this amount each year using passive means.</p>


<h3>Enter Market Investing</h3>

<p>The missing piece here is that you can invest that money in the stock market -- both while you're growing it and when you're drawing down from it.</p>

<p>Stock markets in the US have returned on average 7% a year since their beginning. This is an important number! If you're withdrawing at most 4% of this, and 3% of it is going to inflation, then your net worth will go down ever so slightly over time.</p>

<p>Learning how to invest and earn this 7% will sound intimidating at first. It will take experience, but more than that it'll take being brave and putting money into the stock market. Using a simple <a href="https://minafi.com/simple-three-fund-portfolio-vanguard/">3-fund portfolio</a> is a great place to start. </p>

<h3>Total Amount With Investments</h3>

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
	wouldn't be all at once, but in the form of
	<span data-var="retirementYearlySpending" data-format="currency" class="tangle--dynamic">/yr</span>.
	This is the true power of compound interest!
	Imagine how many more years you'd need to work to save this amount without investing. Actually, no need to imagine -- it's <span data-var="investmentYearsDifference" data-format="years" class="tangle--dynamic"></span>! If you learn how to invest, you can retire <span data-var="investmentYearsDifference" data-format="years" class="tangle--dynamic"></span> years earlier -- which is usually the different of retiring or not retiring.
</p>

<p class="text-center"><img src="<?php echo $theme_path; ?>/posts/fi/images/mind_blown.gif"></p>

<p>When I first did the math on compound interest I was floored. If you can't imagine 1 year out, it's hard to image <span data-var="yearsUntilFi" data-format="years" class="tangle--dynamic"></span> out.

<a name="part-4"></a>
<h2 class="pt-4">Part 4: How can I retire sooner?</h2>

<p>Now that you have a baseline of <span class="tangle--dynamic" data-var="yearsUntilFi" data-format="years" class="tangle--dynamic"></span> until you've saved up enough at your current pace, let's see what small steps you can take to lower that number!</p>

<p>You can probably see where this is going, but there are 2 ways you can affect this number:</p>

<blockquote class="text-center">
	Make more money.<br/>Spend less money.
</blockquote>

<p>The savings rate calculation we looked at is based entirely on these two numbers (spending/earnings). By keeping your salary exactly the same and saving more money you can hugely impact this number. Let's try it out and see.</p>

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
		Adam Says: What do you think? Is reducing your spending by
		<span data-var="spendingReductionStashDifference" data-format="currency" class="tangle--dynamic"></span>
		worth
		<span data-var="spendingReductionYearsEarlier" data-format="years" class="tangle--dynamic"></span>?
	</p>
</div>

<p>The less you need, the less you'll need to save. If you reduce your spending to $0/yr, you'd need $0 after all. Taking steps to reduce your lifestyle can payoff by reducing the time you'll be required to work to maintain it.</p>

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

<p><b>Lowering expenses</b>, <b>earning money in retirement</b> and <b>earning more while avoiding lifestyle inflation</b> are three very clear ways to reduce the time until you are financially independent. What if you do all 3 of these?</p>


<div class="card container container-slim card--info">
	<h2>What If: You do all 3? Reduce spending, earn income &amp; save raises?</h2>

  <p>
    You reduce spending by <span data-var="spendingReductionPercent" data-format="percentDecimal" data-step="0.01" data-max="1" data-min="0" class="tangle--dynamic TKAdjustableNumber"></span>,
    while replacing
    <span data-var="eirIncomePercent" data-format="percent" data-step="0.01" data-max="1" data-min="0" class="tangle--dynamic TKAdjustableNumber"></span>
    of your income during retirement (<span data-var="impliedSpendingReductionYearlySavings" data-format="currency" class="tangle--dynamic"></span>)
    while also having your yearly income increase by
    <span data-var="payIncreasePercent" data-format="percent" data-step="0.01" data-max="1" data-min="0" class="tangle--dynamic TKAdjustableNumber">/yr</span> while you're working
    and saving it.
  </ul>

	<p>
    This would result in you reacing FI in
    <span data-var="allSoonerYears" data-format="years" class="tangle--dynamic"></span>, which would be
    <span data-var="allSoonerYearsEarly" data-format="years" class="tangle--dynamic"></span> earlier!
  </p>

	<p class="lead fi--info">
		<i>Adam says:</i> It's crazy to think that these 3 things could result in a <span data-var="allSoonerPercent" data-format="percent" class="tangle--dynamic"></span> reduction in your working years.
	</p>
</div>


<a name="part-5"></a>
<h2 class="pt-3">Part 5: Where can I learn more?</h2>

<p>There are a few amazing books on the topic of financial independence and early retirement that go into these topics with much more eloquence than and depth than I could ever explore. If you're curious to learn more, these are all amazing resources.</p>


<div style="background-color: rgba(229, 236, 247, 0.85);" class="py-3 my-3 fi--profile fi--profile-collapsed">
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
  <p class="card-text"><i>Your Money</i> is an amazing exploration into developing a relationship with money that goes deeping than just buying things. This book is the origin for many articles and concepts that you'll read about in the FI world, told beautifully.</p>
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
</div>


<h3>Articles</h3>
<p>There are hundreds (thousands?) of blogs on personal finance out there. Thoughout the years reading a small selection of these, here's some of the most inspirational and informative posts I've run into.</p>

<h4><a href="http://www.mrmoneymustache.com/2012/01/13/the-shockingly-simple-math-behind-early-retirement/" target="_blank">The Shockingly Simple Math Behind Early Retirement</a></h4>
<p>I first read about the savings rate idea described at the beginning of this post from this article by Mr. Money Mustache.</p>

<h4><a href="http://www.mrmoneymustache.com/2012/01/13/the-shockingly-simple-math-behind-early-retirement/" target="_blank">The Shockingly Simple Math Behind Early Retirement</a></h4>
<p>I first read about the savings rate idea described at the beginning of this post from this article by Mr. Money Mustache.</p>

<h3>People</h3>

<p>
  You might be surprised by who is pursuing FI. It ranges from people in debt, to multi-millionaires who are FI aleady. There's likely someone who is in a similar situation to you out there.
</p>

<a name="profile-adam"></a>
<div style="background-color: rgba(229, 236, 247, 0.85);" class="py-3 my-3 fi--profile fi--profile-collapsed">
  <div id="fi-profile--adam" class="aesop-component aesop-image-component " style="visibility:hidden;">
		<div class="aesop-content">
			<figure class="aesop-image-component-image aesop-component-align-right aesop-image-component-caption-left" style="margin-right:12%; width:500px;">
        <a class="aesop-lightbox" href="https://minafi.com/wp-content/uploads/2017/07/megacon_small.jpg" title="Megacon 2016 in Orlando, FL.">
					<img src="https://minafi.com/wp-content/uploads/2017/07/megacon_small.jpg" alt="Adam at the Ghibli Museum in Tokyo.">
				</a>
  			<figcaption class="aesop-image-component-caption">
  				Adam at Megacon 2016 in Orlando, FL.
  			</figcaption>
		  </figure>
		</div>
	</div>

  <h3>Adam from <a href="/">Minafi</a></h3>
  <p class="lead">35, <mark class="tooltippable" data-toggle="tooltip" title="Currently working and saving money.">accumulation phase</mark>, Orlando, FL, $1,050,000 in savings. Spending $55k/yr. FI by 40.</p>
  <p>That's me! You'll see my head popup now and again for advice throughout this post. By day I'm a Product Manager and web developer and by night I love to share my knowledge about finance in the hope of inspiring and helping others.</p>

  <div class="profile-toggle--more">
    <h4>How did you learn about FI?</h4>
    <p>Reading <a href="https://minafi.com/recommends/the-bogleheads-guide-to-investing/" target="blank">The Bogleheads Guide to Investing</a> set me on my journey. It made it clear how little I needed to retire if I was investing it in the stock market.</p>

    <h4>What was your financial status when you began?</h4>
    <p>2 months after I graduated college (age 23), my mom passed away and left me her house and $100,000. A few years later I was 28, had experienced investing during the recession and bought my first home. After selling her house, I had $150,000 in investments and -$100,000 in home equity when I started while making about $52,000 a year.</p>

    <h4>What has been the most impactful change since then you've made?</h4>
    <p>Learning about long term investing, while controlling lifestyle inflation. The combination of these two makes up a good 90% of FI for me.</p>

    <h4>What, if anything, do you wish you could have done differently?</h4>
    <p>Does buying Bitcoin count? But really, buying a house is huge commitment. I understook it without enough thought. The extra yearly expenses (1-2% of the home price every year), the additional time for maintenance and improvements, yard work, cleaning - it's a lot to handle.</p>

    <h4>What advice do you have for others going down the path of FI?</h4>
    <p>Save up $3,000 and invest it in a Vanguard IRA or Roth IRA. Use that account to learn the basics of investing - how to buy and sell, what investments to pick and how that works. Starting small and adding more as your confidence in investing grows is a great first step.</p>
  </div>

  <p>
    <a href="#" class="profile-toggle">
      <span class="profile-toggle--read-more">Read more about Adam <i class="fa fa-angle-double-down" aria-hidden="true"></i></span>
      <span class="profile-toggle--read-less">Collapse <i class="fa fa-angle-double-up" aria-hidden="true"></i></span>
    </a>
  </p>
</div>





<a name="part-5"></a>
<h2 class="pt-3">Part 5: Who is this for?</h2>
<p>
  Who it's for is people who want to make a change to their relationship with money and develop a plan for rest of their lives.
</p>
<p>
  If there's one takeaway you get from this post, it's that <b>the concept of financial independence isn't solely for those who are extremely weathly or for those who are nearing social security</b>.
</p>
<p>
  It's a path that starts with understanding and minimizing your expenses -- a valuable undertaking regardless of your long-term goal. Beyond that, understanding how much you need to save to live the like you want and making a plan for it.
</p>
<p>
  There is no predetermined group that financial independence is for. It could work well for people in extreme debt who want to get out and work towards a different future -- or for people in their career looking for what comes next.
</p>
