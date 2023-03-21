$(document).ready(function(){
    
  let timerId;
  let ms = 0;
  let sec = 0;
  let min = 0;
  let hour = 0;
  
function count(){
   ms += 1;
  
  if(ms >= 10){
    ms = 0;
    sec += 1;
  }
 
  
  if(sec >= 60){
    sec = 0;
    min += 1;
  }
  
  if(min >= 60){
    min = 0;
    hour += 1;
  }
  
  $("#time").html(hour + ": " + min + ": " + sec + ": " + ms);
}  
  
    $(".start").prop("disabled", false);
    $(".stop").prop("disabled", true);
    $(".reset").prop("disabled", true);
 
  
  $(".start").click(function(){
    
   
    timerId = setInterval(count, 100);
    
    $(this).prop("disabled", true);
    $(".stop").prop("disabled", false);
    $(".reset").prop("disabled", false);
    
    
  });
  
  
  $(".stop").click(function(){
    
    clearInterval(timerId);
    
    $(".start").prop("disabled", false);
    $(this).prop("disabled", true);
    $(".reset").prop("disabled", false);
  });
  
  
  
  $(".reset").click(function(){
    
    sec = min = hour = 0;
    clearInterval(timerId);
    $("#time").html("0: 0: 0: 0");
     
    $(".start").prop("disabled", false);
    $(this).prop("disabled", true);
    $(".stop").prop("disabled", true);
    
  });
  
  
  
  
  
});