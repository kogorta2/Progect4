$(document).foundation();

$(document).ready(function () {

    // var handleMatchMedia = function (mediaQuery) {
    //         var $ButtonEvent = $('\
    //                <div class="wrapper-for-button">\
	 //                    <div class="row wrapper">\
	 //                        <div class="small-4 medium-2 columns button-for-menu">\
		// 					    <i class="fa fa-menu" aria-hidden="true"></i>\
	 //                        </div>\
		// 				</div>\
		// 			  </div>');
    //
    //         var $menuLarge = $('\
    //    <div class="menu">\
    //     <div class="row  align-middle">\
    //         <ul class="small-9 medium-9 large-8 columns">\
    //             <li><a href="#">Home</a></li>\
    //             <li><a href="#">About us</a><div class="li-border"></div></li>\
    //             <li><a href="#">services</a><div class="li-border"></div></li>\
    //             <li><a href="#">news</a><div class="li-border"></div></li>\
    //             <li><a href="#">blog</a><div class="li-border"></div></li>\
    //             <li><a href="#">pages</a><div class="li-border"></div></li>\
    //             <li><a href="#">Contact Us</a><div class="li-border"></div></li>\
    //         </ul>\
    //     </div>\
    // </div>');
    //
    //         var $menuUnderButton = $('\
    //     <div class="wrapper-background">\
		//                      <div class="row align-middle">\
		// 						<div class="small-4 medium-2 columns">\
		// 							<ul>\
		// 								<li><a href="#">Home</a></li>\
		// 								<li><a href="#">About us</a></li>\
		// 								<li><a href="#">services</a></li>\
		// 								<li><a href="#">news</a></li>\
		// 								<li><a href="#">blog</a></li>\
		// 								<li><a href="#">pages</a></li>\
		// 								<li><a href="#">Contact Us</a></li>\
		// 							</ul>\
		// 						</div>\
		// 					</div>\
		// 				</div>');
    //
    //     if (mediaQuery.matches) {
    //
    //         $('.menu').replaceWith($ButtonEvent);
    //         $($(".wrapper").children()).on('click', function (e) {
    //             if ($(".header").hasClass("view-menu")) {
    //                 $('.wrapper-background').detach();
    //                 $(".header").removeClass("view-menu");
    //             }
    //             else {
    //                 $($menuUnderButton).insertBefore($('.wrapper-for-button'));
    //                 $(".header").addClass("view-menu");
    //             }
    //             return false;
    //         });
    //     }
    //     else {
    //         if ($(".header").hasClass("view-menu")) {
    //             $('.wrapper-background').detach();
    //             $(".header").removeClass("view-menu");
    //         }
    //         $('.wrapper-for-button').replaceWith($menuLarge);
    //
    //     }
    //         return false;
    // },
    //     wMm=window.matchMedia('all and (max-width:1024px)');
    // handleMatchMedia(wMm);
    // wMm.addListener(handleMatchMedia);

    
    
    
    
    
    $('.burger-button').on('click',function (e) {
        $('.menu').find('ul').toggleClass('click-on');
        $('.menu').find('ul').toggleClass('click-off');
    })


})

