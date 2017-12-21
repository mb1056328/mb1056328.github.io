jQuery(document).ready(function($){

	// Frontend Only
	var frontend = document.getElementById('frontend');
	
	if (frontend !== null) {
		// Frontend Full Page
		

		$('#frontend').fullpage({
			anchors: ['Trifectah_Home', 'Trifectah_About', 'Showcase_Somday', 'Showcase_Live', 'Trifectah_Contact_Us'],
			// menu: '#menu',
			css3:true,
			navigation: true,
			navigationPosition: 'right',
			autoScrolling: false,
			fitToSection: false,
			
			onLeave: function(index, nextIndex, direction){

				console.log("onLeave index "+index);
				//iphone_swiper.slideTo(index-1);
				//iphone_swiper.startAutoplay();

/*
		        if(nextIndex == 3 || nextIndex == 4){
		            $("#iphone_block").show();
		        }else{
		        	
		        	$("#iphone_block").hide();
		        }
*/
		        
				if(index==1){
					$(".sidebar-item-1").removeClass('sidebar-active');
		    		//Home
		    		$("#home .content_block h1").removeClass("animated fadeInUp");
		    		$("#home .content_block h2").removeClass("animated fadeInUp");
		    		$("#home .content_block img").removeClass("animated fadeInUp");
		    		$("#home .content_block p").removeClass("animated fadeInUp");
		    	}

		    	if(index==2){
		    		$(".sidebar-item-2").removeClass('sidebar-active');
		    		// About
		    		//$("#about .content_block h1").removeClass("animated fadeInUp");
		    		//$("#about .content_block h2").removeClass("animated fadeInUp");
		    		//$("#about .content_block img").removeClass("animated rotateIn_custom");
		    		//$("#about .content_block p").removeClass("animated fadeInUp"); 
		    		//$("#about .content_block .icon-backgroup").removeClass("animated fadeInUp"); 

		    	}

		    	if(index==3){
		    		// showcasesomday
		    		$(".sidebar-item-3").removeClass('sidebar-active');
		    		$(".slide_1").removeClass('swiper-slide-active');
		    		$(".slide_2").removeClass('swiper-slide-next');
		    		$("#showcasesomday .content_block .right_column_icon img").removeClass("animated rotateIn_custom");
		    	}

		    	if(index==4){
		    		// showcaselive
		    		$(".sidebar-item-3").removeClass('sidebar-active');
		    		$("#showcaselive .content_block .right_column_icon img").removeClass("animated rotateIn_custom");
		    		// About
		    		$("#about .content_block h1").removeClass("animated fadeInUp");
		    		$("#about .content_block h2").removeClass("animated fadeInUp");
		    		$("#about .content_block img").removeClass("animated rotateIn_custom");
		    		$("#about .content_block p").removeClass("animated fadeInUp"); 
		    		$("#about .content_block .icon-backgroup").removeClass("animated fadeInUp"); 
		    	}

		    	if(index==5){
		    		// Contact Us
		    		$(".sidebar-item-4").removeClass('sidebar-active');
		    	}
	    	},
	    	afterLoad: function(anchorLink, index){
	    		console.log("afterLoad index "+index);


	    		if(index==1){
	    			$(".sidebar-item-1").addClass('sidebar-active');
		    		//Home
		    		var d_time = 0;
		    		$("#home .content_block h1").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});

		    		$("#home .content_block h2").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});

		    		$("#home .content_block img").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});

		    		$("#home .content_block p").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});					
		    	}



		    	if(index==2){
					$("#iphone_block").show();

		    		$(".sidebar-item-2").addClass('sidebar-active');

		    		// About
		    		//$("#about .content_block p").addClass("animated fadeInDown");
		    		var d_time = 0;
		    		$("#about .content_block h1").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});

		    		$("#about .content_block .about_p_first p").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});

					$("#about .content_block .step1 .icon-backgroup").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});
					    		
					$("#about .content_block .step1 img").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated rotateIn_custom');}, d_time
						);

						d_time+=500;
					});

					$("#about .content_block .step1 h2").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});

		    		$("#about .content_block .step1 p").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});

					$("#about .content_block .step2 .icon-backgroup").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});

					$("#about .content_block .step2 img").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated rotateIn_custom');}, d_time
						);

						d_time+=500;
					});

					$("#about .content_block .step2 h2").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});

		    		$("#about .content_block .step2 p").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});

					$("#about .content_block .step3 .icon-backgroup").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});

					$("#about .content_block .step3 img").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated rotateIn_custom');}, d_time
						);

						d_time+=500;
					});

					$("#about .content_block .step3 h2").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});

		    		$("#about .content_block .step3 p").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated fadeInUp');}, d_time
						);

						d_time+=500;
					});
