var topDown = 0;
function addDotes(slides) {
	for(i=1; i<=slides; i++) {
		if(i==1)
			$("#nav_tabs").append("<a href='#slide"+i+"' id='nav_slide"+i+"' onclick='slide("+i+"); return false;' class='active'></a>");
		else
			$("#nav_tabs").append("<a href='#slide"+i+"' id='nav_slide"+i+"' onclick='slide("+i+"); return false;' class='nonactive'></a>");
	}
}
function init(height) {
	$("#slide1").height(height);
	$('#slide1 .left_content').css('margin-top', height/2);
	$('#slide1 .right_content').css('margin-top', height/2);
	$('#iphone').css('top', height/2);
	$('#iphone').css('margin-top', "-"+$('#iphone').height()/2+"px");
}

function slide(i) {	
	var scrollHeight = 0;
	var phoneImageHeight = $("#iphone_images_wrapper").height();
	var mod;
	if(i!=1) {
		mod = i-1;
	} else {
		mod = 1;
	}
	for(l=1; l<=i-1; l++) {				
		scrollHeight += $("#slide"+l).height();
	}

	$('html, body').animate({
		scrollTop: scrollHeight
	}, 2000);
	if( topDown > i ) {
		plus = i+1;
		sign = "+";
		revers = "-";
	} else if (topDown < i) {
		plus = i-1;
		sign = "-";
		revers = "+";
	}
	if(topDown != i) {

		$('#iphone_images').animate({
			marginTop:sign+'='+phoneImageHeight*mod
		}, 2000, function() {
			// console.log("plus:"+plus, "i:"+i);
		});
	}
	$(".active").removeClass('active').addClass('nonactive');
	$("#nav_slide"+i).removeClass('nonactive').addClass('active');
	topDown = i;
}

$(document).ready(function() {
	var slides = $(".main_image").length;
	var windowHeight = $(window).height();
	init(windowHeight);
	addDotes(slides);
	$(window).on('resize', function() {

		if($("#nav_slide1").hasClass('active')) {
			$("#slide1").height($(window).height());
		}
		$('#slide1 .left_content').css('margin-top', $(window).height()/2);

		$('#slide1 .right_content').css('margin-top', $(window).height()/2);
		$('#iphone').css('top', $(window).height()/2);

		$('#iphone').css('margin-top', "-"+$('#iphone').height()/2+"px");

	});

	$(window).scroll(function () {
		handleScroll(slides);
	});

});
// handle scroll
function handleScroll(slides) {	
	var slidesHeight = $(".main_image").height();	
	scrolledWin = getPageScroll();

	// if(scrolledWin%slidesHeight == 0)
}
// get Page scroll	
function getPageScroll() {
	var yScroll;
	if (self.pageYOffset) {
		yScroll = self.pageYOffset;
	} else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
		yScroll = document.documentElement.scrollTop;
	} else if (document.body) {// all other Explorers
		yScroll = document.body.scrollTop;
	}
	return yScroll;
}
// /* shadow Script 
//  * Written by Raffael Stueken
//  */ 

// var imgWidth = 1800, imgHeight = 1800;
// var imgRatio = imgHeight / imgWidth;
// var border = 0.05; // 5%
// var scrolledWin = 0;
// var lastScroll = 0;
// var f1 = 1.4;
// var advanced = false;
// var exp = 'med';
// var thePage;

// var winH, winW, offT, offL, conRatio, imgW, imgH, is_chrome, is_ie;
// var borderW, frameH, frameW, bodyH, navA, navS, s1M;
// var $window, $body, $wrapper, $wrapInner, $nav, $bT, $bB, $img1, $splashImg, $splashHead, $clouds, $cloud1, $cloud2;
// var $sStart, $sProb, $sSol, $sAppi, $s5, $s6, $s7, $s8, $s9, $s10, $s11, $sImpr;

// // scale img
// var zoom = 1;
// var zoomS = 0.0015; // scale steps // css transform
// var zoomS2 = 2; // scale steps // old school
// var oPac = 1;
// var myWay = false;

