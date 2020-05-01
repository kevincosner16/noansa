/* --------------------------------------------------------------------------
 * Name          : Noansa Project
 *
 * File           : style.js
 * Version        : 1.0.0
 * Author         : Dzaki Fadhlurrohman
 * Author URI     : http://dzakifadh.github.io
 *
 * Dzakifadh. Copyright 2020. All Rights Reserved.
 * -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
[Table of Contents]

1. Smooth Scroll to ID jQuery
2. Smooth Scroll to Top
3. Service Carousel
4. Counter
5. Testimonial Desktop
6. Testimonial Mobile
7. Project mobile
8. Datepicker
9. Text Animation
9. Modal Custom
10. Hehe :)
11. Navbar On Scroll

-------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
1. Smooth Scroll to ID jQuery
-------------------------------------------------------------------------- */

$(document).ready(function () {
   $('.scrollTo').click(function () {
      $('html, body').animate({
         scrollTop: $($(this).attr('href')).offset().top - 120
      }, 800);
      return false;
   });
});

/* --------------------------------------------------------------------------
2. Smooth Scroll to Top
-------------------------------------------------------------------------- */

$(document).ready(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('.scrolltop:hidden').stop(true, true).fadeIn();
      } else {
         $('.scrolltop').stop(true, true).fadeOut();
      }
   });
   $(function () {
      $(".scroll").click(function () {
         $("html,body").animate({
            scrollTop: $(".thetop").offset().top - 120
         }, "1000");
         return false
      })
   })
});

/* --------------------------------------------------------------------------
3. Service Carousel
-------------------------------------------------------------------------- */

$('.service-carousel').owlCarousel({
   loop: false,
   dots: true,
   dotsData: false,
   nav: false,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 1
      }
   }
})

$('.owl-dot').click(function () {
   owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});

/* --------------------------------------------------------------------------
4. Counter
-------------------------------------------------------------------------- */

$(document).ready(function () {
   var x = 0;
   $(window).scroll(function () {
      var oTop = $('.counter-data-single').offset().top - window.innerHeight;
      if (x == 0 && $(window).scrollTop() > oTop) {
         $('.counter-value-single').each(function () {
            var $this = $(this),
               countTo = $this.attr('data-count');
            $({
               countNum: $this.text()
            }).animate({
               countNum: countTo
            }, {
               duration: 500,
               easing: 'swing',
               step: function () {
                  $this.text(Math.floor(this.countNum));
               },
               complete: function () {
                  $this.text(this.countNum);
               }
            });
         });
         a = 1;
      }
   });
});

$(document).ready(function () {
   var a = 0;
   $(window).scroll(function () {
      var oTop = $('.counter-data').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
         $('.counter-value').each(function () {
            var $this = $(this),
               countTo = $this.attr('data-count');
            $({
               countNum: $this.text()
            }).animate({
               countNum: countTo
            }, {
               duration: 2000,
               easing: 'swing',
               step: function () {
                  $this.text(Math.floor(this.countNum));
               },
               complete: function () {
                  $this.text(this.countNum += "+");
               }
            });
         });
         a = 1;
      }
   });
});

/* --------------------------------------------------------------------------
5. Testimonial Desktop
-------------------------------------------------------------------------- */
$(document).ready(function () {
   var bigimage = $("#big-desktop");
   var thumbs = $("#thumbs-desktop");
   //var totalslides = 10;
   var syncedSecondary = true;

   bigimage
      .owlCarousel({
         items: 1,
         slideSpeed: 2000,
         nav: true,
         // autoplay: true,
         dots: false,
         loop: true,
         responsiveRefreshRate: 200,
         navText: [
            '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
            '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
         ]
      })
      .on("changed.owl.carousel", syncPosition);

   thumbs
      .on("initialized.owl.carousel", function () {
         thumbs
            .find(".owl-item")
            .eq(0)
            .addClass("current");
      })
      .owlCarousel({
         items: 3,
         dots: false,
         nav: false,
         smartSpeed: 200,
         slideSpeed: 500,
         slideBy: 4,
         responsiveRefreshRate: 100
      })
      .on("changed.owl.carousel", syncPosition2);

   function syncPosition(el) {
      console.log(el);
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

      if (current < 0) {
         current = count;
      }
      if (current > count) {
         current = 0;
      }
      //to this
      thumbs
         .find(".owl-item")
         .removeClass("current")
         .eq(current)
         .addClass("current");
      var onscreen = thumbs.find(".owl-item.active").length - 1;
      console.log(onscreen)
      var start = thumbs
         .find(".owl-item.active")
         .first()
         .index();
      var end = thumbs
         .find(".owl-item.active")
         .last()
         .index();
      console.log(end);
      if (current > end) {
         thumbs.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
         thumbs.data("owl.carousel").to(current - onscreen, 100, true);
      }
   }

   function syncPosition2(el) {
      if (syncedSecondary) {
         var number = el.item.index;
         bigimage.data("owl.carousel").to(number, 100, true);
      }
   }

   thumbs.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      bigimage.data("owl.carousel").to(number, 300, true);
   });
});

