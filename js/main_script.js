$(document).ready(function(){
	/* index.html */

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