// var timer;

// // position first app img
// var $appImg;
// var $appImg2;
// var topOff = 0;
// var topOff2 = 0;


// $(document).ready(function(){
		
// 	// Cache objects
// 	$window = $(window);
// 	$body = $('body');	
// 	$wrapper = $('#wrapper');
// 	$wrapInner = $('#wrapperInner');
// 	$bT = $('#borderTop');
// 	$bB = $('#borderBottom');
// 	$sAppi = $('#secAppimg');

// 	// what page on?
// 	if($body.hasClass('mainPage')) {
// 		thePage = 'main';
// 	}
// 	if($body.hasClass('thanksPage')) {
// 		thePage = 'thanks';
// 	}
	
// 	if(thePage == 'main') {
	
// 		// Cache objects
// 		$nav = $('#nav');
// 		$splashImg = $('#splashImages'); 
// 		$img1 = $('#secStart .backImg img');
// 		$splashHead = $('#splashHead');
// 		$clouds = $('#clouds');
// 		$cloud1 = $('#cloud1');
// 		$cloud2 = $('#cloud2');
		
// 		// sections
// 		$sStart = $('#secStart');
// 		$sProb = $('#secProblem');
// 		$sSol = $('#secSolution');
// 		$s5 = $('#secAppfunc');
// 		$s6 = $('#secAppfunc1');
// 		$s7 = $('#secAppfunc2');
// 		$s8 = $('#secAppfunc3');
// 		$s9 = $('#secAppfunc4');
// 		$s10 = $('#secAppfunc5');
// 		$s11 = $('#secAppfunc6');
// 		$sInv = $('#secInvite');
// 		$sImpr = $('#secImprint');
		
// 		// app img animation
// 		$appImg = $('#secAppfunc1');
// 		$appImg2 = $('#secAppfunc6');
		
// 		// define touch devises
// 		if (Modernizr.touch){
// 			$body.addClass('touch');
// 			exp = 'none';
// 		}
		
// 		// detect chrome and ie
// 		is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
// 		is_ie = $.browser.msie;
			
// 		if(is_chrome) {
// 		    myWay = true;
// 		}
		
// 		if(is_ie) {
// 			exp = 'poor';
// 		}
		
// 		// prevent bug -> iPhone-mockups will not show before other images are faded in
// 		if ($.browser.webkit) {
// 			$body.addClass('webkit');
// 		}
			
// 		// init page functions
// 		init();
		
// 	} else {
	
// 		// define touch devises
// 		if (Modernizr.touch){
// 			$body.addClass('touch');
// 			exp = 'none';
// 		}
		
// 		// get window dimensions
// 		adjustWindow();
// 		$window.resize(function() {
// 		    adjustWindow();
// 		});
		
//    		// extern links
//    		$("#links a").attr('target','_blank');	   	
		
// 	}
	   
// });

// $(window).load(function() {
	
// 	// fade in page
// 	start();
	
// });

// // init site functions
// /////////////////////////////////////////

// function init() {
		
// 	// preload main img
// 	$('<img />').attr('src', $img1.attr('src')).load();	
	
// 	window.setTimeout(function(){
//         $body.addClass("delay");
//     }, 1000);
	
// 	// start up after 5sec no matter what
//     window.setTimeout(function(){
//         start();
//     }, 4000);
			
// 	// get window dimensions
// 	adjustWindow();
// 	$window.resize(function() {
// 	    adjustWindow();
// 	});
			
// 	// handle scrolling
// 	$window.scroll(function() {			
// 	    handleScroll();
// 	});	
	
// 	// start rendering image
// 	animloop();
	
// 	// highlight button while scrolling
// 	buttonHigh();		
	
// 	// init Navi
// 	initNavi();
	
// 	// inview?
// 	$sStart.addClass('inView');
// 	$('section').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		
// 	    var $el = $(this);
		
