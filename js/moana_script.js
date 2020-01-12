$(function(){
  var wH=$(window).height();

  $('section').each(function(index){
    $(this).attr("data-index",wH*index);
  });
  
  $('section').on("mousewheel",function(e){
    var sectionPos=parseInt($(this).attr("data-index"));
    if(e.originalEvent.wheelDelta>=0){
      $("html,body").stop().animate({scrollTop:sectionPos-wH},30);
      return false;
    }else if(e.originalEvent.wheelDelta<0){
      $("html,body").stop().animate({scrollTop:sectionPos+wH},30);
      return false;
    }
  });
  
  
  // 스크롤 이벤트
  var introH=$('#intro').height();
  
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
  
  $('#gnb>li').on('click focus',function(){
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
  
  
  // #character 클릭이벤트
  var c=0;
  var cNum=$('#c_list li').length;
  
  function character(){
    $('#c_list ul').stop().animate({left:-160*c});
    if(c==0){
      $('#c_list .left').hide();
    }else if(c==cNum-4){
      $('#c_list .right').hide();
    }else{
      $('#c_list .right').show();
      $('#c_list .left').show();
    }
  }
  
  $('#c_list .right').on('click',function(){
    if(c<cNum-4){
      c++;
      character();
    }
  });
  
  $('#c_list .left').on('click',function(){
    if(c>0){
      c--;
      character();
    }
  });
  
  
  $('#c_list li').on('click',function(){
    var idx=$(this).index();
    
    $('#c_main>figure').stop().animate({top:150,opacity:0});
    $('#c_main>figure>figcaption').stop().animate({top:180,opacity:0});
    $('#c_main>figure').eq(idx).stop().delay(300).animate({top:0,opacity:'1'});
    $('#c_main>figure').eq(idx).children('figcaption').stop().delay(400).animate({top:100,opacity:'1'});
  });
  
  
  // #still-cut 클릭이벤트
  var s=0;
  var num=$('#photo_s>ul>li').length;
  
  function photo(){
    $('#photo_s>ul').stop().animate({left:-160*s});
    if(s==0){
      $('#photo>.left').hide();
    }else if(s==num-5){
      $('#photo>.right').hide();
    }else{
      $('#photo>.left').show();
      $('#photo>.right').show();
    }
  }

  $('#photo>.right').on('click',function(){
    if(s<num-5){
      s++;
      photo();
    }
  });
  
  $('#photo>.left').on('click',function(){
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
  
  
  // #production 클릭이벤트
  $('#production .right').on('click',function(){
    $('#note>div').stop().animate({left:-950},function(){
      $('#note figure:first').appendTo('#note>div');
      $('#note>div').css({left:0});
    });
  });
  
  $('#production .left').on('click',function(){
    $('#note>div').css({left:-950});
    $('#note figure:last').prependTo('#note>div');
    $('#note>div').stop().animate({left:0});
  });
}); // end of function