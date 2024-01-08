// Variable

const startBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')

// Variable for time

let seconds = 0
let minute = 0
let hours = 0

// Variable for Leading zero
let leadSecond = 0
let leadMinute = 0
let leadHours = 0


// Variable for set interval
let timeInterval = null
let timerStatus = "stopped"

// stop watch function
function stopWatch(){

    seconds++

    if (seconds / 60 === 1) {
        seconds = 0
        minute++

        if (minute / 60 === 1) {
            minute = 0
            hours++
        }
    }

    if(seconds < 10){
        leadSecond = "0" + seconds.toString();
    } else{
        leadSecond = seconds
    }

    if(minute < 10){
        leadMinute = "0" + minute.toString()
    } else{
        leadMinute = minute
    }

    if(hours < 10){
        leadHours = "0" + hours.toString()
    } else{
        leadHours = hours
    }

    let displayTimer = document.getElementById('timer').innerHTML = leadHours + ":" + leadMinute + ":" + leadSecond
}

// function and amount of time passes through in the function for the run
// 1000ms
// window.setInterval(stopWatch, 1000)

startBtn.addEventListener('click', function(){
    if (timerStatus == 'stopped'){
        timeInterval = window.setInterval(stopWatch, 1000)
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></li>'
        timerStatus = 'started'
    } else{
        window.clearInterval(timeInterval);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></li>'
        timerStatus= 'stopped'
    }
})

resetBtn.addEventListener('click', function(){
    leadHours = leadMinute = leadSecond = 0
    let displayTimer = document.getElementById('timer').innerHTML = "00:00:00" 
})