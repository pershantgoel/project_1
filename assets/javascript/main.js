$(document).ready(function() {
        new WOW().init();
           var chck=false;
        $("#btn").click(function(){
           
        $("#main-nav").slideToggle(1000);
        }) ;
    $(document).scroll(function(){
        if($(document).scrollTop()>70){
            $("#header").addClass("active");
        }
        else{
            $("#header").removeClass("active");
        }
    });
    
     var owl=$('.owl-carousel');
        owl.owlCarousel({
   
        loop:true,
           autoplay:true,
        autoplayTimeout:1000,  
  });
    
});
