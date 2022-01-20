// CALL A CERTAIN FUNCTION EVERY SECOND
setInterval(setClock, 1000)

// SET DATA ATTRIBUTES FROM HTML
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

// FUNCTION TO SET CLOCK
function setClock() {
    const currentDate = new Date() // NEW DATE CONSTRUCTOR
    const secondsRatio = currentDate.getSeconds() / 60 // SECONDS RATIO IS % OF MIN EG: .5 = 30SEC .75 = 45SEC
    const minutesRatio = (secondsRatio + currentDate.getMinutes() ) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours() ) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

// FUNCTIONS TO SET ROTATIONS AND ROTATION PROPERTY IN CSS
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

// set clock as soon as page loads
setClock()

