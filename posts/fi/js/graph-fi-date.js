function FiGraph() {
  this.margin = {
    top: 20,
    left: 100,
    right: 120,
    bottom: 30
  };
  this.options = {
    height: 400,
    width: 900
  };
  this.finance = new Finance();

  this.messageForAge = function(age) {
    return "$" + d3.format(".3s")(age.networth) + " @ age " + age.age;
  }

  this.setup = function() {
    this.svg = d3.select(".graph--fi-date").append("svg")
        .attr("width", this.options.width)
        .attr("height", this.options.height);

    // Used for the networth line
    this.svg.append("g")
        .attr("class", "graph--fi-date--line-group")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    this.path = this.svg.select(".graph--fi-date--line-group")
      .append("path")
      .attr("class", "line");

    // Path used for the 3% line
    var wrGroup = this.svg.select(".graph--fi-date--line-group")
          .append("g")
          .attr("class", "focus");
    this.wrLine = wrGroup.append("line")
        .attr("class", "graph--fi--wr-line")
        .attr("x1", 0)
        .attr("x2", this.options.width - this.margin.left - this.margin.right);
    this.wrText = wrGroup.append("text")
           .attr("class", "fi-date--wr-label")
           .attr("y", 0)
           .attr("x", this.options.width-this.margin.right-180)
           .attr("dy", ".71em");


    // Hover lines
    var focus = this.svg.select(".graph--fi-date--line-group")
          .append("g")
          .attr("class", "focus")
          .style("display", "none");
    focus.append("line")
        .attr("class", "x-hover-line hover-line")
        .attr("y1", 0)
        .attr("y2", this.options.height);
    focus.append("line")
        .attr("class", "y-hover-line hover-line")
        .attr("x1", 0)
        .attr("x2", this.options.width);
    focus.append("circle")
        .attr("r", 7.5);
    focus.append("rect")
          .attr("class", "tooltip--svg")
          .attr("transform", "translate(12, -10)")
          .attr("width", 140)
          .attr("height", 20);
    focus.append("text")
        .attr("x", 15)
      	.attr("dy", ".31em");
    var graph = this;
    this.svg.select(".graph--fi-date--line-group")
      .append("rect")
      .attr("class", "overlay")
      .attr("width", this.options.width-this.margin.left-this.margin.right)
      .attr("height", this.options.height-this.margin.top-this.margin.bottom)
      .on("mouseover", function() {
        focus.style("display", null);
      })
      .on("mouseout", function() {
        focus.style("display", "none");
      })
      .on("mousemove", function() {
        var bisectAge = d3.bisector(function(d) { return d.age; }).left;

        var x0 = graph.xScale.invert(d3.mouse(this)[0]),
            i = bisectAge(graph.ages, x0, 1),
            d0 = graph.ages[i - 1],
            d1 = graph.ages[i],
            age = x0 - d0.age > d1.age - x0 ? d1 : d0;

        focus.attr("transform", "translate(" + graph.xScale(age.age) + "," + graph.yScale(age.networth) + ")");
        focus.select("text").text(function() { return graph.messageForAge(age); }.bind(graph));
        focus.select(".x-hover-line").attr("y2", graph.options.height - graph.margin.bottom - graph.margin.top - graph.yScale(age.networth));
        focus.select(".y-hover-line").attr("x2",graph.xScale(age.age)*-1 );
      });

    // X Axis for Age
    this.xAxisEl = this.svg.append("g")
                 .attr("class", "x axis")
                 .attr("transform", "translate("+this.margin.left+"," + (this.options.height-this.margin.top-10) + ")");
    this.xAxisEl.append("text")
           .attr("class", "axis--label")
           .attr("y", -18)
           .attr("x", this.options.width-this.margin.right-100)
           .attr("dy", ".71em")
           .text("Age");

    // Y Axis for Net worth
    this.yAxisEl = this.svg.append("g")
                 .attr("class", "y axis")
                 .attr("transform", "translate("+this.margin.left+","+this.margin.top+")");
    this.yAxisEl.append("text")
           .attr("class", "axis--label")
           .attr("transform", "rotate(-90)")
           .attr("y", 6)
           .attr("x", -20)
           .attr("dy", ".71em")
           .text("Net Worth");
  }

  this.update = function(user) {
    this.user = user;
    var maxAge = user.goalReAge + 10;
    if(maxAge < user.age) { maxAge = user.age + 25; }
    this.ages = d3.range(user.age, maxAge, 1).map(function(d) {
      var years = d - this.user.age;

      // Growth in the original deposit
      var stashValue = this.finance.FV(this.user.marketGrowth*100, this.user.networth, years);

      // Growth in amount added each year
      var depositValue = this.user.yearlySavings * Math.pow(1 + this.user.marketGrowth, d);

      return {
        age: d,
        networth: stashValue + depositValue
      };
    }.bind(this));

    var currencyFormat = function(d) { return "$" + d3.format(".3s")(d); };
    this.maxNetWorth = d3.max(this.ages, function(y) { return y.networth; });
    this.yScale = d3.scaleLinear()
        .domain([this.maxNetWorth, 0])
        .range([0, this.options.height - this.margin.bottom - this.margin.top]);
    this.xScale = d3.scaleLinear()
        .domain([user.age, maxAge])
        .range([0, this.options.width - this.margin.left - this.margin.right]);
    var xAxis = d3.axisBottom()
                  .scale(this.xScale)
                  .ticks(10)
                  .tickFormat(d3.format("d"));
      yAxis = d3.axisLeft()
                .scale(this.yScale)
                .ticks(8)
                .tickFormat(currencyFormat);

    var line = d3.line()
      .x(function(age) {
        return this.xScale(age.age);
      }.bind(this))
      .y(function(age) {
        return this.yScale(age.networth);
      }.bind(this));

    // Update the axis
    this.xAxisEl.call(xAxis);
    this.yAxisEl.call(yAxis);

    // Add/Update the line with data
    this.path.datum(this.ages).attr("d", line);

    // Update the WR line
    var r = Math.round(user.wr*1000, 2)/10;
    var wry = this.yScale(user.fiStash);
    this.wrText.attr("y", wry-20).text(r+"% WR");
    this.wrLine.attr("y1", wry)
               .attr("y2", wry);
  }
};
