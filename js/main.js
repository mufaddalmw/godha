function nav(e){
	$('.mainheader .nav ul > li').eq(e).addClass('active');
	
	/**
	 * Parallax Scrolling Tutorial
	 * For NetTuts+
	 *  
	 * Author: Mohiuddin Parekh
	 *	http://www.mohi.me
	 * 	@mohiuddinparekh   
	 */
	// Cache the Window object
	$window = $(window);
                
   $('[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		
	}); // window scroll Ends
	
	 });	
}
$(window).load(function(){
  /*! Only run this on old ugly Internet explorer browsers*/
  if ( $.browser.msie ) {
    // Don't break function
    function dontBreak( column ){
      $( column ).css({ 'margin-left' : '0' });
    }   
    // Don't break .span2 
    dontBreak('.span2:nth-child(6n+1)');
    // Don't break .span3 
    dontBreak('.span3:nth-child(4n+1)');
    // Don't break .span4 
    dontBreak('.span4:nth-child(3n+1)');
    // Don't break .span26
    dontBreak('.span6:nth-child(2n+3)');
  }
});