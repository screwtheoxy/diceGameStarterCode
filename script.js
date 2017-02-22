$(document).ready(function(){
  $("#roll-dice").click(function(){
  //Place your code here 
    var firstRandomNumber = (Math.floor(Math.random()*6 + 1));
    var secondRandomNumber = (Math.floor(Math.random()*6 + 1));
    console.log(firstRandomNumber);
    if(firstRandomNumber == 1){
      $("#imgone").attr("src", "images/1.png");
    };
    if(firstRandomNumber === 2){
       $("#imgone").attr("src", "images/2.png");
    };
    if(firstRandomNumber === 3){
     $("#imgone").attr("src", "images/3.png");
    };
    if(firstRandomNumber === 4){
      $("#imgone").attr("src", "images/4.png");
    };
    if(firstRandomNumber === 5){
      $("#imgone").attr("src", "images/5.png");
    };
    if(firstRandomNumber === 6){
     $("#imgone").attr("src", "images/6.png");
    };
    if(secondRandomNumber === 1){
      $("#second-die").html(secondRandomNumber + "<br>");
    };
    if(secondRandomNumber === 2){
      $("#second-die").html(secondRandomNumber + "<br>");
    };
    if(secondRandomNumber === 3){
      $("#second-die").html(secondRandomNumber + "<br>");
    };
    if(secondRandomNumber === 4){
      $("#second-die").html(secondRandomNumber + "<br>");
    };
    if(secondRandomNumber === 5){
      $("#second-die").html(secondRandomNumber + "<br>");
    };
    if(secondRandomNumber === 6){
      $("#second-die").html(secondRandomNumber + "<br>");
    };
  });
});
