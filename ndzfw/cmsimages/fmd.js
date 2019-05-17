/*大背景*/
jQuery("#big-body").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,delayTime:500});
/*大背景*/


/*初始动画*/
 $("#ndlogo").animate({left:'50%',top: '117px',"margin-left":"-300px"},1000);
  $("#ndform").animate({left:'50%',top: '247px',"margin-left":"-243px"},1000);
  $(".content-box").css("display","none");
  $(".friendship-link").css("display","none");
  $(".height-20").css("display","none");
/*初始动画*/

$(".anniu").click(function(){
  $(".anniu").toggleClass("anniu-dow");
  if($('.anniu').hasClass('anniu-dow'))
{
  /*打开的时候*/
  $("body").addClass("bodyyy");
  $("#big-body").css("display","none");
  $("#ndlogo").animate({left:'0px',top: '80px',"margin-left":"0px"},1000);
  $("#ndform").animate({right:'0px',top: '100px',"margin-left":"119px"},1000);
  $(".content-box").slideDown("slow");
  $(".content").animate({'padding-bottom':'20px'});
  $(".logo").animate({height:'250px'});
  $("#kongbai").slideUp("slow");
  $(".friendship-link").slideDown("slow");
  $(".height-20").slideDown("slow");
  /*打开的时候*/
}else
{
  /*缩起的时候*/
  $("body").removeClass("bodyyy");
  $("#big-body").css("display","block");
  $("#ndlogo").animate({left:'50%',top: '117px',"margin-left":"-300px"},1000);
  $("#ndform").animate({left:'50%',top: '247px',"margin-left":"-243px"},1000);
  $(".content-box").slideUp("slow");
  $(".content").animate({'padding-bottom':'30px'});
  $(".logo").animate({height:'330px'});
  $("#kongbai").slideDown("slow");
  $(".friendship-link").slideUp("slow");
  $(".height-20").slideUp("slow");

  /*缩起的时候*/
}
})

/*导航其他按钮*/
$(".nav span").each(function(){
  $(this).click(function(){
    $(".anniu").addClass("anniu-dow");
    if($('.anniu').hasClass('anniu-dow')){
          $("body").addClass("bodyyy");
  $("#big-body").css("display","none");
  $("#ndlogo").animate({left:'0px',top: '80px',"margin-left":"0px"},1000);
  $("#ndform").animate({right:'0px',top: '100px',"margin-left":"119px"},1000);
  $(".content-box").animate({height:'820'});
  $(".content").animate({'padding-bottom':'20px'});
  $(".logo").animate({height:'250px'});
  $("#kongbai").slideUp("slow");
  $(".friendship-link").slideDown("slow");
  $(".height-20").slideDown("slow");
    }
  })
})
/*导航其他按钮*/

jQuery(".content").slide({titCell:".nav span",mainCell:".content-box",autoPlay:false});


jQuery(".f-chart").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,delayTime:500});

$(".fmd_focusbox,.fmd_focusbox2").slide({titCell:".num li", mainCell:".pic",effect:"fold",prevCell:'.preva',nextCell:'.nexta', autoPlay:true,trigger:"click",
startFun:function(i){
$(".fmd_focusbox .txt li").eq(i).animate({"bottom":0}).siblings().animate({"bottom":-35});
}
});

jQuery(".journalism-list,.government-list").slide({titCell:"h2 span",mainCell:".yswitch",targetCell:".mras a",autoPlay:false});



     

                  
                  