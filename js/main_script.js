$(document).ready(function(){
	/* index.html */

	//scroll action
	$(function(){
		var scrollTop = $(window).scrollTop();
		   $('.searchicon').click(function(){
			   var captionTop = $('.where_to_go').offset().top;
			   $('html, body').animate({scrollTop : captionTop}, 500);
			   $(".keyboard_area").css('display','none');
			   $(".take_contents").css('display','block');
			   $(".where_to_go").addClass('addshadow');
			   $(".where_to_go_title_box h2").css('display','none');
			   $(".top_button").css('display','block');
			   return false;
			});
	   });

	   $(".form_w100").click(function(){
		window.scrollTo({top : 0, behavior: 'smooth'}); 
		$(".where_to_go_title_box h2").css('display','block');
		$(".top_button").css('display','none');
	  });

	   //스크롤 시 fixed
	   $(function(){
			scrollAct();
		})
	
		function scrollAct(){
			var position = $(".where_to_go").offset().top; //fixed 메뉴 위치
	
			$(window).on('scroll', function() {
				var scrollTop = $(window).scrollTop(); //현재 스크롤 위치
				var topsectionH = $('.footer').height(); //footer 높이
				var wrapH = $('#wrap').height(); //모든 컨텐츠 높이
				var conH = wrapH - topsectionH - $('.where_to_go').height() - position; //footer 까지 스크롤 도달 위치 계산
		
				if (scrollTop > position){ 
					if (conH + position - 345 > scrollTop){
						$('.where_to_go').css({'position':'fixed', 'top':'0px'})
						$(".where_to_go_title_box h2").css('display','none');
			   			$(".top_button").css('display','block');
					}else {
						$('.where_to_go').css({'position':'absolute','top':conH})
					}   
				}else{
					$('.where_to_go').css({'position':'absolute','top':'345px'})
				}
			})
	}   

	//top_button
	$(".top_button").click(function(){
		window.scrollTo({top : 0, behavior: 'smooth'}); 
		$(".where_to_go_title_box h2").css('display','block');
		$(".top_button").css('display','none');
	  });

	//stop_info_slider
	$(".stop_info_slider").slick({
		autoplay:false,
		infinite: true,
		slidesToShow:1,
		dots:false,
		arrows:true,
		speed:500,
		prevArrow:$("#BtnPrev"),
		nextArrow:$("#BtnNext"),
		focusOnSelect:false,
		variableWidth:false,
	});

	//common_modal
	function modalClose(){
		$(".modal_wrap").fadeOut(); 
	}

	//bus_modal
	$("#bus_confirm").click(function(){
		modalClose();
	});
	$(".station_modal_open").click(function(){        
		$("#station_modal").css('display','flex').hide().fadeIn();
	});
	$("#bus_refresh").click(function(){
		modalClose();
	});

	//station_modal
	$("#station_confirm").click(function(){
		modalClose();
	});
	$(".bus_modal_open").click(function(){        
		$("#bus_modal").css('display','flex').hide().fadeIn();
	});
	$("#station_refresh").click(function(){
		modalClose(); 
	});

	/* search.html */
	/*
	$(".dtnn_box").click(function(){        
        if($(".dtnn_box").hasClass("active")){
            $(".dtnn_box").removeClass("active");
			$(".dtnn_box p").removeClass("active");
			$(".dtn_checked").css("display","none");
        } else{
            $(".dtnn_box").addClass("active");
			$(".dtnn_box p").addClass("active");
			$(".dtn_checked").css("display","block");
		}
	});
	*/
});
