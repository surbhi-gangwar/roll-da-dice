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


function callCountdown(){
   if(time===20)
       intervalHolder = setInterval(countdown , 1000);
}

function countdown(){
   const timer = document.getElementById("timer");
   time--;
   timer.innerHTML = (time + "s");
   if(time===0){
   clearInterval(intervalHolder);
   roll-again-btn.setAttribute('disabled','true');
   }
}

function generateRandom(){
   if(time===0){
      const rollagainbtn= document.getElementById("roll-again-btn");
      rollagainbtn.setAttribute('disabled','true');
   }
   
   else{
      const score = document.getElementById("score-display");
   var random = Math.floor((Math.random() * 6) + 1);
   console.log(random);
   sum = sum + random;
   score.innerHTML= sum;
   }
      }




