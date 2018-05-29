// Create array of alphabet //
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Wins, Losses, Guesses left, Guesses so far //
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessUsed = [];

// Show initial scoreboard //
document.getElementById('wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;
document.getElementById('guessLeft').innerHTML = guessLeft;

// Computer guesses a random letter //
var appGuess = letters[Math.floor(Math.random() * letters.length)];

console.log("app guess: " + appGuess)

// Event occurs when player presses a key //
document.onkeypress = function (event) {
    var playerGuess = event.key;

    // Add player guess to the list //
    guessUsed.push(playerGuess);
    console.log("player guess: " + playerGuess);

    // If player wins, add a point, reset guessLeft, and change appGuess //
    if (playerGuess === appGuess) {
        wins++;
        guessLeft = 10;
        guessUsed = [];
        appGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log("new app guess: " + appGuess)

        // If player guesses wrong, reduce guessLeft and add guess to guessUsed //
    } else {
        guessLeft--;

    }

    // If player runs out of guesses, add a loss, reset guessLeft, reset guessUsed, and change appGuess //
    if (guessLeft === 0) {
        losses++;
        guessLeft = 10;
        guessUsed = [];
        appGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log("new app guess: " + appGuess)
    }

    // Update scoreboard at the end of function //
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessLeft').innerHTML = guessLeft;
    document.getElementById('guessUsed').innerHTML = guessUsed;
}