$(document).ready(function(){
	//bus_popup
	$("#confirm").click(function(){
		modalClose();
	});
	$(".modal-open").click(function(){        
		$("#popup").css('display','flex').hide().fadeIn();
	});
	$("#refresh").click(function(){
		modalClose();
	});
	function modalClose(){
		$("#popup").fadeOut(); 
	}
	//station_popup
	$("#sconfirm").click(function(){
		modalClose();
	});
	$(".smodal-open").click(function(){        
		$("#spopup").css('display','flex').hide().fadeIn();
	});
	$("#srefresh").click(function(){
		modalClose(); 
	});
	function modalClose(){
		$("#spopup").fadeOut(); 
	}

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
