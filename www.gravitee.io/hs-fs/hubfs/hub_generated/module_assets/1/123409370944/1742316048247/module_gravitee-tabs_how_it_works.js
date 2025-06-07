  var module_123409370944 = (function() {
    $(document).ready(function () {
  
  
  var distance = $('#sticky-menu').offset().top - 80,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
      // Your div has reached the top
      $('#sticky-menu').addClass('stuck');
    }
  
  if ( $window.scrollTop() <= distance ) {
      // Your div has reache d the top
      $('#sticky-menu').removeClass('stuck');
    }
});

    $(document).on("scroll", onScroll);
    
    //smoothscroll
    /*$('.pillar-menu .floatingItem .itemTitle').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.itemTitle').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');2

        $('html, body').animate({
            'scrollTop': target.offset().top-140
        }, 'linear', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
      
    });*/

});

function onScroll(event){
    //var scrollPos = $(document).scrollTop();
   /* $('.target').each(function () {
      if($(window).scrollTop() >= $(this).offset().top-150) {
            var id = $(this).attr('id');
            $('.floatingItem .itemTitle').removeClass('active');
            $('.floatingItem .itemTitle[href=#'+ id +']').addClass('active');
        }
    });*/
}



\
  })();
