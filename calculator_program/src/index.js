const NUMBER_DISPLAY = document.getElementById("number-display")

function display_value(value) {
    if (NUMBER_DISPLAY.textContent == "0") {
        NUMBER_DISPLAY.textContent = ""
    }

    NUMBER_DISPLAY.textContent += value
}

function display_total_value() {
    NUMBER_DISPLAY.textContent = eval(NUMBER_DISPLAY.textContent)
}

function clear_display(){
    NUMBER_DISPLAY.textContent = "0"
}