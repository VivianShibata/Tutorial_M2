$(document).ready(function(){
    $('.next').on('click',function(){
        console.log('clicked');
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index',-10);
            nextImg.addClass('active').css('z-index',10);
        }
        else{
            currentImg.removeClass('active')
            $('#first').addClass('active')
        }
    });

    $('.prev').on('click',function(){
        console.log('clicked');
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active')
            prevImg.addClass('active')
        }
        else{
            currentImg.removeClass('active')
            $('#last').addClass('active')
        }
    });
    $('h1').mouseover(function () { 
        $(this).css('color', 'red');
    });
});

