const DICE_NUMBER_INPUT = document.getElementById("dice_number_input")
const ROLL_BUTTON = document.getElementById("roll_button")
const DICE_NUMERIC_DISPLAY = document.getElementById("dice_numeric_display")
const DICE_IMAGE_DISPLAY = document.getElementById("dice_image_display")

ROLL_BUTTON.onclick = function () {
    let die_numeric_list = []
    let die_image_list = []

    for (let i = 0; i < DICE_NUMBER_INPUT.value; i++) {
        let die = Math.trunc(Math.random() * 6 + 1)
        die_numeric_list.push(die)
        die_image_list.push("<img src='assets/die-" + die + ".png'>")
    }

    DICE_NUMERIC_DISPLAY.textContent = "dice: " + die_numeric_list.join(", ")
    DICE_IMAGE_DISPLAY.innerHTML = die_image_list.join("")
}