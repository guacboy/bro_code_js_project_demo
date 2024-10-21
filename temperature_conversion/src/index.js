const NUMBER_INPUT = document.getElementById("number_input");
const TO_F_RADIO = document.getElementById("to_f_radio");
const TO_C_RADIO = document.getElementById("to_c_radio");
const SUBMIT_BUTTON = document.getElementById("submit_button");
const RESULT_DISPLAY = document.getElementById("result_display");

SUBMIT_BUTTON.onclick = function () {
    temperature_conversion(NUMBER_INPUT.value);
}

function temperature_conversion(number) {
    // F to C
    if (TO_C_RADIO.checked) {
        result = (number - 32) * (5 / 9);
        unit = "C"
    }
    // C to F
    if (TO_F_RADIO.checked) {
        result = number * (9 / 5) + 32;
        unit = "F"
    }
    else{
        RESULT_DISPLAY.textContent = "NaN";
    }

    RESULT_DISPLAY.textContent = result.toFixed(1) + "°" + unit;
}