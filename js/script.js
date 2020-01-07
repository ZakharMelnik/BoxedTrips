$(document).ready(function() {

	$('.support-slider').owlCarousel({
	    loop:true,
	    items:3,
	    margin: 30,
	    nav: true,
	    autoplay: true,
	    autoplaySpeed: 1000,
	    responsive:{
	        0:{
	        	items:1,
	        	nav: true,
	        	dots: false
	        },
	        768:{
	        	items:2,
	        	nav: true,
	        	dots: false
	        },
	        1920:{
	        	items:3,
	        	nav: true
	        }
	    }
	})

	$('.banner-slider').owlCarousel({
	    loop:true,
	    items:1,
	    autoplay: true,
	    autoplaySpeed: 1000,
	    animateOut: 'fadeOut'
	})


	/*Header menu*/

	$(".header__menu img").click(function(e){
		e.preventDefault();
		$("#menu").toggleClass("show");
	});

	$("#menu a").click(function(){

		setTimeout(function() {
			$(".header__menu img").click();
		}, 200);
		
	});

	$(document).on('click','.milk-shadow',function(){
		$(".header__menu img").click();
	});

});

$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > 100){
       // код для прокрутки вниз
       $('header').addClass('active');
   } else {
      // код для прокрутки вверх
      $('header').removeClass('active');
   }
   lastScrollTop = st;
});
