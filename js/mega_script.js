$(function(){
  
  
 // --------------------------------------------------- top값
  $('#banner').css({marginTop:$('header').height()});
  $(window).resize(function(){
    $('#banner').css({marginTop:$('header').height()});
  });
  
 // --------------------------------------------------- swiper 배너 슬라이드
 var mySwiper=new Swiper('#banner .swiper-container',{
  loop: true,
  pagination: {
    el: '#banner .swiper-pagination',
    clickable: true
  },
  autoplay: {
   delay: 4000
  }
 }); // end of swiper 배너 슬라이드
 
  
 // --------------------------------------------------- aisde
  var $headerH=$('header').height();
  var $bannerH=$('#banner').height();
  var h=$headerH+$bannerH;
  
  $(window).on('scroll',function(){
    var scroll=$(this).scrollTop();
    if(scroll>=h){
      $('aside').css({position:'fixed',right:'170px',top:$headerH+50});
    }else{
      $('aside').css({position:'absolute',right:'-150px',top:'30px'});
    }
  });
  
 
 // --------------------------------------------------- 영화 차트 탭 메뉴
 var $movieTab=$('.movie_title>ul>li');
 var $movieCont=$('.movie_chart>div');
 var nowIdx=0;

 $movieTab.on('click',function(event){
  event.preventDefault();
  nowIdx=$(this).index();
  
  $movieTab.eq(nowIdx).addClass('on').siblings().removeClass('on');
  $movieCont.eq(nowIdx).show().siblings().hide();
 }); // end of 영화 차트 탭 메뉴

// --------------------------------------------------- 영화 차트 슬라이드
// ------------------------------------------------ pc버전
 var is_draggable=false;
 var x=0;
 var pos_x=0;
 
 $('.movie_chart>div').mousemove(function(event){
  if(is_draggable){
   x=parseInt($(this).css('left'))-(pos_x-event.pageX);
   pos_x=event.pageX;
   if(x>0){
    x=0;
   }
   if(x<-1540){
    x=-1540
   }
   $(this).css({left:x});
  }
  return false;
 });
 $('.movie_chart>div').mousedown(function(event){
  pos_x=event.pageX;
  is_draggable=true;
  return false;
 });
 $('body,html').mouseup(function(){
  is_draggable=false;
  return false;
 });
 
// ------------------------------------------------ 모바일 버전
 $('.movie_chart>div').on('touchmove',function(event){
  if(is_draggable){
   x=parseInt($(this).css('left'))-(pos_x-event.pageX);
   pos_x=event.pageX;
   
   $(this).css({left:x});
  }
  return false;
 });
 $('.movie_chart>div').on('touchstart',function(event){
  pos_x=event.pageX;
  is_draggable=true;
  return false;
 });
 $('.movie_chart').on('touchend',function(){
  is_draggable=false;
  return false;
 });
  
  
// --------------------------------------------------- 새로운 이벤트 swiper 슬라이드
  var swiper = new Swiper('.event_left .swiper-container',{
    loop: true,
    pagination: {
      el: '.event_left .swiper-pagination',
      clickable: true
    },
    autoplay: {
     delay: 3000
    }
  }); // end of 새로운 이벤트 swiper 슬라이드
  
  
// --------------------------------------------------- 이미지 random
  var random=Math.floor(Math.random()*$('.random img').length);
  $(window).load(function(){
    $('.random img').hide().eq(random).show();
  });
  
  var random=Math.floor(Math.random()*$('.random2 img').length);
  $(window).load(function(){
    $('.random2 img').hide().eq(random).show();
  });
  
  
  $('.notice>ul>li>a').on('click',function(event){
    event.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('ul').hide();
    $(this).siblings('ul').show();
  });
  
}); // end of function
