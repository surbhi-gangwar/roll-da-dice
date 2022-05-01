function saveName(event){
if(event.keyCode===13){
   proceed();
}
}

function proceed(){
   const regist = document.getElementById("registration");
   const gamePage = document.getElementById("game-page");
   const inputname = document.getElementById("name");
   const username = document.getElementById("player-name");
   regist.style.display = "none";
   gamePage.style.display="block";
   username.innerHTML = inputname.value;
}


let time=20;
function countdown(){
   const timer = document.getElementById("timer");
   timer.innerHTML = time;
   time--;
   if(time<0){
   timerStopped();
   btn.setAttribute('disabled', 'disabled');
   }
}

function callCountdown(){
   
   setInterval(countdown , 1000);
}

function timerStopped(){
   const timer = document.getElementById("timer");
   time = 0;
   timer.innerHTML = time;
}


