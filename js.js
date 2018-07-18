$(function(){
	  
	    var timer=null;
	    var num =0 ;
	    var x=null;
	    var y=null;
	    
	    function play(speed=500,time=2500){
//       var c=arguments[0]?arguments[0]:500 ;
//       var d=arguments[1]?arguments[1]:2500;
         
         x=speed;
          y=time;
          
          clearInterval(timer);
	        timer = setInterval(function(){
	       	num++;
            
            if(num>4){ num = 0;}
	    	
	    	$('.all .show ul').stop().animate({left:-num*650},speed);
	    	$('.all ol li').eq(num).addClass('cur').siblings().removeClass('cur');
	                                      },time);
	         };
	    
	       play();
	
	        $('.all').hover(function(){
	        	clearInterval(timer);
	        },function(){
	        	 play(x,y);
	        });
	
	        $('.all ol li').mouseover(function(){
	        	$(this).addClass('cur').siblings().removeClass('cur');
	        	$('.all ul').stop().animate({ left:-$(this).index()*650});
	        	num =$(this).index();
	         });
	
           
             $('#sh').click(function(){
             	$('#on').stop().slideToggle();
             });   // 开启隐藏赛亚人
             
             
             $('#on').click(function(){
             	 
             	 play(0,0);
             });
	
	        $('#res').click(function(){
	      
	        	play(500,2500);   //重置
	        });
	        
	        $('#s1').click(function(){
	        	play(500,1000);
	        });
	        
	        $('#s2').click(function(){
	        	play(500,2000);
	        });
	        
	        $('#s3').click(function(){
	        	play(500,3000);
	        });
	        
	         $('#s4').click(function(){
	        	play(500,4000);
	        });
	        
	        $('#s5').click(function(){
	        	play(500,5000);
	        });
	        
	       
	        $('#fast1').click(function(){
                play(x-100,y-100);
        });
	        
	        $('#slow1').click(function(){
          	 play(x+100,y+100);
	        });
	       	
	    $('#spe').click(function(){
	        	console.log(x);
	        	console.log(y);
	        });
});
