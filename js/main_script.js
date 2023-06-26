$(document).ready(function(){
	/* index.html */

	//함수 정의
	function showTopbtn(){
		$(".titlebox_where_to_go > h2").css('display','none');
		$(".top_button").css('display','block');
	}

	function removeTopbtn(){
		$(".titlebox_where_to_go > h2").css('display','block');
		$(".top_button").css('display','none');
	}

	function makeBararea(){
		$(".keyboard_area").css('display','none');
		$(".take_contents").css('display','block');
		$(".where_to_go").addClass('addshadow');
	}
	var scrollTop = $(window).scrollTop();

	// 클릭시 
	$('.searchicon').click(function(){
		var captionTop = $('.where_to_go').offset().top;
		$('html, body').animate({scrollTop : captionTop}, 500);
		makeBararea();
		showTopbtn();
		return false;
	 });


	   $(".form_w100").click(function(){
		var captionTop = $('.where_to_go').offset().top;
		$('html, body').animate({scrollTop : captionTop}, 500);
		makeBararea();
		showTopbtn();
		return false;
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
						$(".titlebox_where_to_go > h2").css('display','none');
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
		$(".titlebox_where_to_go > h2").css('display','block');
		$(".top_button").css('display','none');
	  });

	//스크롤 가장 상단에 있을 때  
	$(function(){
		detectTop();
	})

	function detectTop(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop == 0) {
			showTopbtn();
		} else {
			removeTopbtn();
		}
	};

	//info_stations_slider
	$(".info_stations_slider").slick({
		autoplay:false,
		infinite:false,
		slidesToShow:1,
		dots:false,
		arrows:true,
		speed:500,
		centerMode:true,
		centerPadding:'0px',
		prevArrow:$("#btn_prev"),
		nextArrow:$("#btn_next"),
		focusOnSelect:true,
		variableWidth:false,
		initialSlide : 1,
		swipe:false,
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

	//modal_station_slider
	$(".modal_station_slider").slick({
		autoplay:false,
		infinite:false,
		slidesToShow:1,
		dots:false,
		arrows:false,
		speed:500,
		variableWidth:false,
		
	});

});
