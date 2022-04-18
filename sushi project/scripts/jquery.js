$(document).ready(function() {
    var waypoint = new Waypoint({
        element: document.getElementById('restaurant-description'),
        handler: function(direction) {
          if(direction == "down") {
            $("nav").attr("id", "sticky-nav");
          } else {
            $("nav").removeAttr("id");
          }
        },
        offset: 60 
      });

      // button clicks 


      $(".button-order").click(function() {
        $("html, body").animate({scrollTop: $("#how-to-order-section").offset().top}, 1000);
      });
      
      $(".button-more").click(function() {
        $("html, body").animate({scrollTop: $("#restaurant-description").offset().top}, 1000);
      });

      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                };
              });
            }
          }
      });

    // animation 
    
    var waypoint = new Waypoint({
    element: document.getElementById('restaurant-description'),
    handler: function(direction) {
      $(".anim1").addClass("animate__animated animate__fadeInUp");
    },
    offset: 250 
    });

    var waypoint = new Waypoint({
      element: document.getElementById('cities-section'),
      handler: function(direction) {
        $(".anim2").addClass("animate__animated animate__fadeInUp");
      },
      offset: 250 
      });

    var waypoint = new Waypoint({
      element: document.getElementById('how-to-order-section'),
      handler: function(direction) {
        $(".anim3").addClass("animate__animated animate__fadeInUp");
      },
      offset: 250 
      });

    var waypoint = new Waypoint({
      element: document.getElementById('header-text'),
      handler: function(direction) {
        if(direction == "up") {
          $(".anim4").addClass("animate__animated animate__shakeX");
        } else {
          $(".anim4").removeClass("animate__animated animate__shakeX");
        }
      },
      offset: 60 
    });

    // mobile nav 

    $(".mobile-nav-icon").click(function() {
      
      var icon = $(".mobile-nav-icon i");

      if(icon.hasClass("ion-md-menu")) {
        icon.removeClass("ion-md-menu");
        icon.addClass("ion-md-close");
        $("nav").animate({height: "300px"}, 300);
      } else {
        icon.removeClass("ion-md-close");
        icon.addClass("ion-md-menu");
        $("nav").animate({height: "70px"}, 300);
      }

      $("#main-nav").slideToggle(300);
    });
})
