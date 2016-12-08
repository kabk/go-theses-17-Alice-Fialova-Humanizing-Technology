$(document).ready(function(){

	$('.video-container').each(function() {
		var height = $(this).height();

		$(this).find('.side-bar').css({
			width: height,
			top: height - 10
		});

	});

    $('.video-container').on({
        mouseenter: function(){
            $(this).find('.video-cover').hide();
        },
        mouseleave: function(){
            $(this).find('.video-cover').show();
        }
    })



});
