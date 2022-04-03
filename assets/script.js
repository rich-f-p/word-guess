var list = ["javascript","init","bootcamp","style","html","array","local","global","dom","github"];
var keyPressed;
var time = 10;
var timeEL = document.getElementById("timer");
var currentWord = " ";
var win = localStorage.getItem("win");
var winEl = document.getElementById("wins");
var loss = localStorage.getItem("loss");
var lossEL = document.getElementById("losses");
var letterGuessed=[];


/* grab word from array */
function randomWord() {
    var random = Math.floor(Math.random()*list.length);
    currentWord = list[random];
    return list[random];
}
randomWord();

var hiddenWord;
function hideWord() {
hiddenWord = ""
  for (i=0; i<currentWord.length; i++) {
      hiddenWord += "_";
  }
  return hiddenWord;
}
hideWord();

var key = "";

document.getElementById("words").innerHTML = "press start to play";
//capture user input
document.addEventListener("keydown", keydownAction)
function keydownAction(event){
event.preventDefault();
keyPressed = event.key;
letterGuessed = letterGuessed.concat(keyPressed)
document.querySelector("#letter").textContent=keyPressed;
document.getElementById("usedLetters").innerHTML = letterGuessed
key = keyPressed;
check();
document.getElementById("words").innerHTML = hiddenWord;
}

function check(){
      for(var i=0;i<hiddenWord.length;i++){
      if ( currentWord.charAt(i)==key) {          
        hiddenWord = hiddenWord.substring(0, i ) + key + hiddenWord.substring(i+1) ;
       }
     }          
}
/* displays win loss values */
timeEL.textContent = time + "seconds remaining";
function countdown() {
  time = 10;
  var stopTime = setInterval(function () {

    if (time > 0 ) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timeEL.textContent = time + ' seconds remaining';
      // Decrement time by 1
      time--
      console.log(time);
      if (youWin(true)){
      clearInterval(stopTime);
      }
      ;
    } 
    else if (time === 0) {
      timeEL.textContent = "YOU LOSE! 😅";
      clearInterval(stopTime);
      youLose();
    }
  }, 500);
}
/* start the game */
startButton.addEventListener("click", function(){
letterGuessed = [];
countdown();
randomWord();
console.log(currentWord);
hideWord();
document.getElementById("words").innerHTML = hiddenWord
youWin();
youLose();

 })

function youWin(){
 if(time >0 && hiddenWord === currentWord){
 win++
 timeEL.textContent = "YOU WIN!!! 🥳";
 localStorage.setItem("win",win);
 getStats();
 return true;
 } else {return false};
};

function youLose(){
if(time === 0 && hiddenWord !== currentWord){
 loss++
 localStorage.setItem("loss",loss);
 getStats();
} 
};

//store info within local storage
var totalWins;
var totalLosses;
function getStats(){
totalWins = localStorage.getItem("win");
totalLosses = localStorage.getItem("loss");
winEl.textContent=totalWins;
lossEL.textContent=totalLosses;
}
resetBtn.addEventListener("click",function(){
 localStorage.clear();
 winEl.textContent= "";
 lossEL.textContent= "";
 win = localStorage.getItem("win");
 loss = localStorage.getItem("loss");
})
function open(){
getStats();
}
open();

