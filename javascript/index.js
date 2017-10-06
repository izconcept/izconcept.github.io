// function scrollTo(){
//     console.log('test');
//     // $('html,body').animate({
//     //         scrollTop: $("#"+id).offset().top},
//     //     'slow');
// }


$(document).ready(function() {
    //$('.parallelBG').parallax({imageSrc: 'media/bg6.jpg', naturalWidth: "1280", naturalHeight: "1280", speed: "0.1"});
    $(".menu-item").on('click', function() {
    	var scrollID = $(this).data('scroll')
    	$('html,body').animate({
            scrollTop: $("#"+scrollID).offset().top},
        'slow');
	    })
})