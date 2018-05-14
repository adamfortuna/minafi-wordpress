(function() {
  $ = jQuery;

  $(function(){
    $('.email--signup').on('focus', function() {
      $('.email--toggle').slideDown();
    });
  });
})();
