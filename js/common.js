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
        $(".dark-bg").show();
    });

    $(".close-but").on("click", function(){
        $(".hide-top-menu").removeClass("show-hide-menu");
        $(".dark-bg").hide();
    });

    $(".dark-bg").on("click", function(){
        $(".hide-top-menu").removeClass("show-hide-menu");
        $(".dark-bg").hide();
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

    $('.accordeon-catogory .acc-head').on('click', f_acc);
    
    $(".add-wish").on("click", function(){
        $(this).toggleClass("active-heart");
    });

    $(".add-cart").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("add-cart-active");
    });

    $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
    });

    $(".modal-feedback-form").submit(function (e) {
        e.preventDefault();

        var form_data = $(this).serializeArray();

        $.ajax({
            type: "POST",
            url: "/php/mail.php",
            data: form_data,
            success: function () {
                $(".modal-feedback .mfp-close").click();
                $(".call-thank").click();
            },
            error: function (error) {
                console.log(error);
                //Удалить нижние 2 строчки
                $(".modal-feedback .mfp-close").click();
                $(".call-thank").click();
            }
        });

        return false;
    });

    $('.minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
     
        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }
     
      $input.val(value);
     
    });
     
    $('.plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
     
        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }
     
        $input.val(value);
    });

});

