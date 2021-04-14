
 $(document).ready(function() {
    $('.home-banner-slider .owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      animateOut: 'fadeOut',
      autoplay:1500,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },
        1000: {
          items: 1,
          nav: true,
          loop: true
        }
      }
    })
    $('.client-slider .owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      animateOut: 'fadeOut',
      autoplay:1500,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },
        1000: {
          items: 1,
          nav: true,
          loop: true
        }
      }
    })
  })



  $(document).ready(function() {
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
});



$(document).ready(function() {
	

	$('.accordionButton:first').addClass('on');
	$('.accordionButton').click(function() {
		$('.accordionButton').removeClass('on');
	 	$('.accordionContent').slideUp('normal');
		if($(this).next().is(':hidden') == true) {
			$(this).addClass('on');
			$(this).next().slideDown('normal');
		 } 
	 });

});
	
