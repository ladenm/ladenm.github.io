$(document).ready(function(){
    $("#box1 .colorLayer").animate({left:"0px"},300);
    $("#box1 .colorLayer").delay(400).animate({left:"650px"},300);
    $("#box1 .title").animate({left:"0px"});

    $("#box2 .colorLayer").delay(300).animate({left:"0px"},300);
    $("#box2 .colorLayer").delay(400).animate({left:"650px"},300);
    $("#box2 .title").delay(300).animate({left:"0px"});

    $(window).scroll(function(){
       
        if($(this).scrollTop() >= 310 && $(this).scrollTop() <= 350)
        {
            $(".colorLayer2").animate({left:"0px"},300);
            $(".image img").animate({left:"0px"});
            $(".colorLayer2").delay(400).animate({left:"850px"},300);
            $(".colorLayer2").delay(400).animate({width:"0px"},300);
            
            
            $(".colorLayer3").delay(1100).animate({left:"0px"},300);
            $(".info").delay(1100).animate({left:"0px"});
            $(".colorLayer3").delay(400).animate({left:"400px"},300);
            $(".colorLayer3").delay(400).animate({width:"0px"},300);
        }
      
    });
});
$(document).ready(function(){
    $("#MenuIcon").click(function(){
         $("#MainMenu").css("left","0px");
         function showMenu(){
             $("#MainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,100% 100%,0% 100%)");
             $("#MenuIcon").animate({right:'-100'},300);
         }
         setTimeout(showMenu,100);
    });
     
     $("#close").click(function(){
             $("#MainMenu").css("-webkit-clip-path","polygon(0 0,0% 0,100% 100%,0% 100%)");
             function hideMenu(){
                     $("#MainMenu").css("left","-300px");
                 $("#MenuIcon").animate({right:'50'},300);
             }
         setTimeout(hideMenu,300);
         
         function originalLayout(){
             $("#MainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,0% 100%,0% 100%)");
         }
         setTimeout(originalLayout,600);
     });
 });