// 	    if (isInView) {
// 	    	// element is now visible in the viewport
// 	    	$el.addClass('inView');		
			
// 	    } else {
// 	      	// element has gone out of viewport
// 	    }
		
// 	});
	
// 	$('.naviHook').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		
// 	    var $el = $(this);
		
// 	    if (isInView) {
		
// 	    	// whole part of element is visible
// 	    	var navID = $el.attr("id").replace("hook", "");
// 	    	$nav.attr("class", "").addClass('a'+navID);										
			
// 	    }
// 	});

// }


// // fade in experience
// function start() {

// 	if(!$body.hasClass("started") && thePage == 'main'){

// 		// body classes
// 		$body.addClass("started");
		
// 		$('#scrollDown,#secStart h1').hide();
// 		$img1.hide(); 
// 		$('html').removeClass("loading");
				
// 		$('#secStart h1').fadeIn(800,"easeInOutQuad");				
// 		// window.setTimeout(function(){
// 			$img1.fadeIn(1800,"easeInOutQuad");				
// 		// },400);		
// 		window.setTimeout(function(){
// 			$('#scrollDown').fadeIn(800,"easeInOutQuad");				
// 		},800);
		
// 		// app img animation
// 		topOffs();
		
// 	}

// }


// // button highlight
// function buttonHigh() {
// 	timer = setInterval( function() {
// 		if(lastScroll == scrolledWin) {
// 			$body.removeClass('scrolling');
// 		}
//  		lastScroll = scrolledWin;
//     }, 250);	
// }

// // init Navi
// function initNavi() {

// 	if(exp != 'none') {
//     	$('#nav li').click(function() {
//     		navA = $(this).index() + 1;
//     		$nav.attr("class", "").addClass('a'+navA);
//     		if(navA == 1) {
//     			navS = 0;
//     		} else {
//     			navS = $('#hook'+navA);    	
//     		}
//     		$body.scrollTo(navS,800,"easeInOutQuad");
//     	});
//     	$('#invite a').click(function() {
//     		$nav.attr("class", "").addClass('a5');
//     		$body.scrollTo('#hook5',1200,"easeInOutQuad");
//     		return false;
//     	});    
//     	$('section').not("#secInvite,#secCredits").click(function() {
//     		$body.scrollTo($(this).next(),600,"easeInOutQuad");
//     	});    
//     	$("#scrollDown").click(function() {
//     		$body.scrollTo($("#secProblem"),1200,"easeInOutQuad");
//     	});
//     	$("#topLogo").click(function() {
//     		window.location.href = 'http://discovershadow.com/';
//     		// changeMainImg();
//     	});
	
//     } else {
//     	$('#invite a').click(function() {
//     		$body.scrollTo('#secInvite',1200,"easeInOutQuad");
//     		return false;
//     	}); 
//     }
	
//     if($body.hasClass("touch")) {
//     	$("#splashHead h1").click(function() {
//     		$body.scrollTo($("#secProblem"),1200,"easeInOutQuad");
//     	});
//     }
	
// }

// // imgtest
// var mainImgs = 3;
// function changeMainImg() {
// 	var thisMainImg = $('#img1').attr('src');
// 	var thisMainImgN = thisMainImg.substr(thisMainImg.length-5,1);
// 	if(thisMainImgN >= mainImgs) {
// 		var thisMainImgN2 = 1;
// 	} else {	
// 		var thisMainImgN2 = parseFloat(thisMainImgN) + 1;
// 	}	
// 	thisMainImg = thisMainImg.replace(thisMainImgN,thisMainImgN2);
// 	$('#img1').attr('src',thisMainImg);
// }


// // handle scroll
// function handleScroll() {
	
// 	scrolledWin = getPageScroll();
// 	$body.addClass('scrolling');	
	
// 	// show logo
// 	if((scrolledWin * 1.5) > winH) {
// 		$body.addClass('content');
// 	}
	
// 	// show navigation 
// 	if(scrolledWin > 50) {
// 		$body.addClass('scrolled');
// 	}
	
