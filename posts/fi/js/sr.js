function calcYears(sr) {
  var savings = 100*sr,
      spending = 100 - savings,
      stashNeeded = spending * 25,
      growth = 0.07;

  var fv = savings + (stashNeeded * growth);
  var pv = savings;

  var j = Math.log(fv/pv);
  var d = Math.log(1 + growth);

  if(j < 0) { return 0; }
  return j/d;
}

function messageForYear(year, format) {
  var numYears = year.years;
  if(numYears < 1) {
    numYears = numYears.toFixed(2);
  } else {
    numYears = parseInt(numYears);
  }
  var yearMessage = numYears+" year";
  if(years!==1) {
    yearMessage += "s";
  }
  if(format && format=="html") {
    return "<b>Your Rate:</b> "+year.rate+"%<br/>"+yearMessage;
  } else {
    return year.rate + "% / " + yearMessage;
  }
}

var svg,
    yScale,
    xScale,
    barSelection,
    labelSelection,
  margin = {
    top: 20,
    left: 50,
    right: 120,
    bottom: 30
  },
  options = {
    height: 400,
    width: 900
  },
  savingsRates = d3.range(1, 101, 1),
  years = savingsRates.map(function(d) {
    return {
      rate: d,
      years: calcYears(d/100)
    };
  }),
  bisectSr = d3.bisector(function(d) { return d.rate; }).left,
  initial, tooltip;

function createGraph() {
  // Define the div for the tooltip
  initial = d3.select(".graph--sr--container").append("div")
    .attr("class", "tooltip tooltip--sr")
    .style("opacity", 0),
  tooltip = d3.select(".graph--sr--container").append("div")
      .attr("class", "tooltip tooltip--sr")
      .style("opacity", 0);
  var maxYears = d3.max(years, function(y) { return y.years; });
  yScale = d3.scaleLinear()
      .domain([maxYears, 0])
      .range([0, options.height - margin.bottom - margin.top]);
  xScale = d3.scaleLinear()
      .domain([1,100])
      .range([0, options.width - margin.left - margin.right]);
  var  xAxis = d3.axisBottom().scale(xScale),
    yAxis = d3.axisLeft().scale(yScale).ticks(10); //.orient("left");


  var line = d3.line()
    .x(function(year) {
      return xScale(year.rate);
    })
    .y(function(year) {
      return yScale(year.years);
    });

  svg = d3.select(".graph--sr").append("svg")
      .attr("width", options.width)
      .attr("height", options.height);

  var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate("+margin.left+"," + (options.height-margin.top-10) + ")")
    .call(xAxis)
    .append("text")
      .attr("class", "axis--label")
      .attr("y", -18)
      .attr("x", 150)
      .attr("dy", ".71em")
      .text("Savings Rate");

  svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate("+margin.left+","+margin.top+")")
    .call(yAxis)
    .append("text")
      .attr("class", "axis--label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("x", options.height*-1+175)
      .attr("dy", ".71em")
      .text("Years of Saving");

  g.append("path")
    .datum(years)
    .attr("class", "line")
    .attr("d", line);

  var focus = g.append("g")
        .attr("class", "focus")
        .style("display", "none");

  focus.append("line")
      .attr("class", "x-hover-line hover-line")
      .attr("y1", 0)
      .attr("y2", options.height);

  focus.append("line")
      .attr("class", "y-hover-line hover-line")
      .attr("x1", 0)
      .attr("x2", options.width);

  focus.append("circle")
      .attr("r", 7.5);

  focus.append("text")
      .attr("x", 15)
    	.attr("dy", ".31em");

  // Rect for moving
  g.append("rect")
    .attr("class", "overlay")
    .attr("width", options.width-margin.left-margin.right)
    .attr("height", options.height-margin.top-margin.bottom)
    .on("mouseover", function() {
      focus.style("display", null);
    })
    .on("mouseout", function() {
      focus.style("display", "none");
    })
    .on("mousemove", function() {
      var x0 = xScale.invert(d3.mouse(this)[0]),
          i = bisectSr(years, x0, 1),
          d0 = years[i - 1],
          d1 = years[i],
          year = x0 - d0.year > d1.year - x0 ? d1 : d0;

      focus.attr("transform", "translate(" + xScale(year.rate) + "," + yScale(year.years) + ")");
      focus.select("text").text(function() { return messageForYear(year); });
      focus.select(".x-hover-line").attr("y2", options.height - margin.bottom - margin.top - yScale(year.years));
      focus.select(".y-hover-line").attr("x2",xScale(year.rate)*-1 );
    });

}

var highlightG, highlightCircle
function highlightSr(rate) {
  var year = years.find(function(year) {
    return parseInt(year.rate) == parseInt(rate);
  });
  var x = xScale(year.rate),
      y = yScale(year.years);


  highlightG = highlightG || svg.append("g")
    .attr("width", options.width-margin.left-margin.right)
    .attr("height", options.height-margin.top-margin.bottom)
    .attr("class", "active--sr")

  highlightCircle = highlightCircle || highlightG.append("circle")
      .attr("class", "user--sr")
      .attr("r", 8)

  highlightCircle.attr("cy", y-3).attr("cx", x);

  var message = messageForYear(year, "html");

  initial.transition()
     .duration(100)
     .style("opacity", .9);
  initial.html(message)
      .style("left", x + (margin.left/2) + "px")
      .style("top", y+"px");
}

$(function() {
  createGraph();
});
