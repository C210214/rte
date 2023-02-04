$(document).ready(function(){
    $("h1, p").delay("1000").fadeIn();
    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
    
        $('a#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    });

    var accordion = (function(){
  
        var $accordion = $('.js-accordion');
        var $accordion_header = $accordion.find('.js-accordion-header');
        var $accordion_item = $('.js-accordion-item');
       
        // default settings 
        var settings = {
          // animation speed
          speed: 400,
          
          // close all other accordion items if true
          oneOpen: false
        };
          
        return {
          // pass configurable object literal
          init: function($settings) {
            $accordion_header.on('click', function() {
              accordion.toggle($(this));
            });
            
            $.extend(settings, $settings); 
            
            // ensure only one accordion is active if oneOpen is true
            if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
              $('.js-accordion-item.active:not(:first)').removeClass('active');
            }
          },
          toggle: function($this) {
                  
            if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
              $this.closest('.js-accordion')
                     .find('> .js-accordion-item') 
                     .removeClass('active')
                     .find('.js-accordion-body')
                     .slideUp()
            }
            
            // show/hide the clicked accordion item
            $this.closest('.js-accordion-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
          }
        }
      })();
      
      $(document).ready(function(){
        accordion.init({ speed: 300, oneOpen: true });
      });


      var navBar = document.getElementById("navBar");
      window.onscroll = function() {
        if (window.scrollY > 22) {
          navBar.classList.add("scrolled");
        } else {
          navBar.classList.remove("scrolled");
        }
      };


      