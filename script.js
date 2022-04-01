var list = ["javascript", "init", "bootcamp", "style", "html","array","local","global","dom","github"];

/* eventlistener */
/* function to compare letter to word to guess */
/*  */
// ### Specifications

// * When a user presses a letter key, the user's guess should be captured as a key event.

// * When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear. 

// * When a user wins or loses a game, a message should appear and the timer should stop. 

// * When a user clicks the start button, the timer should reset. 

// * When a user refreshes or returns to the brower page, the win and loss counts should persist.

/* what do we need */
// what key pressed
var keyPressed;
//time
var time = 10;
// current word being guess
var currentWord = "apple";
// win
var win =0;
//loss
var loss=0;
//letters guessed
var letterGuessed=[];


//what do we do ?
//capture user input

function keydownAction(event){
event.preventDefault();
console.log(event); 
var keyPressed = event.key;
document.querySelector("#letter").textContent=keyPressed;
return keyPressed;
}
document.addEventListener("keydown", keydownAction);
//compare word to user guess
function compare(event){
    for(i=0;i<currentWord.length;i++){
    if (keyPressed === currentWord){
        /* display letter that is correct */
    }else {

    }

}
//display string with underscores for letter not guessed
function display(){
    var incorrectGuesses = [];
    if (keyPressed !=currentWord){
        incorrectGuesses.concat=keyPressed;
    }
    var key = keydownAction();

}
//increment win
//increment losses
//display win
//display loss
//start timer
//reset timer
//store info with in local storage
//
