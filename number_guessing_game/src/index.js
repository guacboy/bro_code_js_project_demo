const GUESS_INPUT = document.getElementById("guess");
const SUBMIT_BUTTON = document.getElementById("submit");
const RESULT_LABEL = document.getElementById("results");

// generate_random_number * (maximum_number - minimum_number + 1) + minimum_number
let number_to_guess = Math.trunc(Math.random() * (10 - 1 + 1)) + 1

console.log(number_to_guess)

SUBMIT_BUTTON.onclick = function () {
    GUESS_INPUT.value > number_to_guess ? RESULT_LABEL.textContent = "LOWER" : RESULT_LABEL.textContent = "HIGHER";

    if (GUESS_INPUT.value == number_to_guess) {
        RESULT_LABEL.textContent = "YOU GUESSED IT!"
    }
}