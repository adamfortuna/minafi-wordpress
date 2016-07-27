function toggleSearch(e) {
  e.preventDefault();

  var $this = $(this);

  $this.closest('.nav-item').toggleClass('search--searching');
}

$(function() {
  $('.search--link').on('click', toggleSearch);
});
