$(function(){
  // top banner 슬라이드 이벤트
 function topbanner(){
  $('.top_banner>ul').animate({top:-60},function(){
   $('.top_banner>ul>li:first').appendTo('.top_banner>ul');
   $('.top_banner>ul').css({top:0});
  });
 }
 setInterval(topbanner,3000);
 
  // menu 이벤트
 $('.sub').hide();
 $('.gnb>li').on('mouseover',function(){
  $('.sub').stop().slideDown();
 });
 $('.gnb>li').on('mouseleave',function(){
  $('.sub').stop().slideUp();
 });
 $('.gnb>li>a').focus(function(){
  $('.sub').stop().slideDown();
 });
 $('.last').blur(function(){
  $('.sub').stop().slideUp();
 });
 
  // main banner 슬라이드 이벤트
 function slides(){
  $('.slides>ul').animate({left:-1200},function(){
   $('.slides>ul>li:first').appendTo('.slides>ul');
   $('.slides>ul').css({left:0});
  });
 }
 setInterval(slides,5000);
 
  // .best 클릭 이벤트
 $('.best a').click(function(event){
  event.preventDefault();
 });
 $('#hanbok').click(function(){
  $('#dress,.dress,#bottom,.bottom,#acc,.acc').removeClass('on')
  $('#hanbok,.hanbok').addClass('on')
 });
 $('#dress').click(function(){
  $('#hanbok,.hanbok,#bottom,.bottom,#acc,.acc').removeClass('on')
  $('#dress,.dress').addClass('on')
 });
 $('#bottom').click(function(){
  $('#hanbok,.hanbok,#dress,.dress,#acc,.acc').removeClass('on')
  $('#bottom,.bottom').addClass('on')
 });
 $('#acc').click(function(){
  $('#hanbok,.hanbok,#dress,.dress,#bottom,.bottom').removeClass('on')
  $('#acc,.acc').addClass('on')
 });
 
  function saleSlide(){
   $('.sale_img>ul').animate({left:-276},function(){
    $('.sale_img>ul>li:first').appendTo('.sale_img>ul');
    $('.sale_img>ul').css({left:0});
   });
  }
  setInterval(saleSlide,4000);
 
  // join.html 이벤트
  $('#join').on('click',function(){
    alert('가입하시겠습니까?');
    open('../chicLine.html');
    });
  $('#id_re').on('click',function(){
      alert('사용가능한 아이디입니다.');
    });
  var list=$('.menu>ul>li');
  list.on('mouseenter',function(){
    $(this).find('.sub').stop().slideDown();
  });
  list.on('mouseleave',function(){
    $(this).find('.sub').stop().slideUp();
  });
 
  // main - side 이벤트
  $('.side2').hide();
  $('.side').click(function(){
   event.preventDefault();
   $(this).css({right:198}).hide();
   $('.side2').show('fast').css({right:208});
   $('.comuni').css({right:0});
  });
  $('.side2').click(function(){
   event.preventDefault();
   $(this).css({right:0}).hide();
   $('.side').show('fast').css({right:0});
   $('.comuni').css({right:-208});
  });
 
  $('address>a').click(function(event){
   event.preventDefault();
  });
});