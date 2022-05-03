var sum = 0;
let time=20;
var intervalHolder;


function enterPressed(event){
   if(event.keyCode===13){
   switchPage();
}
}

function switchPage(){
   const name= document.getElementById("name");
   const namelength = name.value.length;  
   const regist = document.getElementById("registration");
   const gamePage = document.getElementById("game-page");
   if(namelength>3 && namelength<15){
   regist.style.display = "none";             
   gamePage.style.display="block";
   saveNameAndDisplay();
   initialScore();
   }
   else{
      displayErrorBox();
   }
}

function displayErrorBox(){
   const errorbox = document.getElementById("error-box");
   errorbox.style.display = "block";
}
function vanish(){
   const errorbox = document.getElementById("error-box");
   errorbox.style.display = "none";
}

function saveNameAndDisplay(){
   const username = document.getElementById("name");
   const namedisplaybox = document.getElementById("player-name");
   namedisplaybox.innerHTML = username.value;
}


function countdown(){
   if(time<0){
      document.getElementById("roll-again-btn").disabled = true;
      document.getElementById("roll-again-btn").style.color="gray";
      const scorelabel = document.getElementById("score-label");
      scorelabel.innerHTML = "GAME OVER";
      newButtonsDisplay();
      alert("GAME OVER: you scored a total of "+sum);
      return;
   }
   else{
      const timer = document.getElementById("timer");
      timer.innerHTML= (time + "s");
      time--; 
   }
   
   setTimeout(countdown,1000);
}

function generateRandom(){   
   var random = Math.floor((Math.random() * 6) + 1);
   sum = sum + random;
   const dice = document.getElementById("dice");
   dice.src = "./images/dice"+ random + ".png";
   const score = document.getElementById("score-display");
   score.innerHTML= sum;
   
   if(time===20){
      countdown();
   }
   }

function newButtonsDisplay(){
   const newuserbtn = document.getElementById("new-user-btn");
   const playagaintbn = document.getElementById("play-again-btn");
   newuserbtn.style.display="block";
   playagaintbn.style.display="block";
}   

function initialScore(){
   const score = document.getElementById("score-display");
   score.innerHTML= "0";
}

function reset(){
   initialScore();
   sum=0;
   time=20;
   const dice = document.getElementById("dice");
   dice.src = "./images/dice1.png";
   document.getElementById("roll-again-btn").disabled = false;
   document.getElementById("roll-again-btn").style.color="white"; 
   vanishNewButtons();  
}

function vanishNewButtons(){
   const newuserbtn = document.getElementById("new-user-btn");
   const playagaintbn = document.getElementById("play-again-btn");
   newuserbtn.style.display="none";
   playagaintbn.style.display="none";
}

function reloadCompletely(){
   location.reload();
}