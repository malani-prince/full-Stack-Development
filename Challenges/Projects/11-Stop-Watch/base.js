const displayText = document.querySelector('.stopwatch h1')
let [second, minute, hours] = [0, 0, 0]
let timer = null

function stopWatch() {
    second++;
    if (second === 60) {
        second = 0
        minute++
        if (minute === 60) {
            minute = 0
            hours++
        }
    }

    let h = hours < 10 ? "0" + hours : hours
    let m = minute < 10 ? "0" + minute : minute
    let s = second < 10 ? "0" + second : second

    displayText.innerHTML = h + " : " + m + " : " + s
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer)
    }
    timer = setInterval(stopWatch, 1000)

}

function watchSTop() {
    clearInterval(timer)
}

function reStartWatch() {
    clearInterval(timer)
    second = 0
    minute = 0
    hours = 0
    displayText.innerHTML = "00" + " : " + "00" + " : " + "00"
}