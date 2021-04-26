$('#header_animation_h1').css('visibility','hidden');
$(window).scroll(function(){
    var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$('#header_animation_h1').each(function(){
    var targetPosition = $(this).offset().top;
    if(topWindow > targetPosition - windowHeight/1.6){
    $(this).addClass("fadeInDown");
    }
});
});
$('#header_animation_h2').css('visibility','hidden');
$(window).scroll(function(){
    var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$('#header_animation_h2').each(function(){
    var targetPosition = $(this).offset().top;
    if(topWindow > targetPosition - windowHeight/1.6){
    $(this).addClass("fadeInDown");
    }
});
});