/* --------------------------------------------------------------------------
6. Testimonial Mobile
-------------------------------------------------------------------------- */
$('.owl-testimonial').owlCarousel({
   loop: true,
   margin: 10,
   nav: true,
   dots: false,
   autoHeight: true,
   navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
   ],
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 1
      }
   }
})
/* --------------------------------------------------------------------------
7. Project mobile
-------------------------------------------------------------------------- */
$('.owl-project').owlCarousel({
   loop: true,
   margin: 10,
   nav: true,
   dots : false,
   autoHeight: true,
   navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
   ],
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 1
      }
   }
})

/* --------------------------------------------------------------------------
8. Datepicker
-------------------------------------------------------------------------- */
$(function () {
   $('#datepicker').datepicker({
      clearBtn: true,
      format: "dd-mm-yyyy"
   });
    $('select').selectpicker();
});
/* --------------------------------------------------------------------------
9. Text Animation
-------------------------------------------------------------------------- */
jQuery(document).ready(function ($) {
   //set animation timing
   var animationDelay = 2500,
      //loading bar effect
      barAnimationDelay = 3800,
      barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
      //letters effect
      lettersDelay = 50,
      //type effect
      typeLettersDelay = 150,
      selectionDuration = 500,
      typeAnimationDelay = selectionDuration + 800,
      //clip effect 
      revealDuration = 600,
      revealAnimationDelay = 1500;

   initHeadline();


   function initHeadline() {
      //insert <i> element for each letter of a changing word
      singleLetters($('.cd-headline.letters').find('b'));
      //initialise headline animation
      animateHeadline($('.cd-headline'));
   }

   function singleLetters($words) {
      $words.each(function () {
         var word = $(this),
            letters = word.text().split(''),
            selected = word.hasClass('is-visible');
         for (i in letters) {
            if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
            letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
         }
         var newLetters = letters.join('');
         word.html(newLetters).css('opacity', 1);
      });
   }

   function animateHeadline($headlines) {
      var duration = animationDelay;
      $headlines.each(function () {
         var headline = $(this);

         if (headline.hasClass('loading-bar')) {
            duration = barAnimationDelay;
            setTimeout(function () { headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
         } else if (headline.hasClass('clip')) {
            var spanWrapper = headline.find('.cd-words-wrapper'),
               newWidth = spanWrapper.width() + 10
            spanWrapper.css('width', newWidth);
         } else if (!headline.hasClass('type')) {
            //assign to .cd-words-wrapper the width of its longest word
            var words = headline.find('.cd-words-wrapper b'),
               width = 0;
            words.each(function () {
               var wordWidth = $(this).width();
               if (wordWidth > width) width = wordWidth;
            });
            headline.find('.cd-words-wrapper').css('width', width);
         };

         //trigger animation
         setTimeout(function () { hideWord(headline.find('.is-visible').eq(0)) }, duration);
      });
   }

   function hideWord($word) {
      var nextWord = takeNext($word);

      if ($word.parents('.cd-headline').hasClass('type')) {
         var parentSpan = $word.parent('.cd-words-wrapper');
         parentSpan.addClass('selected').removeClass('waiting');
         setTimeout(function () {
            parentSpan.removeClass('selected');
            $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
         }, selectionDuration);
         setTimeout(function () { showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

      } else if ($word.parents('.cd-headline').hasClass('letters')) {
         var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
         hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
         showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

      } else if ($word.parents('.cd-headline').hasClass('clip')) {
         $word.parents('.cd-words-wrapper').animate({ width: '2px' }, revealDuration, function () {
            switchWord($word, nextWord);
            showWord(nextWord);
         });

      } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
         $word.parents('.cd-words-wrapper').removeClass('is-loading');
         switchWord($word, nextWord);
         setTimeout(function () { hideWord(nextWord) }, barAnimationDelay);
         setTimeout(function () { $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

      } else {
         switchWord($word, nextWord);
         setTimeout(function () { hideWord(nextWord) }, animationDelay);
      }
   }

   function showWord($word, $duration) {
      if ($word.parents('.cd-headline').hasClass('type')) {
         showLetter($word.find('i').eq(0), $word, false, $duration);
         $word.addClass('is-visible').removeClass('is-hidden');

      } else if ($word.parents('.cd-headline').hasClass('clip')) {
         $word.parents('.cd-words-wrapper').animate({ 'width': $word.width() + 10 }, revealDuration, function () {
            setTimeout(function () { hideWord($word) }, revealAnimationDelay);
         });
      }
   }

   function hideLetter($letter, $word, $bool, $duration) {
      $letter.removeClass('in').addClass('out');

      if (!$letter.is(':last-child')) {
         setTimeout(function () { hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
      } else if ($bool) {
         setTimeout(function () { hideWord(takeNext($word)) }, animationDelay);
      }

      if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
         var nextWord = takeNext($word);
         switchWord($word, nextWord);
      }
   }

   function showLetter($letter, $word, $bool, $duration) {
      $letter.addClass('in').removeClass('out');

      if (!$letter.is(':last-child')) {
         setTimeout(function () { showLetter($letter.next(), $word, $bool, $duration); }, $duration);
      } else {
         if ($word.parents('.cd-headline').hasClass('type')) { setTimeout(function () { $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200); }
         if (!$bool) { setTimeout(function () { hideWord($word) }, animationDelay) }
      }
   }

   function takeNext($word) {
      return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
   }

   function takePrev($word) {
      return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
   }

   function switchWord($oldWord, $newWord) {
      $oldWord.removeClass('is-visible').addClass('is-hidden');
      $newWord.removeClass('is-hidden').addClass('is-visible');
   }
});

/* --------------------------------------------------------------------------
9. Modal Custom
-------------------------------------------------------------------------- */

$(document).ready(function () {
   $("#close-modal").click(function () {
      $('.modal-dialog').addClass('fadeOutUpBig');
      $('.modal-dialog').removeClass('fadeInDownBig');
   })

   $("#say-hello-desktop").click(function () {
      $('.modal-dialog').addClass('fadeInDownBig');
      $('.modal-dialog').removeClass('fadeOutUpBig');
   })
   
   $("#nav-desktop").click(function () {
      $('.modal-dialog').addClass('fadeInDownBig');
      $('.modal-dialog').removeClass('fadeOutUpBig');
   })
});

/* --------------------------------------------------------------------------
10. Hehe :)
-------------------------------------------------------------------------- */
$("body").bind("Mau ngapain kak? :)", function(e) {
    e.preventDefault()
}), window.onload = function() {
    function e(e) {
        return e.stopPropagation ? e.stopPropagation() : window.event && (window.event.cancelBubble = !0), e.preventDefault(), !1
    }
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault()
    }, !1), document.addEventListener("keydown", function(t) {
        t.ctrlKey && t.shiftKey && 73 == t.keyCode && e(t), t.ctrlKey && t.shiftKey && 74 == t.keyCode && e(t), 83 == t.keyCode && (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) && e(t), t.ctrlKey && 85 == t.keyCode && e(t), 123 == event.keyCode && e(t)
    }, !1)
};

/* --------------------------------------------------------------------------
11. Navbar On Scroll
-------------------------------------------------------------------------- */
$(document).ready(function () {
    $(window).on('scroll', function () {
       var scroll = $(window).scrollTop();
       if (scroll < 100) {
          $(".navbar").removeClass("sticky-menu");
       } else {
          $(".navbar").addClass("sticky-menu");
       }
    });
    
    if ($(".navbar").height() < 100) {
        $(".navbar-toggler").click(function () {
            if ($(this).hasClass('collapsed')) {
               $('.navbar').addClass('solid');
            }else {
               if ($(".navbar").height() > 100) {
                  $('.navbar').removeClass('solid');
               }
            }
        })
    }
});

/* --------------------------------------------------------------------------
11. Text Transition
-------------------------------------------------------------------------- */
$(document).ready(function () {
   AOS.init({
	duration: 1000,
	offset: -50,
	delay: 0,
	once: true,
    }) 
});

/* --------------------------------------------------------------------------
12. Loading
-------------------------------------------------------------------------- */
$(document).ready(function () {
   $(window).on('load', function() { 
     $('#status').fadeOut();
     $('#preloader').delay(500).fadeOut('slow');
     $('body').delay(500);
  })
});