//Write a JavaScript program that generates a random number between 1 and 100 and asks the user to guess the number. Provide feedback on whether the guess is too high or too low, and keep track of the number of attempts until the user guesses correctly.

function playNumberGuessingGame() {
    const min = 1;
    const max = 100;
    const targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let numberOfAttempts = 0;

    console.log("Welcome to the Number Guessing Game!");

    while (true) {
        const userGuess = parseInt(prompt(`Guess the number between ${min} and ${max}:`));

        if (isNaN(userGuess)) {
            alert("Please enter a valid number.");
        } else {
            numberOfAttempts++;

            if (userGuess < targetNumber) {
                alert("Too low! Try again.");
            } else if (userGuess > targetNumber) {
                alert("Too high! Try again.");
            } else {
                alert(`Congratulations! You guessed the number ${targetNumber} in ${numberOfAttempts} attempts.`);
                break;
            }
        }
    }
}

playNumberGuessingGame();
