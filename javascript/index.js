function scrollTo(id){
    console.log(id);
    $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
        'slow');
}


$(document).ready(function() {
    //$('.parallelBG').parallax({imageSrc: 'media/bg6.jpg', naturalWidth: "1280", naturalHeight: "1280", speed: "0.1"});
})