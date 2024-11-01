const CURRENT_TIME = document.getElementById("current-time")

function update_time(){
    const DATE = new Date()

    let hour = DATE.getHours()
    let minute = DATE.getMinutes().toString().padStart(2, 0)
    let second = DATE.getSeconds().toString().padStart(2, 0)

    let AM_PM = hour <= 12 ? "AM" : "PM"
    hour = hour % 12
    hour = hour.toString().padStart(2, 0)

    CURRENT_TIME.textContent = `${hour}:${minute}:${second} ${AM_PM}`
}

update_time()
setInterval(update_time, 1000)