// 	// app img animation
// 	if(topOff >= scrolledWin) {
// 		$appImg.removeClass('sticky');
// 	} else {
// 		$appImg.addClass('sticky');
// 	}
// 	if(topOff2 >= scrolledWin) {
// 		$appImg2.removeClass('sticky');
// 	} else {
// 		$appImg2.addClass('sticky');
// 	}
	
// 	// reset navi on top scroll
// 	if(scrolledWin < winH) {
// 		$nav.attr("class", "").addClass('a1');
// 	}
	
	
// }

// // set image and window dimensions
// function adjustWindow(){

// 	// get window size
// 	winW = $(window).width();
// 	winH = $(window).height();
	
// 	if(winH <= 440) {
// 		winH = 440;
// 	}	
	
// 	// set margin
// 	borderW = Math.floor(winW * border);
// 	if(borderW <= 20) {
// 		borderW = 20;
// 	}
// 		// 
// 	// set fullscreen sizes
// 	$('section.full').height(winH);
// 	$('section.startFull').height((winH * f1));
// 		// 
// 	// set frame
// 	$bT.css({height: borderW+'px'});
// 	if(borderW <= 40) {
// 		$bB.css({height: '40px'});
// 	} else {	
// 		$bB.css({height: borderW+'px'});
// 	}
// 	$wrapper.css({margin: borderW+'px'});
	
// 	if(thePage == 'main') {
	
// 		// Set fullscreen image size
//     	conRatio = (winH * f1) / (winW - (borderW * 2));    
//     	bigImg(true); 
// 			// 
// 		// position start headline
// 		$splashHead.css({marginTop: ((winH * 0.5) - 80)+'px'});
// 		// 
// 		// position app infos
// 		$('.secAppfunc .leftContent, .secAppfunc .rightContent').css({marginTop: ((winH * 0.5)) +'px'});
// 		$sAppi.find('.sectionContent').css({marginTop: ((winH * 0.5) - borderW)+'px'});
// 		$sInv.find('.sectionContent').css({marginTop: ((winH * 0.5) - borderW)+'px'});
// 		$sProb.find('.sectionContent').css({marginTop: ((winH * 0.5) - borderW)+'px'});
// 		$sStart.css({marginBottom: '-'+(winH * (f1-0.8))+'px'});
// 		$('.bottomContent').css({bottom: (borderW + 20)+'px'});
// 			// 
// 		// app img animation
// 		topOffs();
	
// 	} else {
	
// 		// position app infos
// 		$sAppi.find('.sectionContent').css({marginTop: ((winH * 0.5) - borderW)+'px'});
// 		// 
// 	}
	
// 	if(thePage == 'thanks') {
	
// 		// reposition social media	
// 		$('#secCredits').css({marginTop: '-'+ ((borderW * 2) + 95) +'px'});		
	
// 	}
	
// }

// // app img animation
// function topOffs() {
// 	topOff = $appImg.position();
// 	topOff = topOff.top;	
// 	topOff2 = $appImg2.position();
// 	topOff2 = topOff2.top;
// }

// // resizing big img
// function bigImg(rePos) {
		
// 	if(myWay) { 		
// 	// zoom by calculation	
		
// 		if((scrolledWin * 0.8) <= winH) { // only calc if in view
		
//  			zoom = scrolledWin * zoomS2;
			
//     		// scale and position the image   
//      		if (conRatio < imgRatio) {
//     			imgW = Math.floor(   winW - (borderW * 2) + zoom  ) + 1;
//     			imgH = Math.floor(   imgW * imgRatio			  ) + 1;
//     		} else {    
//     			imgH = Math.floor(   (winH * f1) + zoom		      ) + 1;
//     			imgW = Math.floor(   imgH / imgRatio       	      ) + 1;
//     		}   
			
//     		offT = 	   Math.floor(	 ((winH * f1) - imgH) / 2			 	) + 1;
// 			offL = 	   Math.floor(	 ((winW - (borderW * 2)) - imgW) / 2	) + 1;
			
