var list = ["javascript", "init", "bootcamp", "style", "html","array","local","global","dom","github"];

/* eventlistener */
/* function to compare letter to word to guess */
/*  */
// ### Specifications


// * When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear. 

// * When a user wins or loses a game, a message should appear and the timer should stop. 

// * When a user clicks the start button, the timer should reset. 

// * When a user refreshes or returns to the brower page, the win and loss counts should persist.

/* what do we need */
// what key pressed
var keyPressed;
//time
var time = 5;
var timeEL = document.getElementById("timer");
// current word being guess
var currentWord = "";
// win
var win =0;
//loss
var loss=0;
document.getElementById("losses").innerHTML = loss
//letters guessed
var letterGuessed=[];



function randomWord() {
    var random = Math.floor(Math.random()*list.length);
    currentWord = list[random];
    return list[random];
}
randomWord();
//what do we do ?
//capture user input

var hiddenWord;
function hideWord() {
hiddenWord = " "
  for (i=0; i<currentWord.length; i++) {
      hiddenWord += " _ ";
  }
  return hiddenWord;
}
hideWord()
document.getElementById("words").innerHTML = hiddenWord

function keydownAction(event){
event.preventDefault();
console.log(event); 
var keyPressed = event.key;
document.querySelector("#letter").textContent=keyPressed;
document.getElementById("usedLetters").innerHTML = letterGuessed
letterGuessed = letterGuessed.concat(keyPressed)
compare();
hiddenWord=newWord
console.log(newWord)
}
document.addEventListener("keydown", keydownAction);

document.getElementById("words").innerHTML = hiddenWord

function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    //We then declare timeInterval and assign it the value of setInterval(). Here, we will update the text in timerEl at an interval of 1000 ms, or 1 second. With each interval, we decrement the value of timeLeft. If timeLeft is equal to 0, we use clearInterval() to stop timeInterval().
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      // timeLeft--;
      if (time > -1 ) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timeEL.textContent = time + ' seconds remaining';
        // Decrement `timeLeft` by 1
        time--
        ;
      } 
      else if (time === -1) {
        loss++ 
      }
    }, 1000);
  }
  countdown();

  

  





// compare letter to user guess
function compare(event){
    var newWord;
    for(i=0;i<currentWord.length;i++){
    if (keyPressed === currentWord.charAt(i)) {
        newWord += currentWord.charAt(i)
    }
    else 
    newWord += "_";
    return newWord
}
}

    /* display letter that is correct */

//   function youWin() {
//       for (i=0; i<currentWord.length; i++) {
//           if ( currentWord === )
//       } 
//   }
// }
//display string with underscores for letter not guessed


    


//increment win
//increment losses
//display win
//display loss
//start timer
//reset timer
//store info with in local storage
//
