$(document).ready(function(){

	 	$('.mainmenu > ul').addClass('mobile-menu');
	    $('.mainmenu > ul > li.hs-item-has-children ul').addClass('sub-menu');

	    if( $('.mobile-menu').length > 0 ){
	        $('.mobile-menu').before('<button type="button" class="ebiz-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>');
	    }
	    if( $('.mobile-menu li.hs-item-has-children').length > 0 ){
	        $('.mobile-menu li.hs-item-has-children > ul').before('<span class="mobile-toggle"></span>');
	    }
	    
	    $('.mainmenu .mobile-toggle').click(function() {
	        $(this).parent().siblings('.hs-item-has-children').find('span.mobile-toggle').removeClass('ebiz-subopen');
	        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
	        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
	        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
	        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('span.mobile-toggle').removeClass('ebiz-subopen');
	        $(this).toggleClass('ebiz-subopen');
	        return false;
	    });
	  
	    $(".ebiz-toggle").click(function(){
	        $(this).toggleClass("ebiz-menuopen");
	        $(".mobile-menu").slideToggle(500);
	        $('.mainmenu .mobile-toggle').parent().siblings('.hs-item-has-children').find('span.mobile-toggle').removeClass('ebiz-subopen');
	        $('.mainmenu .mobile-toggle').parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
	        $('.mainmenu .mobile-toggle').removeClass('ebiz-subopen');
	        $('.mainmenu .mobile-toggle').next('.hs-menu-children-wrapper').slideUp(250);
	    });

	    /* Stick Header */

	    $(window).scroll(function() {
			if ($(this).scrollTop() > 600){  
			    $('.header').addClass("sticky");
			}
			else{
				$('.header').removeClass("sticky");
			}
		});

		/* Header Change */
		$(".login-btn input").click(function(){
			$(".header-1, .header-2").addClass("intro");
		});
		
		$(".logout").click(function(){
			$(".header-1, .header-2").removeClass("intro");
		});

		$(".logout").click(function(){
			$(".become-header-1, .become-header-2").addClass("be-host");
		});

		$(".logout").click(function(){
			$(".header-login, .header-login-1").addClass("header-loguot");
		});
		$(".login-btn input").click(function(){
			$(".header-login, .header-login-1").removeClass("header-loguot");
		});

		$(".profile").click(function(){
			$(".profile-open").slideToggle(500);
		});



	/* Datepicker */
	$(function () {
        $('#wrapper .version strong').text('v' + $.fn.pignoseCalendar.version);
        function onSelectHandler(date, context) {

            var $element = context.element;
            var $calendar = context.calendar;
            var $box = $element.siblings('.box').show();
            var text = 'You selected date ';

            if (date[0] !== null) {
                text += date[0].format('YYYY-MM-DD');
            }
            if (date[0] !== null && date[1] !== null) {
                text += ' ~ ';
            }
            else if (date[0] === null && date[1] == null) {
                text += 'nothing';
            }
            if (date[1] !== null) {
                text += date[1].format('YYYY-MM-DD');
            }
            $box.text(text);
        }

        function onApplyHandler(date, context) {

            var $element = context.element;
            var $calendar = context.calendar;
            var $box = $element.siblings('.box').show();
            var text = 'You applied date ';

            if (date[0] !== null) {
                text += date[0].format('YYYY-MM-DD');
            }
            if (date[0] !== null && date[1] !== null) {
                text += ' ~ ';
            }
            else if (date[0] === null && date[1] == null) {
                text += 'nothing';
            }
            if (date[1] !== null) {
                text += date[1].format('YYYY-MM-DD');
            }
            $box.text(text);
        }

        // Multiple picker type Calendar
        $('.multi-select-calendar').pignoseCalendar({
            multiple: true,
            select: onSelectHandler
        });
    });
    
    $(".datepicker").click(function(){
    	$(".article").addClass("datepicker-2");
    });

    /* add number(user profile form) toggle */
		 $(".toggle-form").click(function(){
	        $(".add-ph-num").slideToggle();
	     });

	      $(".add-contact").click(function(){
	        $(".add-con-1").slideToggle();
	        $(".add-contact").addClass("add-contact-1");

	     });
	      $(".add-ship-add").click(function(){
	        $(".add-shipp").slideToggle();
	     });
	      $(".guest-profile").click(function(){
	        $(".add-new-guest").slideToggle();
	     });

    /* fancybox */
     $("a.fancybox").fancybox()

      /* Help show */
    $(".help-show").click(function(){
	        $(".help-section").addClass("help-toggle");

	     });
    $(".help-close").click(function(){
			$(".help-section").removeClass("help-toggle");
		});

		/* progress bar */
		$('.id-add-section').hide();
		  $('.id-add-section:first').show();
		  $('.tabs li:first').addClass('active-1');
		  $('.tabs li').click(function(event) {
		    $('.tabs li').removeClass('active-1');
		    $(this).addClass('active-1');
		    $('.id-add-section').hide();

		    var selectTab = $(this).find('a').attr("href");

		    $(selectTab).fadeIn();
		  });

		   $(".next-1").click(function(){
				$(".next-2").addClass("progress-1");
				$(".next-1").addClass("progress-0");
				
				
			});
		   $(".next-2").click(function(){
				$(".next-3").addClass("progress-1");
				$(".next-2").removeClass("progress-1");
				$(".next-2").removeClass("next-2");
			});
		   $(".next-3").click(function(){
				$(".next-4").addClass("progress-1");
				$(".next-3").removeClass("progress-1");
			});
		   $(".next-4").click(function(){
				$(".next-5").addClass("progress-1");
				$(".next-4").removeClass("progress-1");
			});

		   /* Help question show */
		    $(".brw-pop").click(function(){
			    $(".que-pop .que-slied").slideToggle("slow");
			  });
		    $(".brw-book").click(function(){
			    $(".que-book .que-slied").slideToggle("slow");
			  });
		    $(".brw-pay").click(function(){
			    $(".que-pay .que-slied").slideToggle("slow");
			  });
});

