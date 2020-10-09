var EvenetHandlers = (function(){
function init(){
var myButton = document.getElementById("button");
myButton.addEventListener("click",gussNumber);
}
 // random value generated 
 var y = Math.floor(Math.random() * 10 + 1); 
      
  
 var guess = 0; 
   
 function gussNumber(){ 

var x = document.getElementById("input").value; 
var myMsg = document.getElementById("msg");
var myAttempts = document.getElementById("try");


if(x == y ) 
{     
    myMsg.innerText = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT  " + x;
    myAttempts.innerText = (guess +1) + " GUESS ";
} 
else if(x > y && guess < 8) 
{     
     
    myMsg.innerText = "OOPS SORRY!! TRY A SMALLER NUMBER"; 
    guess++;
    myAttempts.innerText = guess;
} 
else if (x < y && guess < 8) 
{ 
    
    myMsg.innerText = "OOPS !! TRY A GREATER NUMBER" ;
    guess++; 
    myAttempts.innerText = guess;
} 
else
{
    myMsg.innerText ="you have 0 attempts , try agian ";
    
}

 
}




return{
    init
}



})();
window.addEventListener("DOMContentLoaded", EvenetHandlers.init);



