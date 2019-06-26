$(document).ready(function() {

    $('.nav-point').on('click', function() {
        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });



    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        $('#box3').css({
            "transform": "translate(0px, " + wScroll/1.2 + "px)" 
        });
        $('#box2').css({
            "transform": "translate(0px, " + wScroll/2 + "px)" 
        });
    });

    AOS.init();

    if($(window).innerWidth() < 1000) {
        $('.menubar-nav').hide();
        $('.nav-point').click(function() {
          $('.menubar-nav').hide(500);
          $('.lines-close').hide(500);
          $('.lines').show(500);
          $('.deskripsi-par').show(500);
    });
    }

    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('nav').addClass('bg-white');
            $('.t-white').addClass('t-black');
            $('.link-nav').addClass('bg-mycolor');
        }
        if($(this).scrollTop() < 1 ) {
            $('nav').removeClass('bg-white');
            $('.t-white').removeClass('t-black');
            $('nav').removeClass('nav-shadow');
        }
        if($(this).scrollTop() > 300) {
            $('nav').addClass('nav-shadow');
        }
    });

    $('.lines').click(function () {
        $('.menubar-nav').show(500);
        $('.lines').hide(500);
        $('.lines-close').show(500);
        $('.deskripsi-par').hide(500);
    });

    $('.lines-close').click(function () {
            $('.menubar-nav').hide(500);
        $('.lines').show(500);
        $('.lines-close').hide(500);
        $('.deskripsi-par').show(500);
    });

});
