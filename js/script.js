$(document) .ready(function(){
    $('menu') .click (function(){
        $(this) .toggleClass('fa-times');
        $('header') .toggleClass('toggler');
    });

    $(Window) .on ('scroll load',function(){

        $('menu') .removeClass('fa-times')
        $('header') .togglerClass('toggle')
   

    if($(Window) .scrollTop() > 0){
        $('.top').show();
    }else{
        $('.top') .hide();
    }


    
    if($(window) .scrollTop() > 0){
        $('.top') .hide();
        }else{
        $('.top').hide();
        }
    });


    $('a[href*="#"]').on ('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('heref')).offset().top,
       },

        500,
        'linear'
    );

    });
});
    

