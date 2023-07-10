'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});
new WOW().init();
$(".md-accordion .item .caption").click(function(){
  if($(this).parent(".item").hasClass("active")){
    $(this).parent(".item").removeClass("active");
  }else{
    $(this).parent(".item").addClass("active");
  }
  
})
$('.slider-banner .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


function owlInitialize() {
  if ($(window).width() <992) {
    $('.slider-product-bt').addClass("owl-carousel owl-theme");
    $('.related-product .slider-product-bt').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2,
                margin:15
            },
            576:{
                items:2,
                margin:30
            },
            768:{
                items:4,
                margin:15
            },
            991:{
                items:6
            }
        }
    })
  }else{
    $('.related-product .slider-product-bt').owlCarousel('destroy');
    $('.slider-product-bt').removeClass("owl-carousel owl-theme");
  }
}
owlInitialize();


function owlInitialize_right_widget() {
  if ($(window).width() <768) {
      $('.slider-widget').addClass("owl-carousel owl-theme");
      $('.slider-widget').owlCarousel({
          loop:false,
          margin:0,
          nav:true,
          dots:false,
          responsive:{
              0:{
                  items:2,
                  margin:15
              },
              576:{
                  items:2,
                  margin:30
              },
              768:{
                  items:4,
                  margin:15
              },
              991:{
                  items:6
              }
          }
      })
  }else{
      $('.slider-widget').owlCarousel('destroy');
      $('.slider-widget').removeClass("owl-carousel owl-theme");
  }
}
owlInitialize_right_widget();

