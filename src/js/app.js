(function() {
  $ = jQuery;

  var lastScrollTop = 0,
      mainContentEl = $(".article--main-content"),
      tocEl = $(".article--toc"),
      win = $(window);

  function fixXsidebar() {
    var s = $(".article--main-content > p");
    $(".article--toc").css("left", (s[0].offsetLeft - (220*2))+"px");
  }
  function fixSidebar() {
    var top = mainContentEl.offset().top,
        bottom = top + mainContentEl.height(),
        height = win.height(),
        tocHeight = tocEl.outerHeight(true);

    if((window.pageYOffset) > (bottom-tocHeight)) {
      $(".article--toc").addClass("past").removeClass("active");
    }  else if(window.pageYOffset >= top) {
      $(".article--toc").addClass("active").removeClass("past");
    } else {
      $(".article--toc").removeClass("active").removeClass("past");
    }
  }

  $(function(){
    $('.email--signup').on('focus', function() {
      $('.email--toggle').slideDown();
    });

    var gdprConsent = Cookies.get("gdpr-consent");
    var accepts = ["Ok, Thanks"];
    if(accepts.indexOf(gdprConsent) == -1) {
      $("body").append("<div class='gdpr-consent-form fixed-top alert alert-success' style='display: none;z-index:100343;'><p class='container text-center mb-0'><small>You probably don't care, but <a href='/privacy-policy'>Minafi uses cookies</a>.</small> <button class='gdpr-consent-button btn-primary btn-sm ml-3'>Ok, Thanks</button></p></div>");

      setTimeout(function() {
        $(".gdpr-consent-form").slideDown();
      }, 1000);
    }

    $("body").on("click", ".gdpr-consent-button", function() {
      var compliance = $(this).text();
      Cookies.set("gdpr-consent", compliance);
      if(accepts.indexOf(compliance) !== -1) {
        Cookies.set("gdpr-consent-time", +(new Date()));
        $(".gdpr-consent-form").slideUp();
      }
    });

    if($('.article--toc-list').length > 0) {
      $.each($('.article--main-content h2'), function(i, el) {
        var $el = $(el),
            id = $el.text().replace(/\s/g, "-").toLowerCase();
        $el.attr('id', id);
        $('.article--toc-list').append('<li class="nav-item my-1"><a class="nav-link" href="#'+id+'">'+$el.text()+'</a></li>');
      });

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
