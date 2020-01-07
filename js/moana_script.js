$(function(){
  var introH=$('#intro').height();
  $(window).on('scroll',function(){
    var wTop=$(window).scrollTop();
    if(wTop>=introH){
      $('header').css({opacity:'1'});
    }else{
      $('header').css({opacity:0});
    }
  }); // end of scroll
  
  $('#intro').on('mousemove',function(e){
    var posX=e.pageX;
    var posY=e.pageY;
    
    $('.water1').css({left:400-(posX/50),bottom:-160+(posY/70)});
    $('.water2').css({left:80+(posX/70),bottom:-180-(posY/50)});
  }); // end of #intro mousemove
  
  $('#intro>button').on('click',function(){
    $('html,body').stop().animate({scrollTop:introH});
  }); // end of #intro>button
  
}); // end of function