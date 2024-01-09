const progress = document.getElementById("progress")
const song = document.getElementById("song")
const controlIcon = document.getElementById("control-icon")

// Music controller is here
song.onloadedmetadata = function () {
    progress.max = song.duration
    progress.value = song.currentTime;
}

// How to Modifies the music 
function playPause() {
    if (controlIcon.classList.contains('fa-pause')) {
        song.pause();
        controlIcon.classList.remove('fa-pause')
        controlIcon.classList.add('fa-play')
    } else {
        song.play()
        controlIcon.classList.add('fa-pause')
        controlIcon.classList.remove('fa-play')
    }
}

setInterval(() => {
    if (!song.paused) {
        progress.value = song.currentTime
    }
}, 500);

progress.onchange = function () {
    song.currentTime = progress.value
    if (!song.paused) {
        song.play();
    }
    controlIcon.classList.add('fa-pause')
    controlIcon.classList.remove('fa-play')
}