// 			$img1.css({width: imgW+'px', height: imgH+'px', left: offL+'px', top: offT+'px'});
			
// 		}

// 	} else {
//  	// zoom by css transform
			
// 	 	if(rePos) { // rescale and position the image if needed
		
// 	        // scale and position the image   
// 	        if (conRatio < imgRatio) {
// 	        	imgW = winW - (borderW * 2);
// 	        	imgH = Math.floor(	imgW * imgRatio			) + 1;
// 	        } else {
// 	        	imgH = Math.floor(	winH * f1	 			) + 1;
// 	        	imgW = Math.floor(	imgH / imgRatio			) + 1;
						
// 	        }    
			
// 	        offT = Math.floor(		((winH * f1) - imgH) / 2				);
// 		    offL = Math.floor(		((winW - (borderW * 2)) - imgW) / 2		);
			
// 		    $img1.css({width: imgW+'px', height: imgH+'px', left: offL+'px', top: offT+'px'});
			
// 		}
		
		
// 		if(exp != 'none' && exp != 'poor') {
// 			// zoom img // only calc if in view
// 			if((scrolledWin * 0.8) <= winH) { 
// 			    zoom = 1 + (scrolledWin * zoomS);
// 			    if (zoom <= 1) {
// 			    	zoom = 1;
// 			    }
// 			   	$img1.css('transform', 'scale('+zoom+', '+zoom+')');
// 			}
// 		}
		
// 	}
	
// 	// animate clouds
		
// 	if(advanced) {
		
// 		zoom = scrolledWin * zoomS2;
// 		imgW = Math.floor(   winW - (borderW * 2) + zoom  			) + 1;
// 		offL = Math.floor(	 ((winW - (borderW * 2)) - imgW) / 2	) + 1;
		
// //		$clouds.css({width: imgW+'px', left: offL+'px'});
				
// //		$cloud1.css({marginLeft: '-'+scrolledWin+'px'});
// //		$cloud2.css({marginRight: '-'+scrolledWin+'px'});

// 	}
			
// }

// // get Page scroll	
// function getPageScroll() {
//     var yScroll;
//     if (self.pageYOffset) {
//     	yScroll = self.pageYOffset;
//     } else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
//     	yScroll = document.documentElement.scrollTop;
//     } else if (document.body) {// all other Explorers
//     	yScroll = document.body.scrollTop;
//     }
//     return yScroll;
// }

// // main render loop
// // render as fast as possible and only when tab is in view
// window.requestAnimFrame = (function(){
//   return  window.requestAnimationFrame       ||
//           window.webkitRequestAnimationFrame ||
//           window.mozRequestAnimationFrame    ||
//           window.oRequestAnimationFrame      ||
//           window.msRequestAnimationFrame     ||
//           function(/* function */ callback, /* DOMElement */ element){
//     		window.setTimeout(callback, 1000 / 60);
//           };
// })();

// // on every loop render image
// function animloop() {
//     render();
//     requestAnimFrame(animloop);
// }

// // rendering
// function render() {
	
//     if(exp != 'none') {
// 		// cover animation
// 		if((scrolledWin * 0.8) <= winH) {
// 			bigImg(false);	    		
// 		}
		
// 		// splash img opacity	
// 		oPac = (((winH * (f1-1)) + (borderW * 2)) - scrolledWin) / ((winH * (f1-1)));
// 		if(oPac >= 1) {
// 			oPac = 1;
// 		} else if(oPac <= 0) {
// 			oPac = 0;
// 		}
// 		$splashImg.css({opacity: oPac});
// 	}

// }

// // focus form
// function focusForm() {
// 	if(!$('#formWrapper').hasClass('focused')) {
// 		$('#formWrapper').addClass('focused');
// 		$('input.input').focus();
// 		if($('input.input').attr('value') == "Your email address") {
// 			$('input.input').attr('value', '');
// 		}
// 	}
// }