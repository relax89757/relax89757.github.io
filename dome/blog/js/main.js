$(function(){
	
	var sidebar=$('#sidebar'),
	    mask=$('.mask'),
	    sidebar_trigger=$('#sidebar_trigger'),
	    toTop=$('.to-top');
	    
    sidebar_trigger.on('click',function(){
		
		mask.fadeIn();
	    sidebar.css('right',0);
	    // sidebar.animate({right:0})
	 });

	mask.on('click',function(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	})

	toTop.on('click',function(){
		$('body').animate({
			scrollTop:0
		},800)
	})
	
	// $(window).resize(function(){
	// 	$('nav').css({'width':$(window).width();})
	// })
	

	$(window).on('scroll',function(){
       
		    // if($(window).scrollTop()>100px){
      //   	$('nav').css({'position':'fixed','z-index':3,'width':$(window).width()})
      //   }
        
			if($(window).scrollTop()>$(window).height()){
		        toTop.fadeIn();
		        // $('nav').css({'position':'fixed','z-index':3});
			}else{
				toTop.fadeOut();
			}
			
     });   
	$(window).trigger('scroll')
});