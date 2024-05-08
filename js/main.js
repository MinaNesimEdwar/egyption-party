// function to toggle menu
$("#close").click(function(){
    $(".sideBar").animate({width:"-250px"},300); 
    $(".open").animate({left:"10px"},300); 
})

$(".open").click(function(){
    $(".sideBar").animate({width:"250px"},300);
    $(".open").animate({left:"260px"},300); 
})

// function to smooth scroll
$(".sideBar ul li a").click(function (e) {
    let section = $(e.target).attr("href");
    let sectionHeight = $(section).offset().top;
    $("html ,body").animate({ scrollTop:sectionHeight },1000)
})


// function to singer section
$(".singer .singerHead").click(function(e){
   $(e.target).next().slideToggle(500);
   $(".singer .singerHead").not($(e.target)).next().slideUp(500);
   
})

// function to count down
$(document).ready(function(){
    let countDownDate = new Date("July 30, 2024 10:00:00").getTime();
    let countdown = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        
    
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if(seconds<10){
            seconds = "0"+seconds;
        }else{
            seconds=seconds;
        }

        if(minutes<10){
            minutes = "0"+minutes;
        }else{
            minutes=minutes;
        }

        if(hours<10){
            hours = "0"+hours;
        }else{
            hours=hours;
        }

        if(days<10){
            days = "0"+days;
        }else{
            days=days;
        }

        $("#days").html(days+' D');
        $("#hours").html(hours+' H');
        $("#minutes").html(minutes+' M');
        $("#seconds").html(seconds+' S');

        
        
        if (distance < 0) {
            clearInterval(countdown);
            $("#countdown").html("EXPIRED");
        }
    }, 1000);
});


// function to check length
let mainLength=100;
$("textarea").keyup(function(){
let length=$(this).val().length;
let showLength=mainLength-length;
if(length>100){
  $("#alertMessage").text("your available character finished")  
}else{
$("#check").html(showLength);
}
})