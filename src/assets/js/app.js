$(document).foundation();

$(document).ready(function () {

    $('.clients-slider').slick({
        arrows:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,

    });


    
    
    
    $('.burger-button.up').on('click',function (e) {
        $('.menu').find('ul').toggleClass('click-on');
        $('.menu').find('ul').toggleClass('click-off');
    })

    $('.burger-button.down').on('click',function (e) {
        $('.footer-menu').find('ul').toggleClass('click-on');
        $('.footer-menu').find('ul').toggleClass('click-off');
    })

})

