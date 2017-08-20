$(function() {
  var element = document.getElementById("fi--wrapper");

  var defaults = {
    exampleClick: false,
    storeCookies: true,
    yearlyIncome: 50000,
    yearlySavings: 10000,
    phase: 1,
    age: 30,
    gender: 0,
    networth: 5000,
    yearlySpending: 40000,
    retirementSpendingPercent: 0.8,
    marketGrowth: 0.07,
    wr: 0.04,
    spendingReductionPercent: 0.10,
    eirIncomePercent: 0.10,
    monthlyIncome: 0,
    retirementMonthlyIncome: 0,
    payIncreasePercent: 0.02,
    inflationRate: 0.03
  };

  var tangle = new Tangle(element, {
    initialize: function () {
      if(this.cookie()['storeCookies']) {
        this.loadCookies();
      } else {
        this.reset();
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
      this.yearsUntilFi = this.calcTimeUntilFi(this.yearlySavings, this.fiStash, this.networth, this.marketGrowth) || 0;


      this.fiPhase = this.calcFiPhase();
      this.fiAge = this.age + this.yearsUntilFi;

      // Reducing Spending
      this.impliedSpendingReductionYearlySavings = this.yearlySpending * this.spendingReductionPercent;
      this.impliedSpendingReductionYearlySavingsTotal = this.impliedSpendingReductionYearlySavings + this.yearlySavings;
      this.impliedSpendingReductionYearlySpending = this.retirementYearlySpending - this.impliedSpendingReductionYearlySavings;
      this.spendingReductionStash = this.calcStash(this.impliedSpendingReductionYearlySpending);
      this.spendingReductionYearsUntilFi = this.calcTimeUntilFi(this.impliedSpendingReductionYearlySavingsTotal, this.spendingReductionStash, this.networth, this.marketGrowth);




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
      this.earningsIncrease();
      this.allReductionsSooner();

      // Inflation
      this.neededMarketRate = this.inflationRate + this.wr;
      this.retirementYearlySpendingWithInflation = this.calcCompoundInterest(this.inflationRate, this.retirementYearlySpending, this.yearsUntilFi);
      this.retirementYear = this.yearsUntilFi + (new Date()).getFullYear();

      if(this.savingsRate > 0) {
        setTimeout(function() {
          highlightSr(this.savingsRate, this.marketGrowth, this.wr);
          if(this.storeCookies) {
            this.updateFirebase();
          }
        }.bind(this), 50);
      }
      if(this.storeCookies) {
        this.saveCookies();
        this.updateFirebase();
      } else {
        this.clearCookies();
        this.deleteFirebase();
      }
    },

    // eir
    earnInRetirement: function() {
      this.eirIncomeAfterRetirement = this.eirIncomePercent * this.retirementYearlySpending;
      this.earnInRetirementStashNeeded = this.calcStash(this.retirementYearlySpending - this.eirIncomeAfterRetirement);

      this.eirTimeUntilFi = this.calcTimeUntilFi(this.yearlySavings, this.earnInRetirementStashNeeded, this.networth, this.marketGrowth)
      this.eirTimeSooner = this.yearsUntilFi - this.eirTimeUntilFi;
    },

    // Earnings increase ~2% a year and you save it
    earningsIncrease: function() {
      this.payIncreaseTimeUntilFi = this.calcTimeUntilFi(this.yearlySavings, this.fiStash, this.networth, this.marketGrowth+this.payIncreasePercent);
      this.payIncreaseSooner = this.yearsUntilFi - this.payIncreaseTimeUntilFi;
    },

    allReductionsSooner: function() {
      var combinedStashNeeded = this.calcStash(this.retirementYearlySpending - this.eirIncomeAfterRetirement - this.impliedSpendingReductionYearlySavings);
      this.allSoonerYears = this.calcTimeUntilFi(this.impliedSpendingReductionYearlySavingsTotal, combinedStashNeeded, this.networth, this.marketGrowth);
      this.allSoonerYearsEarly = this.yearsUntilFi - this.allSoonerYears;
      this.allSoonerPercent = this.allSoonerYearsEarly / this.yearsUntilFi;
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

    calcCompoundInterest: function(rate, amount, years) {
      var finance = new Finance();
      return finance.FV(rate*100, amount, years);
    },

    calcFiPhase: function() {
      if(this.yearsUntilFi == 0) {
        return 0;
      } else if(this.yearsUntilFi < 10) {
        return 1;
      } else if(this.yearsUntilFi < 20) {
        return 2;
      } else {
        return 3;
      }
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
        'payIncreasePercent',
        'inflationRate',
        'gender'
      ];
    },
    state: function() {
      var s = {};
      this.allSaveableValues().forEach(function(v) {
        s[v] = this[v];
      }.bind(this));
      s['createdAt'] = s['createdAt'] || new Date();
      s['updatedAt'] = new Date();

      // Move over default properties
      // This is for when new properties are added
      for(var key in defaults) {
        s[key] = s[key] || defaults[key];
      }

      return s;
    },
    reset: function() {
      this.allSaveableValues().forEach(function(v) {
        this[v] = defaults[v];
      }.bind(this));
      return true;
    },
    cookie: function() {
      try {
        var stateJson = Cookies.get("fi-post");
        return JSON.parse(stateJson);
      } catch(e) {
        return {};
      }
    },
    loadCookies: function() {
      try {
        var cookieState = this.cookie();
        for(var property in cookieState) {
          this[property] = cookieState[property];
        }
      } catch(e) {
        this.reset();
      }
    },
    saveCookies: function() {
        var cookie = JSON.stringify(this.state());
      Cookies.set("fi-post", cookie);
    },
    clearCookies: function() {
      Cookies.remove("fi-post");
    },

    env: function() {
      return (window.location.origin.indexOf("minafi") !== -1) ? "production" : "development";
    },
    calculatedValues: function() {
      return [
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
        'investmentYearsDifference',
        'neededMarketRate',
        'retirementYearlySpendingWithInflation',
        'retirementYear',
        'eirIncomeAfterRetirement',
        'earnInRetirementStashNeeded',
        'eirTimeUntilFi',
        'eirTimeSooner',
        'payIncreaseTimeUntilFi',
        'payIncreaseSooner',
        'allSoonerYears',
        'allSoonerYearsEarly',
        'allSoonerPercent'
      ];
    },
    resultState: function() {
      var s = this.state();
      this.calculatedValues().forEach(function(key) {
        if(typeof(this[key]) !== undefined) {
          s[key] = this[key];
        }
      }.bind(this));
      return s;
    },
    // Number of values they changed
    changedValues: function(result) {
      var changedItems = []
      this.allSaveableValues().forEach(function(key) {
        if((key !== "uid") && (this[key] != defaults[key])) {
          changedItems.push(key);
        }
      }.bind(this));

      return changedItems;
    },
    updateFirebase: function() {
      if(!window.user) { return false; }

      if(!this.database) {
        this.database = firebase.database();
      }
      var result = this.resultState(),
          changedItems = this.changedValues(result);
      if(changedItems.length >= 2) {
        this.database.ref("fipost/"+this.env()+'/'+window.user.uid)
                .set(result);
      }
    },
    deleteFirebase: function() {
      this.database.ref("fipost/"+this.env()+'/'+window.user.uid).remove();
    }
  });
});
