$( document ).ready(function() {
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	/*check mobile menu*/
	if (window.matchMedia('(max-width: 768px)').matches) {
     	$(".menu_mobile").hide();
	    $(".arrow-up").hide();
	    $(".arrow-content").click(function(){
	            $(".top-left .menu_mobile").slideToggle(500);
	            $(this).find(".arrow-up, .arrow-down").toggle();
	    });
	}
    else{
        $(".menu_mobile").show();
        $(".arrow-content").hide();
    }
});