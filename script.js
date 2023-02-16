var typed=new Typed(".typing-text",{
    strings:["Designer","Developer"],
typeSpeed :200,
backSpeed:100,
backDelay:100,
loop:true,
})
var scrollFunction=document.getElementsByClassName("nav-link");
function scrollFunction() {
    

}

//for changing background of nav bar
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".navbar").css({"background-color":"white"});   
        }
        else{
            $(".navbar").css({"background-color":""});
        }

    })
})


