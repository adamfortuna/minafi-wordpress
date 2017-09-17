$(function() {
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

  $('.tooltippable').tooltip();



  if (!window.sr) {
    window.sr = ScrollReveal();
  }

  sr.reveal('.fi--profile-image', {
    origin: 'left', distance: '0px', duration: 1000
  });

  sr.reveal('.fi--animate-from-right', {
    origin: 'left', distance: '0px', duration: 1000
  });

  sr.reveal('.fi--animate-from-left', {
    origin: 'right', distance: '0px', duration: 1000
  });




  $('.profile-toggle').on('click', function(e) {
    var name = $(e.target).closest("a").attr('href').replace("#", ""),
        a = $("a[name='"+name+"']");

    if($(e.target).text().indexOf("Read more") !== -1) {
      $('html, body').animate({
          scrollTop: a.offset().top
      }, 400);
    } else {
      e.preventDefault();
    }
    $(this).closest('.fi--profile')
           .toggleClass('fi--profile-collapsed')
           .find('.profile-toggle--more')
           .fadeToggle();
  });

  $(".pdf--download-link").on('click', function(e) {
    e.preventDefault();
    $(e.target).closest(".card-footer").find('.pdf--subscribe').slideToggle();
  });


  // Create the fi age Graph
  window.fiGraph = new FiGraph('.graph--fi-date');
  window.fiGraph.setup();



  $('.fi-share-twitter').on('click', function() {
    var message = $(this).closest('.card').find('.fi-share--message').text();
    $(this).attr('href', "https://twitter.com/share?url=https://minafi.com/interactive-guide-early-retirement-financial-independence/&text=" + message);
  });

  $('.fi-share-fb').on('click', function() {
    var message = $(this).closest('.card').find('.fi-share--message').text();
    var url = "https://www.facebook.com/sharer/sharer.php?u=https://minafi.com/interactive-guide-early-retirement-financial-independence/&display=popup&ref=plugin&src=share_button&quote="+message;
    $(this).attr('href', url);
  });
});
