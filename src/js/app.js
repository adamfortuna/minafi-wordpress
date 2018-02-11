(function() {
  $ = jQuery;
  // var toggleSlim = $("#header").hasClass("container-slim");

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

      var navItem = $this.closest('.nav-item');
      navItem.toggleClass('search--searching');
      // if(toggleSlim) {
      //   $("#header").toggleClass("container-slim");
      // }

      // if(navItem.hasClass('search--searching')) {
      //
      // } else {
      //   $("#header").removeClass("container-slim");
      // }
    }
  }

  function subscribeToDrip(e)  {
    var form = $('.comment-form'),
        subscriptionFields = form.find("input[name='subscription[]']:checked");
    if(subscriptionFields.length > 0) {
      var email = form.find('#email').val(),
          name = form.find('#author').val(),
          url = form.find('#url').val(),
          subscriptions = $.map(subscriptionFields, function(i) {
            return $(i).val();
          }).join(",");
      $.ajax({
        type: "POST",
        url: 'https://www.getdrip.com/forms/194467518/submissions',
        data: {
          fields: {
            email: email,
            name: name,
            url: url,
            subscription: subscriptions
          }
        }
      });
    }
  }


  $(function(){
    $('.search--link').on('click', toggleSearch);

    $('.email--signup').on('focus', function() {
      $('.email--toggle').slideDown();
    });


    $('.comment-form').on('submit', subscribeToDrip);
  });
})();
