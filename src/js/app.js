(function() {
  $ = jQuery;

  var mainContentEl = $(".article--main-content"),
      win = $(window);

  function fixXsidebar() {
    var s = $(".article--main-content > p"),
        contentStart = s[0].offsetLeft - 100;
    if(win.width() > 1340) {
      var offset = (contentStart / 2) - 110;

    } else {
      var offset = (s[0].offsetLeft - 220);
    }

    $(".article--toc").css("left", offset+"px");
  }
  function fixSidebar() {
    var top = mainContentEl.offset().top;

    if(window.pageYOffset >= top) {
      $(".article--toc").addClass("active").removeClass("past");
    } else {
      $(".article--toc").removeClass("active").removeClass("past");
    }
  }

  $(function(){
    $('.email--signup').on('focus', function() {
      $('.email--toggle').slideDown();
    });


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
        debugger
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

    $('.comment-form').on('submit', subscribeToDrip);


    // Table of contents
    if($('.article--toc-list').length > 0) {
      $.each($('.article--main-content h2'), function(i, el) {
        var $el = $(el),
            id = $el.text().replace(/\s/g, "-").toLowerCase();
        $el.attr('id', id);
        $('.article--toc-list').append('<li class="nav-item my-1"><a class="nav-link" href="#'+id+'">'+$el.text()+'</a></li>');
      });

      var comments = $(".comments--current h2").text().trim();
      $('.article--toc-list').append('<li class="nav-item my-1"><a class="nav-link" href="#comments">'+comments+'</a></li>');

      $('.article--toc-list').append('<li class="nav-item my-1"><a class="nav-link" href="#">Top <i class="fa fa-angle-double-up"></i></a></li>');

      setTimeout(function() {
        $('body').scrollspy({ target: '#articleSidebar' });
        $('[data-spy="scroll"]').each(function() {
          var $spy = $(this).scrollspy('refresh');
        });

        fixSidebar();
        fixXsidebar();
        win.on("scroll", fixSidebar);
        win.on("resize", fixXsidebar)
      }, 1000);
    }
  });
})();
