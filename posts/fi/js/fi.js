var putThousandsSeparators = function(value, sep) {
  if (sep == null) {
    sep = ',';
  }
  value = parseInt(value);
  // check if it needs formatting
  if (value.toString() === value.toLocaleString()) {
    // split decimals
    var parts = value.toString().split('.')
    // format whole numbers
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    // put them back together
    value = parts[1] ? parts.join('.') : parts[0];
  } else {
    value = value.toLocaleString();
  }
  return value;
};


$(function() {
  var element = document.getElementById("fi--wrapper");

  Tangle.formats.currency = function(value) {
    return "$" + putThousandsSeparators(value);
  };

  Tangle.formats.years = function(value) {
    var years = Math.floor(value),
        months = value - years;
    var monthsNumber = Math.floor((months*100) / ((1/12)*100));

    var result = "";

    // damn you language
    if(years > 0) {
      result = years + " year";
      if(years !== 1) { result = result + "s"; }
    }
    if(monthsNumber > 0) {
      if(years > 0) { result = result + " "; }
      result = result + monthsNumber + " month";
      if(months !== 1) { result = result + "s"; }
    }

    return result;
  }

  Tangle.formats.date = function (date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  };

  Tangle.formats.percentDecimal = function (value) {
    return "" + (100 * value).round(1) + "%";
  };

  Tangle.classes.BlockSwitch = {
    update: function (element, value) {
      element.getChildren().each( function (child, index) {
        child.style.display = (index != value) ? "none" : "block";
      });
    }
  };

  var tangle = new Tangle(element, {
    initialize: function () {
      this.clearCookies();
      if(Cookies.get('storeCookies') && false) {
        this.loadCookies();
      } else {
        this.saveableValues = this.allSaveableValues();
        // Intro
        this.exampleClick = false;
        this.storeCookies = false;

        // Savings Rate Calculator
        this.yearlyIncome = 55000;
        this.yearlySavings = 10000;
        this.phase = 1;
        // calculated:
        //   savingsRate
        //   yearsUntilFiOnlySR
        //   yearsUntilFi

        // Let's Talk More About You
        this.age = 30;
        this.networth = 100000;
        this.yearlySpending = 45000;
        this.retirementSpendingPercent = 8/9;
        // calculated:
        //   retirementYearlySpending
        //   yearsUntilFiWithNetworth
        // 	 fiPhase
        //     0 - Already fi
        //     1 - <10 years
        //     2 - <20 years
        //     3 - 20+ years
        //   fiAge
        //   fiStash

        this.marketGrowth = 0.07;

        // Withdrawal Rate
        this.wr = 0.04;

        // Reducing Spending
        this.spendingReductionPercent = 0.10;

        // You Earn Money In Retirement?
        this.eirIncomePercent = 0.10;

        this.monthlyIncome = 0;
        this.retirementMonthlyIncome = 0;
      }
    },
    update: function () {
      // Savings Rate Calculator
      this.savingsRate = this.yearlySavings / this.yearlyIncome;

      this.impliedYearlySpending = this.yearlyIncome - this.yearlySavings;
      this.impliedRetirementStashNeeded = this.calcStash(this.impliedYearlySpending);
      this.yearsUntilFiOnlySR = this.calcTimeUntilFi(this.yearlySavings, this.impliedRetirementStashNeeded, 0, this.marketGrowth)


      // Let's Talk More About You
      this.retirementYearlySpending = this.yearlySpending * this.retirementSpendingPercent;

      this.fiStash = this.calcStash(this.retirementYearlySpending);

      this.missingRetirementIncome = this.fiStash - this.networth;
      if(this.missingRetirementIncome < 0) {
        this.missingRetirementIncome = 0;
      }
      this.yearsUntilFi = this.calcTimeUntilFi(this.yearlySavings, this.fiStash, this.networth, this.marketGrowth)


      this.fiPhase = 0;
      this.fiAge = this.age + this.yearsUntilFi;

      // Reducing Spending
      this.impliedSpendingReductionYearlySavings = this.yearlySpending * this.spendingReductionPercent;
      this.impliedSpendingReductionYearlySavingsTotal = this.impliedSpendingReductionYearlySavings + this.yearlySavings;


      this.impliedSpendingReductionYearlySpending = this.yearlySpending - this.impliedSpendingReductionYearlySavings;

//
      this.spendingReductionStash = this.calcStash(this.retirementYearlySpending - (this.retirementYearlySpending * this.spendingReductionPercent));

      this.spendingReductionYearsUntilFi = this.calcTimeUntilFi(this.yearlySavings, this.spendingReductionStash, this.networth, this.marketGrowth)

      this.spendingReductionYearsEarlier = this.yearsUntilFi - this.spendingReductionYearsUntilFi;

      this.spendingReductionStashDifference = this.fiStash - this.spendingReductionStash;


      // Part 2: How is this enough?
      this.yearsOfFiNoInvestment = this.fiStash / this.retirementYearlySpending;
      this.fiTotalSpending = this.calcFiSpending();
      this.investmentYearsDifference = (this.fiTotalSpending - this.fiStash) / this.retirementYearlySpending


      this.earnInRetirement();
      // this.yearlySpending = this.yearlyIncome - this.newSavings;
        // this.ffr = ( this.savings / this.yearlySpending);
        // this.swr = 1 / ( this.savings / this.yearlySpending);
        // this.swrDollars = this.savings * this.gloablSWR;

        // this.retirementSavingsNeeded = this.retirementYearlySpending * this.gloablSWR;

      if(this.savingsRate > 0) {
        setTimeout(function() {
          highlightSr(this.savingsRate*100);
        }.bind(this), 50);
      }

      //
      if(this.storeCookies) {
        this.saveCookies();
      } else {
        this.clearCookies();
      }

    },

    // eir
    earnInRetirement: function() {
      this.eirIncomeAfterRetirement = this.eirIncomePercent * this.retirementYearlySpending;
      var earnInRetirementStashNeeded = this.calcStash(this.retirementYearlySpending - this.eirIncomeAfterRetirement);

      this.eirTimeUntilFi = this.calcTimeUntilFi(this.yearlySavings, earnInRetirementStashNeeded, this.networth, this.marketGrowth)
      this.eirTimeSooner = this.yearsUntilFi - this.eirTimeUntilFi;
    },


    // General Functions
    // From http://www.ultimatecalculators.com/future_value_savings_calculator.html
    calcTimeUntilFi: function(yearlySavings, stash, networth, marketGrowth) {
      var fv = yearlySavings + (stash * marketGrowth);
      var pv = yearlySavings + (networth * marketGrowth);

      var j = Math.log(fv/pv);
      var d = Math.log(1+marketGrowth);

      if(j < 0) { return 0; }
      return j/d;
    },
    calcStash: function(spending) {
      return spending * (100/(this.wr*100))
    },
    calcFiSpending: function() {
      var stash = this.fiStash,
          spending = 0,
          yearlySpending = this.retirementYearlySpending,
          growthRate = this.marketGrowth;

      if(this.fiAge > 100) { return 0; }

      for(var i=0; i<(100-this.fiAge); i++) {
        spending += yearlySpending;
        stash = stash + (stash * growthRate) - yearlySpending;
        yearlySpending = yearlySpending + (yearlySpending * 0.03);
        if(stash < 0) { break; }
      }

      return spending;
    },


    // Cookies related
    allSaveableValues: function() {
      return [
        'exampleClick',
        'storeCookies',
        'yearlyIncome',
        'yearlySavings',
        'phase',
        'age',
        'networth',
        'yearlySpending',
        'retirementSpendingPercent',
        'marketGrowth',
        'wr',
        'spendingReductionPercent',
        'eirIncomePercent',
        'monthlyIncome',
        'retirementMonthlyIncome',
        'eirIncomeAfterRetirement',
        'eirTimeUntilFi',
        'eirTimeSooner',
        'savingsRate',
        'impliedYearlySpending',
        'impliedRetirementStashNeeded',
        'yearsUntilFiOnlySR',
        'retirementYearlySpending',
        'fiStash',
        'missingRetirementIncome',
        'yearsUntilFi',
        'fiPhase',
        'fiAge',
        'impliedSpendingReductionYearlySavings',
        'impliedSpendingReductionYearlySavingsTotal',
        'impliedSpendingReductionYearlySpending',
        'spendingReductionStash',
        'spendingReductionYearsUntilFi',
        'spendingReductionYearsEarlier',
        'spendingReductionStashDifference',
        'yearsOfFiNoInvestment',
        'fiTotalSpending',
        'investmentYearsDifference'
      ];
    },
    loadCookies: function() {
      this.allSaveableValues().forEach(function(v) {
        this[v] = Cookies.get(v);
      }.bind(this));
    },
    saveCookies: function() {
      this.allSaveableValues().forEach(function(v) {
        console.log("saving cookie", v, this[v]);
        Cookies.set(v, this[v]);
      }.bind(this));
    },
    clearCookies: function() {
      this.allSaveableValues().forEach(function(v) {
        Cookies.remove(v);
      });
    }
  });

  function adjustInputSize($el) {
    var size = parseInt($el.attr('size'));
    var chars = $el.val().length + 1;
    if(chars !== size) {
      $el.attr('size', chars);
    }
  }
  $('#fi--wrapper').on('keydown', '.TKNumberFieldInput', function() {
    adjustInputSize($(this));
  });

  $.each($("#fi--wrapper .TKNumberFieldInput"), function(index, el) {
    adjustInputSize($(el));
  });

  $('.fi--reset').on('click', function(e) {
    e.preventDefault();
    // TODO: Reset
  });

  $('.tooltippable').tooltip();
});