/*
		    		$("#about .content_block img").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('rotateIn_custom');}, d_time
						);

						//d_time+=1000;
					});

*/		    		
		    	}

		    	if(index==3){

		    		$(".sidebar-item-3").addClass('sidebar-active');

		    		iphone_swiper.slideTo(0);

		    		var d_time = 0;
		    		

		    		$("#showcasesomday  .content_block .right_column_icon img").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated rotateIn_custom');}, d_time
						);

						d_time+=1000;
					});
		    		//$.fn.fullpage.setAutoScrolling(false);
		    	}

		    	if(index==4){
		    		$(".sidebar-item-3").addClass('sidebar-active');
		    		$(".slide_2").addClass('swiper-slide-active');
		    		slide_2
		    		iphone_swiper.slideTo(1);
		    		var d_time = 0;
		    		
		    		$("#showcaselive  .content_block .right_column_icon img").each(function() {
					  	var content = $(this);
					  	setTimeout(function () {
					    	content.addClass('animated rotateIn_custom');}, d_time
						);

						d_time+=1000;
					});
		    		//$.fn.fullpage.setAutoScrolling(false);
		    	}

		    	if(index==5){
		    		// Contact Us
		    		$(".sidebar-item-4").addClass('sidebar-active');
		    	}

	    	},


		        onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
		        	console.log("onSlideLeave index="+index);
			        if(nextIndex == 5){
			            $("#iphone_block").hide();
			        }
		        },

		        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
		           console.log("afterSlideLoad index="+index);
		        }
	    
		});

		// Parallax Background
		//var scene = document.getElementById('showcasesomday');
		//var parallax = new Parallax(frontend);

	}


    var iphone_swiper = new Swiper('#iphone_block_container', {
        direction: 'vertical',
        simulateTouch: false,
        onlyExternal: !0,
        speed: 1000,
        virtualTranslate: true,
        //autoplay: 3000
    });


	// Later add callback
	iphone_swiper.on('onSlideChangeEnd', function () {


	    if ($(".swiper-slide-active").children("video").length > 0){

	    	var active_video = $(".swiper-slide-active").children("video").get(0);

	    	$(".swiper-slide-active").children("video").fadeIn(800);
	    	active_video.currentTime = 0;
	    	active_video.play();
		}

		if ($(".swiper-slide-prev").children("video").length > 0){
			$(".swiper-slide-prev").children("video").fadeOut(800);
			$(".swiper-slide-prev").children("video").get(0).pause();
		}
		if ($(".swiper-slide-next").children("video").length > 0){
			$(".swiper-slide-next").children("video").fadeOut(800);
	    	$(".swiper-slide-next").children("video").get(0).pause();
		}

	});


	var showcase_1_swiper = new Swiper('#showcase_1_block_container', {
        direction: 'vertical',
        slidesPerView: 3,

        //autoplay: 3000
    });

	// Later add callback
	showcase_1_swiper.on('onSlideChangeEnd', function () {




	});


	var showcase_2_swiper = new Swiper('#showcase_2_block_container', {
        direction: 'vertical',
        slidesPerView: 3,
        //nextButton: '.swiper-button-next',
        //prevButton: '.swiper-button-prev',
        //autoplay: 3000
    });

	// Later add callback
	showcase_2_swiper.on('onSlideChangeEnd', function () {

	if(showcase_2_swiper.isEnd){
		$(".swiper-button-prev").show();
		$(".swiper-button-next").hide();
	}

	if(showcase_2_swiper.isBeginning) {
		$(".swiper-button-prev").hide();
		$(".swiper-button-next").show();
		
	}


	});

	$('.swiper-button-next').on('click', function(){
		showcase_2_swiper.slideTo(4, 300, true);
	});

	$('.swiper-button-prev').on('click', function(){
		showcase_2_swiper.slideTo(0, 300, true);
	});

	init();

	// Init
	function init(){
		scale_content();
		$('#trusted_logo').carouFredSel({
            transition: true,
            width: '100%;',
            align: false,
            items: 6,
            scroll: {
                items: 1,
                duration: 1.08,
                timeoutDuration: 0,
                easing: 'linear',
                pauseOnHover: 'immediate'
            }
        
		});

		if ($(".swiper-slide-active").children("video").length > 0){
	    	var active_video = $(".swiper-slide-active").children("video").get(0);

	    	$(".swiper-slide-active").children("video").fadeIn(800);

	    	
	    	active_video.currentTime = 0;
	    	active_video.play();
		}

	}



	// Scale Content
	function scale_content(){

		var block = $(".content_col"),
            org = {
                minScale: .4,
                maxScale: 1,
                width: 960,
                height: 1000,
                margin: .1
            },
            curr = {
            	presentationWidth: block.width(),
                presentationHeight: block.height()
            };

            c = Math.min(curr.presentationWidth / org.width, curr.presentationHeight / org.height), c = Math.max(c, org.minScale), c = Math.min(c, org.maxScale);

            block.children(".content_block").css({ transform: "scale(" + c + ")", webkitTransform: "scale(" + c + ")" });
            $("#iphone_block").css({ transform: "scale(" + c + ")", webkitTransform: "scale(" + c + ")" });
            $("#about_scene .building").css({ transform: "scale(" + c + ")", webkitTransform: "scale(" + c + ")" });
            $("#about_scene .could").css({ transform: "scale(" + c + ")", webkitTransform: "scale(" + c + ")" });
            $(".section_header ").css({ transform: "scale(" + c + ")", webkitTransform: "scale(" + c + ")" });

            $("#trusted_by .video_filter").css({ transform: "scale(" + c + ")", webkitTransform: "scale(" + c + ")" });
            $("#contact_us_wrapper").css({ transform: "scale(" + c + ")", webkitTransform: "scale(" + c + ")" });

            $(".trusted_content h1").css({ transform: "scale(" + c + ")", webkitTransform: "scale(" + c + ")" });

	}


	$( window ).resize(function() {
		scale_content();



	});
	

	// Play Btn & Lightbox
	$(".slide_1 .play").on("hover", function(e) {
	    if (e.type == "mouseenter") {
	       $(this).addClass("animated pulse");  
	    }
	    else { // mouseleave
	        $(this).removeClass("animated pulse");
	    }
	});

	$("#iphone_block_container_2 .play").on("hover", function(e) {
	    if (e.type == "mouseenter") {
	       $(this).addClass("animated pulse");  
	    }
	    else { // mouseleave
	        $(this).removeClass("animated pulse");
	    }
	});


	$(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            onShown: function() {
                if (window.console) {
                    //return console.log('Checking our the events huh?');
                }
            },
			onNavigate: function(direction, itemIndex) {
                if (window.console) {
                    //return console.log('Navigating '+direction+'. Current item: '+itemIndex);
                }
			}
        });
    });


	$("#brief .brief_field").on("hover", function(e) {
	    if (e.type == "mouseenter") {
	       $(this).addClass("animated swing");  
	    }
	    else { // mouseleave
	        $(this).removeClass("animated swing");
	    }
	});


	// Video
	$(function() {
        $('#video_list').mixItUp({
            animation: {
                effects: 'fade'
            },
            callbacks: {
            	onMixStart: function(state, futureState){
					$("#video_wrapper .viewport").animate({
	                	left: 0,
	            	});
					
				},
				onMixEnd: function(state, futureState){
					var viewport_w = state.totalShow * 230;
					$('#video_list .viewport').css('width',viewport_w);
					
				}
			}
        });
	});

	$(document).on('click', '.controls li a', function(e){

		if(!$(this).hasClass("current")){
			$(this).addClass("current");
			$(this).parent().siblings().children().removeClass("current");
		}

	});

	$(document).on('click', '#video_list .videolist_prev', function(e){

		var current_left = $("#video_wrapper .viewport").position().left;
		var new_left = current_left + 460;

		if (current_left < 0){
			$("#video_wrapper .viewport").animate({
	                left: new_left,
	        });

		}


	});

	$(document).on('click', '#video_list .videolist_next', function(e){
		var current_left = $("#video_wrapper .viewport").position().left,
			new_left = current_left - 460,
			wrapper_w = $("#video_wrapper ").width(),
			viewport_w = $("#video_wrapper .viewport").width();

		var can_swpie = viewport_w + current_left;

		if(can_swpie > wrapper_w){
			$("#video_wrapper .viewport").animate({
	                left: new_left,
	        });
		}

	});

	// Contact
	$(document).on('click', '.contact_us', function(e){

		// if($("#contact_us_wrapper").hasClass("fadeOut")){
		// 	$("#contact_us_wrapper").removeClass("fadeOut");
		// }
		if($("#contact_us_wrapper").hasClass("hidden")){
			$("#contact_us_wrapper").removeClass("hidden");
		}

		$("#contact_us_wrapper").addClass("fadeIn");

	});

	$(document).on('click', '#contact_us_wrapper .close_btn', function(e){

		if($("#contact_us_wrapper").hasClass("fadeIn")){
			$("#contact_us_wrapper").removeClass("fadeIn");
		}

		//$("#contact_us_wrapper").addClass("fadeOut");
		$("#contact_us_wrapper").addClass("hidden");

	});


	// Play Btn & Lightbox
	$("#frontend .icon_block .icon").on("hover", function(e) {
	    if (e.type == "mouseenter") {
	       $(this).addClass("animated infinite dropper");  
	    }
	    else { // mouseleave
	        $(this).removeClass("animated infinite dropper");
	    }
	});

    		var formcheckname=false;
    		var formcheckemail=false;
    		var formcheckmessage=false;

	        $('#name').change(function(){
	           if($(this).val() != '')
	           		formcheckname=true;
	           	else
	           		formcheckname=false;	           	
	           	checkform();
	        });

	        $('#email').change(function(){
	           	if($(this).val() != '')
	           		formcheckemail=true;
	           	else
	           		formcheckemail=false;
	           	checkform();
	        });

	        $('#message').change(function(){
	           	if($(this).val() != '')
	           		formcheckmessage=true;
	           	else
	           		formcheckmessage=false;
	           	checkform();
	        });

	        function checkform(){
	        	if(formcheckname&&formcheckemail&&formcheckmessage) {
	        		$("form .btn_en button").addClass("btn_submit_en_change");
                    $("form .btn_en button").removeClass("btn_submit_en");
                    $("form .btn_zh button").addClass("btn_submit_zh_change");
                    $("form .btn_zh button").removeClass("btn_submit_zh");
                }
	        };	

	        $('.btn_submit').on('click', function(){
	        	if(formcheckname&&formcheckemail&&formcheckmessage) {
	               $(".contact_form").submit();
	        	}
	        });

}(jQuery));    





















