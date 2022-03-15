
var wrongGuesses=0;
var guess=0;

function checkGuess() {

    guess = Number(document.getElementById("nbrGuess").value);
   
    if (guess <1 || guess > 10) {
        window.alert('Number must be between 1 and 10');
    } else {
        if (guess==3) {
            document.getElementById("result").innerHTML += 'You guessed the number!';
            document.getElementById("checkGuess").disabled = true;
        } else {
            wrongGuesses++; 
            document.getElementById("result").innerHTML += ('Number ' + guess + ' is wrong!  Guess #' + wrongGuesses + '<br />');
            if (wrongGuesses ==3) {
                document.getElementById("result").innerHTML += 'You werent able to guess the number.'+ '<br />';
                document.getElementById("checkGuess").disabled = true;
            }
        }
    }
}

