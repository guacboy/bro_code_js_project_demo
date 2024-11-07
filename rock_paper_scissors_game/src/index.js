const PLAYER_CHOICE = document.getElementById("player-choice")
const COMPUTER_CHOICE = document.getElementById("computer-choice")
const RESULTS = document.getElementById("results")
const PLAYER_SCORE = document.getElementById("player-score")
const COMPUTER_SCORE = document.getElementById("computer-score")

const CHOICE_LIST = [
    "rock",
    "paper",
    "scissors",
]

let player_score = 0
let computer_score = 0

function play_game(player_choice){
    // player activity
    PLAYER_CHOICE.textContent = `PLAYER: ${player_choice}`

    // computer activity
    let computer_choice = Math.trunc(Math.random() * (CHOICE_LIST.length))
    computer_choice = CHOICE_LIST[computer_choice]

    COMPUTER_CHOICE.textContent = `COMPUTER: ${computer_choice}`

    // final results
    let result_text

    if (player_choice == computer_choice){
        result_text = "IT'S A TIE!"
    }
    else if(player_choice == "rock"){
        switch(computer_choice){
            case "paper":
                result_text = "YOU LOSE!"
                computer_score++
                break
            case "scissors":
                result_text = "YOU WIN!"
                player_score++
                break
        }
    }
    else if(player_choice == "paper"){
        switch(computer_choice){
            case "scissors":
                result_text = "YOU LOSE!"
                computer_score++
                break
            case "rock":
                result_text = "YOU WIN!"
                player_score++
                break
        }
    }
    else if(player_choice == "scissors"){
        switch(computer_choice){
            case "rock":
                result_text = "YOU LOSE!"
                computer_score++
                break
            case "paper":
                result_text = "YOU WIN!"
                player_score++
                break
        }
    }

    // colors the result message
    if (result_text == "YOU WIN!"){
        RESULTS.classList.remove("red-text")
        RESULTS.classList.add("green-text")
    }
    else if(result_text == "YOU LOSE!"){
        RESULTS.classList.remove("green-text")
        RESULTS.classList.add("red-text")
    }
    else{
        RESULTS.classList.remove("red-text")
        RESULTS.classList.remove("green-text")
    }

    RESULTS.textContent = result_text

    PLAYER_SCORE.textContent = player_score
    COMPUTER_SCORE.textContent = computer_score
}