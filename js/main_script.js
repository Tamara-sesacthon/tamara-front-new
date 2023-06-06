$(document).ready(function(){
	/* index.html */
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

	$(".dtn_rcmd").click(function(){        
        if($("this").hasClass("active")){
            $("this").removeClass("active");
			$("this ul li p").removeClass("active");
			$("this .rdtn_checked").css("display","none");
        } else{
            $("this").addClass("active");
			$("this ul li p").addClass("active");
			$("this .rdtn_checked").css("display","block");
		}
	});
});
