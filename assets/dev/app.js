(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function toggleSearch(e) {
  var $searchInput = $('#searchInput');

  if ($searchInput.val().length > 0) {
    // Do nothing and let the submission continue
  } else {
    e.preventDefault();
    var $this = $(this);

    // Not showing form
    if ($('.search--link').hasClass('nav-link')) {
      $('#searchInput').blur();
    } else {
      // Showing form
      setTimeout(function () {
        $('#searchInput').focus();
      }, 1000);
    }

    $this.closest('.nav-item').toggleClass('search--searching');
  }
}

$(function () {
  $('.search--link').on('click', toggleSearch);
});

},{}]},{},[1]);
