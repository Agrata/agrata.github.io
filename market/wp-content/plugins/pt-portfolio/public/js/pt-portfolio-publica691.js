jQuery.noConflict();
jQuery( document ).ready(function( $ ) {
 
    var $container = $('#portfolio-list');
 
    // create a clone that will be used for measuring container width
    $containerProxy = $container.clone().empty().css({ visibility: 'hidden' });   
 
    $container.after( $containerProxy );  
 
    // get the first item to use for measuring columnWidth
    var $item = $container.find('.portfolio-item').eq(0);

 
    // filter items when filter link is clicked
    $('#filters a').click(function(){
        
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector, animationEngine : "css" });
        $('#filters a.active').removeClass('active');
        $(this).addClass('active');
        return false;
 
    });
 
} );