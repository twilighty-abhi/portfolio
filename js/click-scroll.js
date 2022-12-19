//jquery-click-scroll

var sectionArray = [1, 2, 3, 4, 5];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 90;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.navbar-nav .nav-item .nav-link').removeClass('active');
             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
             $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 90;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});






//Loading screen js for controlling the splash animation
//Change the values of delay to edit the time of animation and fade to make the transition smoother.
//dynamic animation duration for longer loading times.


$(window).on('load', function () {
    $(".loadding-page").delay(2000).fadeOut(400);
    $(".cssload-box-loading").on('click', function () {
        $(".cssload-box-loading").fadeOut(200);
    })
})
