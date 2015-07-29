
jQuery(function($){

	// READY EVENT //		
	$(document).ready(function(){		
	
		// Loading Icon
		var tl =  new TimelineMax({repeat:1000, repeatDelay:0});
		tl.to("#spin", 2, { rotation:360, ease: Power0.easeNone });
		
		// DEVICES FIX
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

			$('.parallax, #contacts, #intro-text, #intro-slider').css('background-attachment', 'scroll');
			$('#popup-menu, .wrap-menu-intro, .nav-menu').css('position', 'relative');		
			
			$('#popup-menu').css({'visibility':'hidden', 'display':'block'});
			var popupHeight = $('.nav-menu').height() + 265;
			$('#popup-menu').css({'visibility':'', 'display':''});
			
			$('#popup-menu').css('height', popupHeight);
		
		}
		
		// Isotope Init
		$('.isotope-grid').each(function() {			

			var $container = $(this);
			var cols = $container.data('cols');
			var colWidth;			

			switch(cols){				

				case 2:
				colWidth = '.col-md-6';
				break;				

				case 3:
				colWidth = '.col-md-4';
				break;				

				case 4:
				colWidth = '.col-md-3';
				break;				

			}

			$container.isotope({		 

				itemSelector: '.item',
				layoutMode: 'masonry',	
				masonry: {
				  columnWidth: colWidth
				}	

			});			

        });  // END Isotope Init 	
		
		
				

				

	}); // END READY EVENT
	

	// LOAD EVENT //	

	$(window).load(function(){		

		// Remove Loader Mask
		setTimeout( function(){ 
		
			$('#wrap').css('opacity','1'); 
			$('#mask').fadeOut(500);

		}, 300);
		
		// Home 1 - Intro
		$('#intro-text').appear(function(){			

			TweenMax.fromTo('#intro-text .text-intro', 1, 
				{ scale:"0.5", opacity:"0"}, 
				{ scale:"1", opacity:"1",  ease: Back.easeOut.config( 1.3 ), delay:0.5 }
			);

			TweenMax.fromTo('#intro-text .btn-search', 0.5, 
				{ marginTop:"-50px", opacity:"0", position:"absolute"}, 
				{ marginTop:"0", opacity:"1", position:"relative", ease: Back.easeOut.config( 1.3 ), delay:1 }
			);

			TweenMax.fromTo('#intro-text .btn-open-menu', 0.5, 
				{ marginTop:"-50px", opacity:"0", position:"absolute"}, 
				{ marginTop:"0", opacity:"1", position:"relative", ease: Back.easeOut.config( 1.3 ), delay:1.25 }
			);			

		},{accX: 0, accY: -200});
		
		// Home 1 - Collection Masonry
		$('#collection-masonry .item').hover(function(){
			
			var $overlay = $('.item-overlay', this);
			var $category = $('.item-category', this);
			var $link = $('.item-link', this);
			
			TweenMax.to( $overlay, 1, { backgroundColor:"rgba(44, 26, 41, 0.8)",  ease:Power4.easeOut } );
			TweenMax.to( $category, 0.5, { bottom:"80",  ease:Power4.easeOut } );
			TweenMax.to( $link, 0.5, { bottom:"50",  ease:Power4.easeOut } );
	
		},
		function(){
			
			var $overlay = $('.item-overlay', this);
			var $category = $('.item-category', this);
			var $link = $('.item-link', this);
			
			TweenMax.to( $overlay, 1, {backgroundColor:"rgba(44, 26, 41, 0.5)",  ease:Power4.easeOut } );
			TweenMax.to( $category, 0.5, { bottom:"50",  ease:Power4.easeOut } );
			TweenMax.to( $link, 0.5, { bottom:"-50",  ease:Power4.easeOut } );
			
		});
		
		// Home 1 - New Arrivals
		$('#new-products .item').hover(function(){
			
			var $overlay = $('.item-overlay', this);
			var $category = $('.item-category', this);
			var $link = $('.item-link', this);
			
			TweenMax.to( $overlay, 1, { backgroundColor:"rgba(44, 26, 41, 0.5)",  ease:Power4.easeOut } );
			TweenMax.to( $category, 0.5, { bottom:"80",  ease:Power4.easeOut } );
			TweenMax.to( $link, 0.5, { bottom:"50",  ease:Power4.easeOut } );
	
		},
		function(){
			
			var $overlay = $('.item-overlay', this);
			var $category = $('.item-category', this);
			var $link = $('.item-link', this);
			
			TweenMax.to( $overlay, 1, {backgroundColor:"rgba(44, 26, 41, 0.7)",  ease:Power4.easeOut } );
			TweenMax.to( $category, 0.5, { bottom:"50",  ease:Power4.easeOut } );
			TweenMax.to( $link, 0.5, { bottom:"-50",  ease:Power4.easeOut } );
			
		});
		
		// Home 1 - Carousel		
		$('.slider-image').owlCarousel({
		 		
				items: 1,
				nav: true,
				dots: false,
				autoplay: true,
				loop: true,
				navContainer: '.slider-nav',
				navText: ['<div class="slider-arrow arrow-prev"><i class="tpl-icon-keyboard-arrow-left"></i></div>','<div class="slider-arrow arrow-next"><i class="tpl-icon-keyboard-arrow-right"></i></div>'],
				smartSpeed:450,
			 
		});
		
		
		// Home 1 - Models
		$('#models .item').hover(function(){
			
			var $overlay = $('.item-overlay', this);

			TweenMax.to( $overlay, 1, { backgroundColor:"rgba(44, 26, 41, 0.8)",  ease:Power4.easeOut } );

	
		},
		function(){
			
			var $overlay = $('.item-overlay', this);
			
			TweenMax.to( $overlay, 1, {backgroundColor:"rgba(44, 26, 41, 0.5)",  ease:Power4.easeOut } );
			
		});
		
		
		// Home 2 - Carousel		
		$('.slider-quote').owlCarousel({
		 		
				items: 1,
				nav: true,
				dots: false,
				autoplay: true,
				loop: true,
				navContainer: '.slider-nav',
				navText: ['<div class="slider-arrow arrow-prev"><img src="ico/arrow-left.png" alt=""></div>','<div class="slider-arrow arrow-next"><img src="ico/arrow-right.png" alt=""></div>'],
				smartSpeed:450,
			 
		});
		
		// Home 2 - Collection Mosaic
		$('#collection-mosaic .item').hover(function(){
			
			var $overlay = $('.item-overlay', this);
			var $category = $('.item-category', this);
			var $arrow = $('.item-arrow', this);
			
			TweenMax.to( $overlay, 1, { backgroundColor:"rgba(44, 26, 41, 0.8)",  ease:Power4.easeOut } );
			TweenMax.to( $category, 1, { marginTop:"20px",  ease:Elastic.easeOut.config( 1, 0.3) } );
			TweenMax.to( $arrow, 1, { marginTop:"20px",  ease:Elastic.easeOut.config( 1, 0.3) } );
	
		},
		function(){
			
			var $overlay = $('.item-overlay', this);
			var $category = $('.item-category', this);
			var $arrow = $('.item-arrow', this);
	
			TweenMax.to( $overlay, 1, {backgroundColor:"rgba(44, 26, 41, 0.5)",  ease:Power4.easeOut } );
			TweenMax.to( $category, 1, { marginTop:"0",  ease:Elastic.easeOut.config( 1, 0.3) } );
			TweenMax.to( $arrow, 1, { marginTop:"0",  ease:Elastic.easeOut.config( 1, 0.3) } );
		
		});
		
		
		// Home 2 - Blog Readmore
		$('.post-read-more').hover(function(){
	
			TweenMax.to( $(this), 1, { marginLeft:"10px",  ease:Elastic.easeOut.config( 1, 0.3) } );
	
		},
		function(){
			
			TweenMax.to( $(this), 1, { marginLeft:"0",  ease:Elastic.easeOut.config( 1, 0.3) } );
		
		});
		
		// Home 2 - Counters
		$('#counters').appear(function(){			
			
			$('.count-number span').each(function() {
				
				var end = $(this).data('end');
				
				TweenMax.to($(this), 1, {text:""+end+"", ease:Linear.easeNone});
                
            });
			

		},{accX: 0, accY: -200});
		
		
		// Shop - List
		$('#products-list .item-wrap').hover(function(){
			
			var $overlay = $('.item-overlay', this);
			var $button = $('.btn-cart', this);
		
			TweenMax.to( $overlay, 1, { backgroundColor:"rgba(44, 26, 41, 0.5)",  ease:Power4.easeOut } );
			TweenMax.to( $button, 1, { left:"50%", ease:Elastic.easeOut.config( 0.4, 0.6) } );
				
		},
		function(){
			
			var $overlay = $('.item-overlay', this);
			var $button = $('.btn-cart', this)
			
			TweenMax.to( $overlay, 1, {backgroundColor:"rgba(44, 26, 41, 0.7)",  ease:Power4.easeOut } );
			TweenMax.to( $button, 1, { left:"-50%", ease:Elastic.easeOut.config( 0.4, 0.6) } );
			
		});
		
		// Shop - Grid
		$('#products-grid .item-wrap').hover(function(){
			
			var $overlay = $('.item-overlay', this);
			var $button = $('.btn-cart', this);
			var $link = $('.item-link', this);
		
			TweenMax.to( $overlay, 1, { backgroundColor:"rgba(44, 26, 41, 0.5)",  ease:Power4.easeOut } );
			TweenMax.to( $button, 1, { left:"50%", ease:Elastic.easeOut.config( 0.4, 0.6) } );
			TweenMax.to( $link, 1, { bottom:"50px", ease:Elastic.easeOut.config( 0.4, 0.6) } );
				
		},
		function(){
			
			var $overlay = $('.item-overlay', this);
			var $button = $('.btn-cart', this);
			var $link = $('.item-link', this);
			
			TweenMax.to( $overlay, 1, {backgroundColor:"rgba(44, 26, 41, 0.7)",  ease:Power4.easeOut } );
			TweenMax.to( $button, 1, { left:"-50%", ease:Elastic.easeOut.config( 0.4, 0.6) } );
			TweenMax.to( $link, 1, { bottom:"-50px", ease:Elastic.easeOut.config( 0.4, 0.6) } );
			
		});
		
		// Single Product - Carousel
		$('.slider-item').owlCarousel({
		 		
				items: 1,
				nav: true,
				dots: false,
				autoplay: true,
				//loop: true,
				navContainer: '.slider-nav',
				navText: ['<div class="slider-arrow arrow-prev"><i class="tpl-icon-keyboard-arrow-left"></i></div>','<div class="slider-arrow arrow-next"><i class="tpl-icon-keyboard-arrow-right"></i></div>'],
				smartSpeed:450,				
							 
		});
		
		$('#slide-item-1').click(function(){
			$('.slider-item').trigger('to.owl.carousel', [0, 300, true])
		});
		
		$('#slide-item-2').click(function(){
			$('.slider-item').trigger('to.owl.carousel', [1, 300, true])
		});
		
		$('#slide-item-3').click(function(){
			$('.slider-item').trigger('to.owl.carousel', [2, 300, true])
		});
		
		
		// Model - Contents		
		var $thumb = $('.model-wrap-thumb');
		var $name = $('.model-name');
		var $cat = $('.model-category');
		var $txt = $('.model-info');
	
		TweenMax.fromTo( $thumb, 1, { opacity:'0', marginLeft:'-50px' }, {opacity:'1', marginLeft:'0',  ease:Power4.easeOut, delay:1} );
		TweenMax.fromTo( $name, 1, { opacity:'0', marginLeft:'0' }, {opacity:'1', marginLeft:'-60px',  ease:Power4.easeOut, delay:1.3} );
		TweenMax.fromTo( $cat, 1, { opacity:'0', marginTop:'20px' }, {opacity:'1', marginTop:'0',  ease:Power4.easeOut, delay:1.6} );
		TweenMax.fromTo( $txt, 0.6, { opacity:'0', marginTop:'20px' }, {opacity:'1', marginTop:'0',  ease:Power4.easeOut, delay:1.9} );
		
		// Model - Grid
		$('#gallery-masonry .item').hover(function(){
			
			var $overlay = $('.photo-overlay', this);
		
			TweenMax.to( $overlay, 1, { opacity:1,  ease:Power4.easeOut } );
				
		},
		function(){
			
			var $overlay = $('.photo-overlay', this);
			
			TweenMax.to( $overlay, 1, {opacity:0,  ease:Power4.easeOut } );
			
		});
					

		// LIGHTBOX MENU
		$('.btn-open-menu').click(function(){
	
			$('#popup-menu').fadeIn(1000);
			
			TweenMax.to('#wrap', 1, 
				{ filter:"blur(2px)", delay:0 }
			);

		});
		
		$('.btn-close-menu').click(function(){

			$('#popup-menu').fadeOut(500);

			TweenMax.to('#wrap', 1, 
				{ filter:"", delay:0 }
			);
			
		});
		
		
		// LIGHTBOX SEARCH
		$('.btn-search').click(function(){

			$('#popup-search').fadeIn(500);

			TweenMax.to('#wrap', 1, 
				{ filter:"blur(2px)", delay:0 }
			);

		});
		
		$('.btn-close-search').click(function(){ 

			$('#popup-search').fadeOut(500);

			TweenMax.to('#wrap', 1, 
				{ filter:"", delay:0 }
			);
			
		});
		
		// CLASSIC SUBMENUS	
		$('#horizontal-menu .nav-menu ul .item-parent').hover(function(){
			
			var $elem = $('.list-children', this);
			
			TweenMax.set( $elem, { top:"120px" } );
			TweenMax.to( $elem, 0.6, { opacity:1, top:"100px", display:"block",  ease:Power4.easeOut } );
	
		},
		function(){
			
			var $elem = $('.list-children', this);
			
			TweenMax.to( $elem, 0.6, { opacity:0, display:"none", top:"120px",  ease:Power4.easeOut } );
			
		});
		
		// POPUP SUBMENUS		
		$('#popup-menu .nav-menu ul .item-parent').hover(function(){
			
			var $elem = $('.list-children', this);
			
			TweenMax.to( $elem, 1, { height:"50",  ease:Power4.easeOut } );
	
		},
		function(){
			
			var $elem = $('.list-children', this);
			
			TweenMax.to( $elem, 1, { height:"0",  ease:Power4.easeOut } );
			
		});
		
		// LIGHTBOX
		$("a[rel^='attachment']").prettyPhoto();
					

	}); // END LOAD EVENT

}); // END JQUERY