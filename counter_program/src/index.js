let count = 0;

const count_ID = document.getElementById("show_count")
const decrement_button_ID = document.getElementById("decrement")
const zero_button_ID = document.getElementById("zero")
const increment_button_ID = document.getElementById("increment")

decrement_button_ID.onclick = function () {
    count--;
    count_ID.textContent = count;
}

zero_button_ID.onclick = function () {
    count_ID.textContent = 0;
}

increment_button_ID.onclick = function () {
    count++;
    count_ID.textContent = count;
}