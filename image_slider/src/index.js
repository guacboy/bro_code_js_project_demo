const CAR_IMG = document.getElementById("car-image")

const CAR_LIST = [
    "red",
    "blue",
    "green",
]

let pointer = 0

function display_image(direction){
    if (direction == "left"){
        pointer -= 1
    }
    else if (direction == "right"){
        pointer += 1
    }

    // pointer can not be greater than two or less than zero
    if (pointer > 2){
        pointer = 0
    }
    if (pointer < 0){
        pointer = 2
    }
    
    CAR_IMG.src = `../src/assets/${CAR_LIST[pointer]}-car.png`
}