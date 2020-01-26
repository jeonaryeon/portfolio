// ---------------------------------------------------- 공통사항
$(function(){
  // gnb_b 이벤트  
  $('#gnb_b>ul>li, .gnb_bBg').on('mouseover',function(){
    $('header').css({backgroundColor:'rgba(255,255,255,1)'});
    $('#gnb_b .sub, .gnb_bBg').addClass('on');
    $('#gnb_b>ul>li>a').addClass('on');
    $('.tnb>.container>p').css({color:'#555'});
  });
  $('.gnb_bBg').on('mouseleave',function(){
    $('header').css({backgroundColor:'rgba(0,0,0,0)'});
    $('#gnb_b .sub, .gnb_bBg').removeClass('on');
    $('#gnb_b>ul>li>a').removeClass('on');
    $('.tnb>.container>p').css({color:'#ccc'});
  }); // end of gnb_b
  
  // gnb_s 이벤트  
  $('#gnb_s>ul>li>a').on('click',function(event){
    event.preventDefault();
    $('#gnb_s .sub').stop().slideUp();
    $(this).siblings('#gnb_s .sub').stop().slideToggle();
    $(this).parent().siblings().find('.down').removeClass('up');
    $(this).children('.down').toggleClass('up');
    $(this).parent().toggleClass('on').siblings().removeClass('on');
  });

  $('.hamBtn').on('click',function(){
    $('#gnb_s').stop().animate({right:0});
    $('.gnb_sBg').show();
  });
  $('.close').on('click',function(){
    $('#gnb_s').stop().animate({right:'-70%'});
    $('.gnb_sBg').hide();
  });
    
  $(window).resize(function(){
    if($(window).width()>=1024){
      $('#gnb_s').stop().animate({right:'-70%'});
      $('.gnb_sBg').hide();
    }
  }); // end of gnb_s
  
  
  // allMenu 이벤트
  $('.allMenu').on('click',function(e){
    e.preventDefault();
    $('.company_li').show();
  });
  $('.close2').on('click',function(){
    $('.company_li').hide();
  }); // end of allMenu
  
  
  // 서브페이지 h2 이벤트
  var title=$('#sub_menu .tit>a').text();
  $('.sub_banner h2').text(title);
  
  $('.tit>a').on('click',function(event){
    event.preventDefault();
    $('.sub_tab>ul').hide();
    $(this).siblings('ul').stop().slideToggle(200);
  });
  $('.sub_tab>a').on('click',function(event){
    event.preventDefault();
    $('.tit>ul').hide();
    $(this).siblings('ul').stop().slideToggle(200);
  });
}); // end of 공통사항


// ---------------------------------------------------- 메인페이지
$(function(){
  // banner 이벤트
  $(window).on('load',function(){
    $('#banner>.container').animate({
      opacity:'1',
      bottom:0
    },800,function(){
      $('.banner_bg>img').css({transform:'scale(1)'});
    });
  });
  
  
  // apart 이벤트
  var $aUl=$('.apart_right>ul');
  var $aLiW=$('.apart_right>ul').width()/4;
  
  $(window).resize(function(){
    $aLiW=$('.apart_right>ul').width()/4;
  });
  
  $('.a_btn>button').on('click',function(){
    var idx=$('.a_btn>button').index(this);
    $(this).addClass('on').siblings().removeClass('on');
    $('.apart_right>ul').stop().animate({left:-$aLiW*idx});
  });
  
}); // end of 메인페이지



