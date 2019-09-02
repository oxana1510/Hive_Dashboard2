/*Open menu */
var main = function() { 
    $('.icon-menu').click(function() { 
        $('.nav').animate({ 
            left: '0px'
        }, 200); 
        
        $('body').animate({
            left: '285px',
        }, 200);
    });


/* Close menu */
    $('.icon-close').click(function() { 
        $('.nav').animate({ 
            left: '-285px' 
        }, 200); 
        
    $('body').animate({ 
            left: '0px',
        }, 200);
    });
};

$(document).ready(main); 



//sub-menu

$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});




//Campaign click
$("#s").click(function (){
    $(".switch .btn-shadow").toggleClass("btn-shadow-hover");
});