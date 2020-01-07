$(function(){
  // aside 이벤트
  $(window).on('scroll',function(){
    var wTop=$(window).scrollTop();
    
    if(wTop>$('header').height()/2){
      $('aside').css({top:'80px'});
    }else{
      $('aside').css({top:'180px'});
    }
  }); // end of window scroll
  
  
  // all_menu 이벤트
  $('.all_menu').on('click',function(){
    $('#all_gnb').show();
  }); // end of .all_menu
  
  $('#all_gnb .close').on('click',function(){
    $('#all_gnb').hide();
  }); // end of .close
  
  
  // top버튼 이벤트
  $('.top').on('click',function(){
    $('html,body').stop().animate({scrollTop:0});
  }); // end of .top
  
  
  // banner slides 이벤트
  var $img=$('.slides>img');
  var imgW=$img.width();
  var imgNum=$img.length;
  var num=0;
  var newNum=num+1;
  
  function slides(){
    $('.btn').filter('.on').removeClass('on');
    $('.btn').eq(newNum).addClass('on');
    $img.eq(num).stop().animate({left:-imgW},1000);
    $img.eq(newNum).css({left:imgW});
    $img.eq(newNum).stop().animate({left:0},1000,function(){
      num=newNum;
    });
  }
  function auto(){
    newNum=num+1;
    if(newNum>=imgNum){
      newNum=0;
    }
    slides();
  }
  var move=setInterval(auto,5000);
  
  $('.btn').on('click',function(){
    clearInterval(move);
    newNum=$(this).index();
    if(num!=newNum){
      slides();
    }
    $('.stop').show();
    $('.play').hide();
    move=setInterval(auto,5000);
  }); 
  
  $('.stop').on('click',function(){
    clearInterval(move);
    $(this).hide();
    $('.play').show();
  });
  
  $('.play').on('click',function(){
    move=setInterval(auto,5000);
    $(this).hide();
    $('.stop').show();
  }); // end of banner slides 이벤트
  
  
  // .fs(페밀리사이트) 이벤트
  $('.fs>h3').on('click',function(){
    $('.fs>h3>span').toggleClass('up');
    $('.fs>ul').toggle();
  }); // end of .fs
}); // end of function