$('.home-introduce .right-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );


$('.blk-slider-85 .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// jQuery(document).on("ready",function () {

// });
// $(".page-nomal").css("height",0.5*$(window).width());
// var min_height_klk_center= $(window).height() - 0.13*$(window).height()-$(".page-nomal .form-1 .logo").height();
// 	$(".blk-center").css("min-height", min_height_klk_center);

new WOW().init();


// validate_textarea();

var App = {
    toggle_click_menu: function () {
      $('.toggle-menu-icon').click(function(){
      	$(this).toggleClass("active-toggle");
      	$(".main-menu").toggleClass("active-main-menu");
      	
      		$(".main-menu .li-outer .a-outer").click(function(){
      			if($(window).width()<768){
      				if($(this))
      			// $(this).find(".sub-menu").slideToggle();
      			if($(this).closest(".li-outer").hasClass("has-sub")){
      				$(this).closest(".li-outer").toggleClass("active-li-outer");
      				$(this).closest(".li-outer").find(".sub-menu").toggleClass("active-sub-menu");
      			}
      			
      			}
      		})
      	
      	
      })
    },
    set_hight_home_product:function(){
    	$(".home-product .col-md-3 .thumb").css("min-height","auto");
    	var min_height=1;
    	$( ".home-product .col-md-3" ).each(function( index ) {
    	  var height_thumb=$(this).find(".thumb").height();
    	  if(min_height<height_thumb){
    	  	min_height=height_thumb;
    	  }
    	  
    	});
    	$(".home-product .col-md-3 .thumb").css("min-height",min_height);
    },
    set_hight_thumb_home_introduce:function(){
    	var min_height=1;
    	$(".home-introduce .data .fl-left .smd-col-3 .thumb").css("min-height","auto");
    	$( ".home-introduce .data .fl-left .smd-col-3" ).each(function( index ) {
    	  var height_thumb=$(this).find(".thumb").height();
    	  if(min_height<height_thumb){
    	  	min_height=height_thumb;
    	  }
    	  
    	});
    	$(".home-introduce .data .fl-left .smd-col-3 .thumb").css("min-height",min_height);
    },
      set_hight_related_post_detail:function(){
      var min_height=1;
      $(".related-product .item .thumb").css("min-height","auto");
      $( ".related-product .item" ).each(function( index ) {
        var height_thumb=$(this).find(".thumb").height();
        if(min_height<height_thumb){
          min_height=height_thumb;
        }
      });
      $(".related-product .item .thumb").css("min-height",min_height);
    },
    set_smd_text_right:function(){
    	var min_height=1;
    	$( ".blk-about-us .md-row").find(".smd-text-right").css("min-height","auto");
    	$( ".blk-about-us .md-row" ).each(function( index ) {
    	  var height_smd_text_right=$(this).find(".smd-text-right").outerHeight();
    	  if(min_height<height_smd_text_right){
    	  	min_height=height_smd_text_right;
    	  }
    	  
    	});
    	
    	if($(window).width()>991){
    		$( ".page-history .blk-about-us .md-row .thumb").css("margin-bottom",min_height);
    	}else{
    		$( ".blk-about-us .md-row" ).each(function( index ) {
    		  var height_smd_text_right_mb=$(this).find(".smd-text-right").outerHeight();
    		  $(this).find(".thumb").css("margin-bottom",height_smd_text_right_mb);
    		});
    	}
    	$( ".blk-about-us .md-row").find(".smd-text-right").css("min-height",min_height);
    },
    set_hight_product_giamdau_hasot:function(){
      if($(window).width()>576){
        var min_height=1;
        $(".page-giamdau-hasot .blk-product-gr .col-md-4 .thumb").css("min-height","auto");
        $( ".page-giamdau-hasot .blk-product-gr .col-md-4" ).each(function( index ) {
          var height_thumb=$(this).find(".thumb").height();
          if(min_height<height_thumb){
            min_height=height_thumb;
          }
        });
        $(".page-giamdau-hasot .blk-product-gr  .thumb").css("min-height",min_height);
      } else{
        var min_height=1;
        $(".page-giamdau-hasot .blk-product-gr .row .col-md-4 .thumb").css("min-height","auto");
        $( ".page-giamdau-hasot .blk-product-gr .row" ).each(function( index ) {
          $(this).find(".col-md-4").each(function(index) {
             var height_thumb=$(this).find(".thumb").height();
             if(min_height<height_thumb){
               min_height=height_thumb;
             }
             $(this).find(".thumb").css("min-height",min_height);
          });
        });
        $(".page-giamdau-hasot .blk-product-gr  .thumb").css("min-height",min_height);
      }
    },
    set_hight_blk_slider_85:function(){
      setTimeout(function(){ 
        $(".blk-slider-85 .owl-item .item ").css("min-height","auto");
          var get_height= $(".blk-slider-85 .owl-stage-outer").height();
          $(".blk-slider-85 .owl-item .item ").css("min-height",get_height);

        }, 500);
      
        // alert(get_height);
    },
    set_prositin_nav_slider_page_85:function(){
      var width_position=$(window).width()-$('.container-for-js').outerWidth() -$(".blk-slider-85 .owl-next").width();
      if($(window).width()>1350){
        $(".blk-slider-85 .owl-next").css("right",width_position/2 - 80);
        $(".blk-slider-85 .owl-prev").css("left",width_position/2 - 80);
      }else{
        $(".blk-slider-85 .owl-next").css("right",width_position/4 );
        $(".blk-slider-85 .owl-prev").css("left",width_position/4);
      }
      if($(window).width()<576.1){
        $(".blk-slider-85 .owl-next").css("right",width_position/2 + $(".blk-slider-85 .owl-next").width());
        $(".blk-slider-85 .owl-prev").css("left",width_position/2 + $(".blk-slider-85 .owl-next").width());
      }
      
    },
    open_video_fancybox:function(){
      $('.page-nha-may .blk-about-us .md-row .thumb [data-fancybox]').fancybox({
        youtube : {
          controls : 0,
          showinfo : 0
        },
        vimeo : {
          color : 'f00'
        }
      });
    },
    click_to_div:function(){
      $("a.gioi-thieu").click(function() {
          $('html,body').animate({
              scrollTop: $(".home-introduce").offset().top-$(".page-header").outerHeight()
          },
              'slow');
      });
      $("a.lien-he").click(function() {
          $('html,body').animate({
              scrollTop: $(".page-footer").offset().top
          },
              'slow');
      });
    }
   
};
jQuery(document).ready(function () {
    App. toggle_click_menu();
   	App. set_hight_home_product();
   	App. set_hight_thumb_home_introduce();
   	App. set_smd_text_right();
    App. set_hight_related_post_detail();
    App. set_hight_product_giamdau_hasot();
    App. set_hight_blk_slider_85();
    App. set_prositin_nav_slider_page_85();
    App. open_video_fancybox();
    App.  click_to_div();
    jQuery(window).resize(function () {
      // App.absolute_form_1_tablet();
      App. set_smd_text_right();
      App.  set_hight_product_giamdau_hasot();
      App. set_hight_blk_slider_85();
      App. set_prositin_nav_slider_page_85();
      owlInitialize();
      owlInitialize_right_widget()
      
      
    });
    window.addEventListener("resize", function(event) {
        // App.absolute_form_1_tablet();
        App. set_hight_home_product();
        App. set_hight_thumb_home_introduce();
        App. set_smd_text_right();
        App. set_hight_related_post_detail();
        App.  set_hight_product_giamdau_hasot();
        App. set_hight_blk_slider_85();
        App. set_prositin_nav_slider_page_85();

        owlInitialize();
        owlInitialize_right_widget()

        
    })
});
window.onresize = function() {
   // hl_resize() ;
   // set_height();
   // split_main_worklist();
}
$(window).on("load",function(){
   
});
// 

// $("#thanh-cong").fancybox().trigger('click');


