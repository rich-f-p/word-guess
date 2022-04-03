var list = ["javascript","init","bootcamp","style","html","array","local","global","dom","github"];

/* function to compare letter to word to guess */
// ### Specifications
// * When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear. 

// * When a user wins or loses a game, a message should appear and the timer should stop. 

// * When a user refreshes or returns to the brower page, the win and loss counts should persist.

/* what do we need */
var keyPressed;
var time = 10;
var timeEL = document.getElementById("timer");
var currentWord = " ";
var win =0;
var winEl = document.getElementById("wins");
var loss=0;
var lossEL = document.getElementById("losses");
var letterGuessed=[];


/* grab word from array */
function randomWord() {
    var random = Math.floor(Math.random()*list.length);
    currentWord = list[random];
    return list[random];
}
randomWord();
//what do we do ?

var hiddenWord;
function hideWord() {
hiddenWord = " "
  for (i=0; i<currentWord.length-1; i++) {
      hiddenWord += "_";
  }
  return hiddenWord;
}
hideWord();

var key = " ";

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
youWin();

}
var newWord ="";
function check(){
      for(var i=0;i<hiddenWord.length;i++){
      if ( currentWord.charAt(i)==key) {          
        hiddenWord = hiddenWord.substring(0, i ) + key + hiddenWord.substring(i+1) ;
       }
     }          
}


winEl.textContent = win;
lossEL.textContent = loss;
timeEL.textContent = time + "seconds remaining";

function countdown() {
  time = 10;
  var stopTime = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    // timeLeft--;
    if (time > 0 ) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timeEL.textContent = time + ' seconds remaining';
      // Decrement `timeLeft` by 1
      time--
      console.log(time);
      if (youWin(true)){
      clearInterval(stopTime);
      }
      ;
    } 
    else if (time === 0) {
      timeEL.textContent = "YOU LOSE!";
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
youLose();


 })

// function resetTime(){
//   time =5;
//}

  




function youWin(){
 if(time >0 && hiddenWord === currentWord){
 win++;
 timeEL.textContent = "correct";
 winEl.innerHTML= win;
 return true;
 } else {return false};
};

function youLose(){
if(time === 0 && hiddenWord !== currentWord){
 loss++
/* display loss */
} lossEL.innerHTML=loss;
};

// //store info with in local storage
// localStorage.setItem("", JSON.stringify());
// localStorage.setItem("",);
// //
// var previousInfo = localStorage.getItem("",JSON.parse());

// if (time>0){
//   startButton.setAttribute("disabled","disabled");
//disable button,how to able when time == 0 ?
