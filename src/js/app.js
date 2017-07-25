function toggleSearch(e) {
  var $searchInput = $('#searchInput');

  if($searchInput.val().length > 0) {
    // Do nothing and let the submission continue
  } else {
    e.preventDefault();
    var $this = $(this);

    // Not showing form
    if($('.search--link').hasClass('nav-link')) {
      $('#searchInput').blur();
    } else { // Showing form
      setTimeout(function() {
        $('#searchInput').focus();
      }, 1000);
    }

    $this.closest('.nav-item').toggleClass('search--searching');
  }
}
