$(function(){
    
    
    /* 동작 */
    $(".w_btn li").click(function(){
       
        $(".w_inner").animate({ marginLeft:-1280*$(this).index() });
        
        
        /* 버튼 색상 */
        $(".w_btn li button").css({ background:"#fff2d8" , color:"#065471" });
        $(".w_btn li:eq("+$(this).index()+") button").css({ background:"#065471" , color:"#ffc045" });
        
        
        $(".w_inner .hide1").fadeOut();
        $(".w_inner .hide2").fadeOut();
        $(".w_inner .btn").fadeIn();
        
    });
    
    
    
    
    
   
    /* 더보기1 */
   $(".w_inner li #btn1").click(function(){
      
       $(".w_inner #btn1").fadeOut();
       $(".w_inner .hide1").fadeIn();
      
       
   }); 
    
    /* 더보기2 */
    $(".w_inner li #btn2").click(function(){
      
       $(".w_inner #btn2").fadeOut();
       $(".w_inner .hide2").fadeIn();
      
       
   }); 
    
    
    
    
    /* tablet */
var dw = document.documentElement.clientWidth;
    
    

    if(dw < 1298 ){
       
        
        /* portfolio */
        $(".w_btn li").click(function(){
            
            
            var uw = $(".w_inner ul").width();
            
               
            $(".w_inner").stop().animate({ marginLeft:-(uw*$(this).index()) });
                
        
        });
        
    };
    
    if(dw < 600 ){
       
       
        $("nav button").on('click',function(){
           
            $('.gnb').fadeIn(1500);
            $("nav button").fadeOut();
            
        });
        
        
        $(".exit").click(function(){
           
            $(".gnb").fadeOut(1500);
            $("nav button").fadeIn();
            
            
        });
        
    };
    
    
    
    
});








