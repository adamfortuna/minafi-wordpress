(function() {
  $ = jQuery;
  function toggleSearch(e) {
    var $searchInput = $('#searchInput');

    if($searchInput.val().length > 0) {
      // Do nothing and let the submission continue
    } else {
      e.preventDefault();
      var $this = $(this);

      // Not showing form
      if($('.search--link').closest('search--searching').length > 0) {
        $('#searchInput').blur();
      } else { // Showing form
        setTimeout(function() {
          $('#searchInput').focus();
        }, 1000);
      }

      var navItem = $this.closest('.nav-item--search');
      navItem.toggleClass('search--searching');
    }
  }


  $(function(){
    $('.search--link').on('click', toggleSearch);

    $('.email--signup').on('focus', function() {
      $('.email--toggle').slideDown();
    });
  });
})();
