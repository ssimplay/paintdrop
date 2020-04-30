$(function(){
   
    /* 햄버거메뉴 클릭 */
    $('.mnb button').click(function(){
        
        $(this).fadeOut();
        $('.mnb_inner').animate({
            marginRight : 0
        }, 1000 );
        
    })
    
    /* 닫기 버튼 클릭 */
    $('.exit').click(function(){
        
        $('.mnb button').fadeIn();
        $('.mnb_inner').animate({
            marginRight : '-30%'
        }, 1000 );
        
    })
    
    
});