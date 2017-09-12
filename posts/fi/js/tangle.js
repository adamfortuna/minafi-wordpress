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


Tangle.classes.FIAdjustableNumber = {
  initialize: function (element, options, tangle, variable) {
    this.element = element;
    this.tangle = tangle;
    this.variable = variable;

    this.min = (options.min !== undefined) ? parseFloat(options.min) : 0;
    this.max = (options.max !== undefined) ? parseFloat(options.max) : 1e100;
    this.step = (options.step !== undefined) ? parseFloat(options.step) : 1;

    this.initializeHover();
    this.initializeDrag();
    this.initializeSlider();
    this.initializeSliderFill();
  },

  // hover
  initializeHover: function () {
    this.isHovering = false;
    this.element.addEvent("mouseenter", (function () {
      this.isHovering = true;
      this.updateRolloverEffects();
    }).bind(this));
    this.element.addEvent("mouseleave", (function () {
      this.isHovering = false;
      this.updateRolloverEffects();
    }).bind(this));
  },

  updateRolloverEffects: function () {
    this.updateStyle();
    this.updateCursor();
    this.updateSlider();
  },

  isActive: function () {
    return this.isDragging || (this.isHovering && !this.isAnyAdjustableNumberDragging);
  },

  updateStyle: function () {
    if (this.isDragging) { this.element.addClass("FIAdjustableNumberDown"); }
    else { this.element.removeClass("FIAdjustableNumberDown"); }

    if (!this.isDragging && this.isActive()) { this.element.addClass("FIAdjustableNumberHover"); }
    else { this.element.removeClass("FIAdjustableNumberHover"); }
  },

  updateCursor: function () {
    var body = document.getElement("body");
    if (this.isActive()) { body.addClass("FICursorDragHorizontal"); }
    else { body.removeClass("FICursorDragHorizontal"); }
  },

  // Slider
  initializeSlider: function() {
    this.slider = (new Element("div", { "class": "FIAdjustableNumberSlider" })).inject(this.element, "top");
    this.slider.setStyle("display", "none");
  },
  initializeSliderFill: function() {
    this.sliderFill = (new Element("div", { "class": "FIAdjustableNumberSliderFill" })).inject(this.slider);
  },

  updateSlider: function() {
    var display = (this.isActive()) ? "block" : "none";
		this.slider.setStyle("display", display);

    var value = this.tangle.getValue(this.variable) - this.min;
    var diff = this.max - this.min;
    var percent = (value/diff);
    this.sliderFill.setStyle("width", (134 * percent).round());
	},


  // drag

  initializeDrag: function () {
    this.isDragging = false;
    new BVTouchable(this.element, this);
  },

  touchDidGoDown: function (touches) {
    this.valueAtMouseDown = this.tangle.getValue(this.variable);
    this.isDragging = true;
    this.isAnyAdjustableNumberDragging = true;
    this.updateRolloverEffects();
    this.updateStyle();
  },

  touchDidMove: function (touches) {
    var value = this.valueAtMouseDown + touches.translation.x / 5 * this.step;
    value = ((value / this.step).round() * this.step).limit(this.min, this.max);
    this.tangle.setValue(this.variable, value);
    this.updateSlider();
  },

  touchDidGoUp: function (touches) {
    this.isDragging = false;
    this.isAnyAdjustableNumberDragging = false;
    this.updateRolloverEffects();
    this.updateStyle();
    this.slider.setStyle("display", touches.wasTap ? "block" : "none");
  }
};
Tangle.formats.currency = function(value) {
  return "$" + putThousandsSeparators(value);
};

Tangle.formats.integer = function(value) {
  return parseInt(value);
};
Tangle.formats.yearsOnly = function(value) {
  if(value === 0) {
    return "0 years";
  }

  var years = Math.floor(value);
  var result = "";
  result = years + " year";
  if(years !== 1) { result = result + "s"; }

  return result;
}

Tangle.formats.years = function(value) {
  if(value === 0) {
    return "0 years";
  }

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

Tangle.formats.months = function(value) {
  if(value === 1) {
    return "1 month";
  } else {
    return value + " months";
  }
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

Tangle.classes.MultiToggle = {
  initialize: function (element, options, tangle, variable) {
    // this.element = element;

    element.addEvent("click", function (event) {
      var nextVal = tangle.getValue(variable) + 1;
      if(nextVal >= this.children.length) { nextVal = 0; }
      tangle.setValue(variable, nextVal);
    });

    // initiali hover
    // this.initializeHover();
    // this.initializeHelp();
  }
  // ,
  //
  // initializeHover: function () {
  //   this.isHovering = false;
  //   this.element.addEvent("mouseenter", (function () {
  //     this.isHovering = true;
  //     this.updateHelp();
  //   }).bind(this));
  //   this.element.addEvent("mouseleave", (function () {
  //     this.isHovering = false;
  //     this.updateHelp();
  //   }).bind(this));
  // },
  //
  // initializeHelp: function () {
  //   this.helpElement = (new Element("div", { "class": "TKAdjustableNumberHelp" })).inject(this.element, "top");
  //   this.helpElement.setStyle("display", "none");
  //   this.helpElement.set("text", "click");
  // },
  // updateHelp: function () {
  //   var size = this.element.getSize();
  //   var top = -size.y + 20;
  //   var left = Math.round(0.5 * (size.x - 20));
  //   var display = (this.isHovering) ? "block" : "none";
  //   this.helpElement.setStyles({ left:left, top:top, display:display });
  // }
};

Tangle.classes.BlockSwitch = {
  update: function (element, value) {
    element.getChildren().each(function (child, index) {
      child.style.display = (index != value) ? "none" : "block";
    });
  }
};
