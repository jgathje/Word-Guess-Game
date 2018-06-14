// intital variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var keysPressedSoFar = [];
// letter generator
var alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
var imgArray =[
    "assets/images/badtime.jpg",
    "assets/images/ruhroh.jpg",
    "assets/images/doh.jpg",
    "assets/images/suck.jpg",
    "assets/images/mistake.jpg",
    "assets/images/wrong.jpg",
    "assets/images/nope.jpg",
    "assets/images/no.gif",
    "assets/images/frank.gif",
    "assets/images/false.gif",
];
var guessLetter = alpha[Math.floor(Math.random() * alpha.length)];

console.log(guessLetter);



// end letter generator


//guess machine

document.onkeyup = function (event) {

    var lastKeyPressed = event.key;
    if (lastKeyPressed == guessLetter) {
        reset ();
        console.log("YOU WIN!");
        wins++;
        var pLettersGuessed = document.getElementById("lettersGuessed");
        pLettersGuessed.textContent = "Letters Guessed: " + keysPressedSoFar;
        var pWin = document.getElementById("wins");
        pWin.textContent = "Wins: " + wins;
        var pGuessesLeft = document.getElementById("guessesLeft");
        pGuessesLeft.textContent = "Guesses Left: " + guessesLeft;
        document.getElementById("image").src = "assets/images/ron.gif";

    }
    else if (event.key != guessLetter, guessesLeft > 1) {
        guessesLeft--;
        keysPressedSoFar += event.key;
        var pLettersGuessed = document.getElementById("lettersGuessed");
        pLettersGuessed.textContent = "Letters Guessed: " + keysPressedSoFar;
        console.log(keysPressedSoFar);
        var pGuessesLeft = document.getElementById("guessesLeft");
        pGuessesLeft.textContent = "Guesses Left: " + guessesLeft;
        var image = imgArray[Math.floor(Math.random() * imgArray.length)];
        var displayImage = imgArray[image];
        document.getElementById("image").src= image;
        console.log(image);
    }
    else if (guessesLeft == 1) {
        reset ();
        losses++;
        var pLettersGuessed = document.getElementById("lettersGuessed");
        pLettersGuessed.textContent = "Letters Guessed: " + keysPressedSoFar;
        var pGuessesLeft = document.getElementById("guessesLeft");
        pGuessesLeft.textContent = "Guesses Left: " + guessesLeft;
        var pLose = document.getElementById("losses");
        pLose.textContent = "Losses: " + losses;
        document.getElementById("image").src = "assets/images/gameover.gif";
    }
    
    
}

function reset (){
    guessesLeft=9;
    keysPressedSoFar=""
    guessLetter = alpha[Math.floor(Math.random() * alpha.length)];
    console.log(guessLetter);
}


