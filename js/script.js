$(function(){
  // ------------------------------------------------------- $gnb 클릭이벤트
  var $gnb=$('nav>.gnb>li>a');
  
  $gnb.click(function(event){
    event.preventDefault();
    var gnbIdx=$gnb.index(this);
    
    $(this).parent().addClass('on').siblings().removeClass('on');
    $('.cont').hide().eq(gnbIdx).show();
  }); // end of $gnb 클릭이벤트
  
  
  // ------------------------------------------------------- portfolio 이벤트
  var num=0;
  $('.go_port').click(function(){
    $('#portfolio>article').hide();
  });
  
    // portfolio 이벤트 web
      function web(){
        var title=$('#web .port>img').eq(num).attr('alt');
        $('.num').text('0'+(num+1));
        $('#web .port>img').removeClass('on').eq(num).addClass('on');
        $('#web .port>figcaption').removeClass('on').eq(num).addClass('on');
        $('.title').text(title);
      }

      $('.go_web').click(function(){
        num=0;
        $('#portfolio>article').hide();
        $('#web').show();
        web();
      }); // end of .go_web

      $('#web .left').click(function(){
        var idx=$('#web .port').length;
        if(num>0){
          num--;
        }else{
          num=idx-1;
        }
        web();
      }); // end of #web .left

      $('#web .right').click(function(){
        var idx=$('#web .port').length;
        if(num<idx-1){
          num++;
        }else{
          num=0;
        }
        web();
      }); // end of #web .right

    // portfolio 이벤트 design
      function design(){
        var title=$('#design .port>img').eq(num).attr('alt');
        $('.num').text('0'+(num+1));
        $('#design .port>img').removeClass('on').eq(num).addClass('on');
        $('#design .port>figcaption').removeClass('on').eq(num).addClass('on');
        $('.title').text(title);
      }

      $('.go_design').click(function(){
        num=0;
        $('#portfolio>article').hide();
        $('#design').show();
        design();
      }); // end of .go_design

      $('#design .left').click(function(){
        var idx=$('#design .port').length;
        if(num>0){
          num--;
        }else{
          num=idx-1;
        }
        design();
      }); // end of #design .left

      $('#design .right').click(function(){
        var idx=$('#design .port').length;
        if(num<idx-1){
          num++;
        }else{
          num=0;
        }
        design();
      }); // end of #design .right
}); // end of function


