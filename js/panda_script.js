$(function(){
 /* page move */
  // 변수부
  var $tnb=$('header>nav>.tnb>li>a');
  var $gnb=$('header>nav>.gnb>li>a');
  var nowIdx=0;
  var arrTopVal=[];
  
 $('article').each(function(idx){
  arrTopVal[idx]=$(this).offset().top;
 });
 
 function pageAni(topVal){
  $('html,body').stop().animate({
   scrollTop:topVal
  });
 }
 
 // top menu
 $tnb.on('click',function(event){
  event.preventDefault();
  mnuIdx=$tnb.index(this);
  pageAni(arrTopVal[mnuIdx]);
 });
 
 // fixed menu
 $gnb.on('click',function(event){
  event.preventDefault();
  mnuIdx=$gnb.index(this);
  pageAni(arrTopVal[mnuIdx]);
 });
 
 $(window).on('scroll',function(){
  var scrollTop=$(this).scrollTop();
  
  for(var i=0; i<6; i++){
   if(scrollTop>=arrTopVal[i]){
    $gnb.eq(i).parent().addClass('on').siblings().removeClass('on');
   }
  }
 });
 
 /* main page slide */
 var $bg_slides=$('.cont1>.bg-slides>ul');
 var $bgW=$('.cont1>.bg-slides>ul>li').width();
 var $main_slides=$('.cont1>.content>.slides>ul');
 var $mainW=$('.cont1>.content>.slides>ul>li').width();
 
 function mainSlide(){
  // bg slides
  $bg_slides.stop().animate({left:-$bgW},600,function(){
   $('.cont1>.bg-slides>ul>li:first').appendTo($bg_slides);
   $bg_slides.css({left:0},600);
  });
  // main slides
  $main_slides.stop().animate({left:-$mainW},600,function(){
   $('.cont1>.content>.slides>ul>li:first').appendTo($main_slides);
   $main_slides.css({left:0},600);
  });
 }

 function mainSlide2(){
  // bg slides
  $('.cont1>.bg-slides>ul>li:last').prependTo($bg_slides);
  $bg_slides.css({left:-$bgW});
  $bg_slides.stop().animate({left:0},600);
  // main slides
  $('.cont1>.content>.slides>ul>li:last').prependTo($main_slides);
  $main_slides.css({left:-$mainW});
  $main_slides.stop().animate({left:0},600);
 }
 
 var timer=setInterval(mainSlide,4000);
 
 // btn
 $('.prev').on('click',function(){
  clearInterval(timer);
  mainSlide2();
  timer=setInterval(mainSlide,4000);
 }); // end of .prev click event
 
 $('.next').on('click',function(){
  clearInterval(timer);
  mainSlide(); 
  timer=setInterval(mainSlide,4000);
 }); // end of .next click event
 
 /* appearance page slide */
 var $slides=$('.cont3>.slides>ul>li');
 var $indicator=$('.cont3>.text-container>.btn>ul>li>a');
 var nowNum=0;
 
 function nextIdx(){
  if(nowNum<2){
   nowNum++;
  }else{
   nowNum=0;
  }
 }
 
 function slideMove(){
  // indicator
  $indicator.eq(nowNum).parent().addClass('on2').siblings().removeClass('on2');
  // slides
  $slides.filter('.on2').stop().fadeOut(1000).removeClass('on2');
  $slides.eq(nowNum).stop().fadeIn(1000).addClass('on2');
 }
 
 var auto=setInterval(function(){
  nextIdx();
  slideMove();
 },3000);
 
 $indicator.on('click',function(event){
  event.preventDefault();
  nowNum=$indicator.index(this);
  clearInterval(auto);
  slideMove();
  auto=setInterval(function(){
   nextIdx();
   slideMove();
  },3000);
 });
 
 /* growth page photo gallery */
 var $thmbs=$('section>.cont4>.content>.smallImg>ul>.img>a');
 var $sImg=$('section>.cont4>.content>.smallImg>ul');
 var num=0;
 
 $thmbs.on('click',function(event){
  event.preventDefault();
  
  var imgSrc=$(this).attr('href');
  var imgAlt=$(this).children('img').attr('alt');
  
  $('.bigImg').html('<img src='+imgSrc+' alt='+imgAlt+'>');
 }); // end of $thmbs click evt

 $('.movie').on('click',function(event){
  event.preventDefault();
  $('.bigImg').html('<iframe width="603" height="400" src="https://www.youtube.com/embed/i_w1_FY-ucI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
 });

 $('.up').on('click',function(){
  if(num>0){
   num--;
  }else{
   num=9;
  }
  $sImg.stop().animate({top:-221},function(){
   $('.smallImg>ul>li:first').appendTo($sImg);
   $sImg.css({top:0});
  });
 }); // end of .prev click evt
 
 $('.down').on('click',function(){
  if(num<9){
   num++;
  }else{
   num=0;
  }
  $sImg.stop().animate({top:-221},function(){
   $('.smallImg>ul>li:last').prependTo($sImg);
   $sImg.css({top:0});
  });
 }); // end of .next click evt
});