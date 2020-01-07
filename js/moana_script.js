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
    
    $('.water1').css({right:0-(posX/50),bottom:-160+(posY/70)});
    $('.water2').css({right:50+(posX/70),bottom:0-(posY/50)});
  }); // end of #intro mousemove
  
  
  $('#intro>button').on('click',function(){
    $('html,body').stop().animate({scrollTop:introH});
  }); // end of #intro>button
  
  
  // #still-cut 클릭이벤트
  var s=0;
  var num=$('#photo_s>ul>li').length;
  function photo(){
    $('#photo_s>ul').stop().animate({left:-160*s});
    if(s==0){
      $('#photo>.right').hide();
    }else if(s==num-5){
      $('#photo>.left').hide();
    }else{
      $('#photo>.left').show();
      $('#photo>.right').show();
    }
  }

  $('#photo>.left').on('click',function(){
    if(s<num-5){
      s++;
      photo();
    }
  });
  
  $('#photo>.right').on('click',function(){
    if(s>0){
      s--;
      photo();
    }
  });
  
  $('#photo_s>ul>li').on('click',function(){
    var s=$(this).index();
    
    $(this).addClass('on').siblings().removeClass('on');
    $('#photo_b>img').attr('src',"images/moana/stillcut"+(s+1)+"_b.jpg");
  });
}); // end of function