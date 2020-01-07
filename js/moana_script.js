$(function(){
  var introH=$('#intro').height();
  var wH=$(window).height();
  var wTop=$(window).scrollTop();
  
  $(window).on('scroll',function(){
    var wTop=$(window).scrollTop();
    if(wTop>=introH-100){
      $('header').css({opacity:'1'});
    }else{
      $('header').css({opacity:0});
    }
    
    for(var idx=0; idx<5; idx++){
      if(wTop>=(wH*idx)-200 && wTop<wH*(idx+1)){
        $('#gnb>li').removeClass('on');
        $('#gnb>li').eq(idx).addClass('on');
      }
    }
  }); // end of scroll
  
  $('#gnb>li').on('click',function(){
    var idx=$(this).index();
    var top=wH*idx;
    $('html,body').stop().animate({scrollTop:top},500);
    $(this).addClass('on').siblings().removeClass('on');
  }); // end of #gnb
  
  
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