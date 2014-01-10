
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