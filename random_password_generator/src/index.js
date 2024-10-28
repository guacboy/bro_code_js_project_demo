const LENGTH_INPUT = document.getElementById("length_input")
const UPPERCASE_CHECKBOX = document.getElementById("uppercase_checkbox")
const NUMBER_CHECKBOX = document.getElementById("number_checkbox")
const SYMBOL_CHECKBOX = document.getElementById("symbol_checkbox")
const GENERATE_BUTTON = document.getElementById("generate_button")
const PASSWORD_RESULT = document.getElementById("password_result")

GENERATE_BUTTON.onclick = function(){
    let result = ""
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
    const NUMBER = "1234567890"
    const SYMBOL = "!@#$%^&*()"

    for(let i = 0; i < LENGTH_INPUT.value; i++){
        let random_idx
        const VARIABLE = Math.trunc(Math.random() * 3 + 1)

        if (VARIABLE == 3 && NUMBER_CHECKBOX.checked){
            random_idx = Math.trunc(Math.random() * NUMBER.length)
            result += NUMBER.charAt(random_idx)
        }
        else if (VARIABLE == 2 && SYMBOL_CHECKBOX.checked){
            random_idx = Math.trunc(Math.random() * SYMBOL.length)
            result += SYMBOL.charAt(random_idx)
        }
        else {
            let is_upper
            random_idx = Math.trunc(Math.random() * ALPHABET.length)

            if (UPPERCASE_CHECKBOX.checked){
                let UPPER = Math.trunc(Math.random() * 2 + 1)
                
                if (UPPER == 1){
                    is_upper = true
                }
                else {
                    is_upper = false
                }
            }

            if (is_upper){
                result += ALPHABET.charAt(random_idx).toUpperCase()
            }
            else {
                result += ALPHABET.charAt(random_idx)
            }
        }
        }

    PASSWORD_RESULT.textContent = result
}