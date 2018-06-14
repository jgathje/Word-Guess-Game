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
var imgArray = [
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

var guessedArray = [];

// end letter generator


//guess machine

document.onkeyup = function (event) {

    var lastKeyPressed = event.key;
    if (isAlpha(event.key)) {
        if (lastKeyPressed == guessLetter) {
            var correctLetter = document.getElementById("correctLetter");
            correctLetter.textContent = "Correct Letter: " + guessLetter;
            
            console.log("YOU WIN!");
            wins++;
            guess();
            var pWin = document.getElementById("wins");
            pWin.textContent = "Wins: " + wins;
            reset();
            document.getElementById("image").src = "assets/images/ron.gif";

        }
        else if (event.key != guessLetter, guessesLeft > 1) {
            if (notGuessed(event.key)) {
                guessesLeft--;
                keysPressedSoFar += event.key + ", ";
                guess();
                var image = imgArray[Math.floor(Math.random() * imgArray.length)];
                var displayImage = imgArray[image];
                document.getElementById("image").src = image;
                console.log(image);
                console.log(event.key);
                console.log(guessedArray);
                var correctLetter = document.getElementById("correctLetter");
                correctLetter.textContent = "Correct Letter: ";
            }
        }
        else if (guessesLeft == 1) {
            var correctLetter = document.getElementById("correctLetter");
            correctLetter.textContent = "Correct Letter: " + guessLetter;
            
            losses++;
            guess();
            var pLose = document.getElementById("losses");
            pLose.textContent = "Losses: " + losses;
            document.getElementById("image").src = "assets/images/gameover.gif";
            reset();
        }


    }
}
function reset() {
    guessesLeft = 9;
    keysPressedSoFar = ""
    guessLetter = alpha[Math.floor(Math.random() * alpha.length)];
    console.log(guessLetter);
    guessedArray = [];
}

function guess() {
    var pLettersGuessed = document.getElementById("lettersGuessed");
    pLettersGuessed.textContent = "Letters Guessed: " + keysPressedSoFar;
    var pGuessesLeft = document.getElementById("guessesLeft");
    pGuessesLeft.textContent = "Guesses Left: " + guessesLeft;
    guessedArray.push(event.key);
}

function letterCheck() {
    isAlpha(event.key);
    notGuessed(event.key);


}

function isAlpha() {
    for (var i = 0; i < alpha.length; i++) {
        if (event.key == alpha[i]) {
            return true;

        }




    }
    return false;
}

function notGuessed() {
    for (var j = 0; j < guessedArray.length; j++) {
        if (event.key == guessedArray[j]) {
            return false;
        }
    }
    return true;
}