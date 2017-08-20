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
    var focus = this.svg.select(".graph--fi-date--line-group")
          .append("g")
          .attr("class", "focus");
    this.wrLine = focus.append("line")
        .attr("class", "graph--fi--wr-line")
        .attr("x1", 0)
        .attr("x2", this.options.width - this.margin.left - this.margin.right);
    this.wrText = focus.append("text")
           .attr("class", "fi-date--wr-label")
           .attr("y", 0)
           .attr("x", this.options.width-this.margin.right-100)
           .attr("dy", ".71em");



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
    var ages = d3.range(user.age, maxAge, 1).map(function(d) {
      var years = d - this.user.age;
      return {
        age: d,
        networth: (this.finance.FV(this.user.marketGrowth*100, this.user.networth, years) + this.user.yearlySavings*years)
      };
    }.bind(this));

    var currencyFormat = function(d) { return "$" + d3.format(".3s")(d); };
    this.maxNetWorth = d3.max(ages, function(y) { return y.networth; });
    var yScale = d3.scaleLinear()
        .domain([this.maxNetWorth, 0])
        .range([0, this.options.height - this.margin.bottom - this.margin.top]);
    var xScale = d3.scaleLinear()
        .domain([user.age, maxAge])
        .range([0, this.options.width - this.margin.left - this.margin.right]);
    var xAxis = d3.axisBottom()
                  .scale(xScale)
                  .ticks(10)
                  .tickFormat(d3.format("d"));
      yAxis = d3.axisLeft()
                .scale(yScale)
                .ticks(8)
                .tickFormat(currencyFormat);

    var line = d3.line()
      .x(function(age) {
        return xScale(age.age);
      })
      .y(function(age) {
        return yScale(age.networth);
      });

    // Update the axis
    this.xAxisEl.call(xAxis);
    this.yAxisEl.call(yAxis);

    // Add/Update the line with data
    this.path.datum(ages).attr("d", line);

    // Update the WR line
    var r = Math.round(user.wr*1000, 2)/10;
    var wry = yScale(user.fiStash);
    this.wrText.attr("y", wry-20).text(r+"% WR");
    this.wrLine.attr("y1", wry)
               .attr("y2", wry);
  }
};
