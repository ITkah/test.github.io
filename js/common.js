$(document).ready(function() {

    $(".call-dropdown-desk").on("click", function(e){
        e.preventDefault();
        $(".dropdown-box-desk").slideToggle("fast");
    });

    $(".call-dropdown-mob").on("click", function(e) {
        e.preventDefault();
        $(".dropdown-box-mob").slideToggle("fast");
    });

    $(".menu-btn").on("click", function(){
        $(".hide-top-menu").toggleClass("show-hide-menu");
        $("body").toggleClass("over-hide");
    });

    $(".close-but").on("click", function(){
        $(".hide-top-menu").removeClass("show-hide-menu");
        $("body").removeClass("over-hide");
    });

    $('.main-slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        items: 1,
        responsive:{
            0:{
                items: 1,
            },
            576:{
                items: 1,
                nav:false
            },
            990:{
                items: 1,
                nav:true,
                dots:false
            }
        }
    });

    $('.items-wrap .owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:8000,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            990:{
                items:3,
                nav:true,
                dots:true
            }
        }
    });

    $('.partners .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots: false,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:3,
            }
        }
    });

    $('.video .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:3,
                nav:true,
                dots:true
            }
        }
    });

    $('.slide-product .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:4000,
        dots:false,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            768:{
                items:3,
            },
            1200:{
                items:4,
                nav:true,
            }
        }
    });

    var i= 1; $('.items-wrap .owl-dot').each(function(){$(this).find('span').html(i);i++;});

    var i= 1; $('.video .owl-dot').each(function(){$(this).find('span').html(i);i++;});

    $(".owl-carousel").owlCarousel();


    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
    });

    function f_acc(){
        $(".arrow").removeClass("arrow-active");
        //скрываем все кроме того, что должны открыть
          $('#accordeon .acc-body').not($(this).next()).slideUp(500);
        // открываем или скрываем блок под заголовком, по которому кликнули
        $(this).next().slideToggle(500);
        $(this).toggleClass("arrow-active");
    }

    $('#accordeon .acc-head').on('click', f_acc);
    
    $(".add-wish").on("click", function(){
        $(this).toggleClass("active-heart");
    });

    $(".add-cart").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("add-cart-active");
    });
});