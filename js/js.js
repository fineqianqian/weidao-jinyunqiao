 
$(function(){

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
       


        onInit: function(swiper){ 
			    swiperAnimateCache(swiper);
			    swiperAnimate(swiper); 
			     $("#top").hide();
			     if(swiper.activeIndex==0){
			     	$("#top").slideDown(700);
			     }
			
			}, 
		onSlideChangeEnd: function(swiper){ 
			    swiperAnimate(swiper); 
			    if(swiper.activeIndex==2||swiper.activeIndex==3||swiper.activeIndex==4){
                 $("#top").css("background-color","black");
                 $("#nav").css("background-color","black");
                 $("#list").css("color","white");
                 $("#login span").css("color","white");
			    }
			    else if(swiper.activeIndex==0){
			     $("#top").css("background-color","lightgray");
                 $("#nav").css("background-color","lightgray");
                 $("#list").css("color","gray");
                 $("#login span").css("color","#A52A2A");

			    }
			    else if(swiper.activeIndex==1){
                 $("#top").css("background-color","lightgray");
                 $("#nav").css("background-color","lightgray");
                 $("#list").css("color","gray");
                 $("#login span").css("color","#A52A2A");
                 
   
			    }
			}
           
		  

    });




 if( localStorage.getItem("temp"))
 {
   $("#span1").html(localStorage.getItem("temp"));
   $("#span2").html("退出");
   $("#span2").click(function(){
    
   	localStorage.removeItem("temp");
   	location.href="homepage.html";
    
   })
   


 }

 else {
 	$("#span1").html("登录");
 	$("#span1").click(function(){
 		location.href="login.html";
 	});
 	$("#span2").html("注册");
 	$("#span2").click(function(){
 		location.href="register.html";
 	});
 }
   


});

 