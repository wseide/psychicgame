
//create your var and empty var for guesses
var lettersGuessed = [];
var guessesLeft = 10;
var wins = 0;
var losses = 0;

//random the guess of the computer
var computerGuess =
String.fromCharCode(
Math.round(Math.random() * 26) + 97);

//log the computer guess for debugging
console.log(computerGuess);


//when the keyboard is pressed something happens
document.onkeydown = function(event) {
var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();
//add the letter that is prssed
addLetter(keyPress);
}
//make a function is that letter has been pressed an alert comes up
function addLetter (usersKeypress) {


 var repeatGuess = lettersGuessed.some(function(item){
return item === usersKeypress;
})

if (repeatGuess) {
alert(usersKeypress + " has been used. Try another letter");
  
} else {
lettersGuessed.push(usersKeypress);
console.log(lettersGuessed);

    
showLettersGuessed();
     
guessMatch(usersKeypress);
}
}

function resetVariables () {
lettersGuessed = [];
guessesLeft = 10;
}

function startGame() {
showGuessesRemaining();
showWins();
}

function showLettersGuessed() {
var tempStr = lettersGuessed.join(", ");
document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch (character) {

console.log(character);
console.log(computerGuess);

//if else statement

if (character === computerGuess) {
alert("You guessed the right letter. You got a W!");
wins++;
showWins();
resetVariables ();
} 
else if (guessesLeft === 0) {
alert("You Got an L");
losses++;
resetVariables ();
} 
else {
guessesLeft = guessesLeft - 1;
showGuessesRemaining();
showLosses();
}
}

//show wins, losses, guesses left

function showWins() {
document.getElementById("numWins").innerHTML = wins;
}

function showLosses() {
document.getElementById("numLosses").innerHTML = losses;
}

function showGuessesRemaining() {
document.getElementById("numGuesses").innerHTML = guessesLeft;
}

startGame();
