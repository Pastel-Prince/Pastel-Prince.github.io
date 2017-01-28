
$(document).ready(function(){
    /* Makes the Quote show up */
    $('div.hidden').fadeIn(1500).removeClass('hidden');

    /* Makes the navBar change color */
    $('li.navlist').mouseenter(function(){
        $(this).css('background-color', 'rgba(254,255,234,0.9)');
    })
    $('li.navlist').mouseleave(function(){
        $(this).css('background-color', 'rgba(254,255,234,0.1)');
    })

    $("img").hover(function(){
        $(this).animate({width: '370px', height: '520px'});
    }, function(){
        $(this).animate({width: '350px', height: '500px'});
        $("#panel").slideToggle("slow");
    });
})


