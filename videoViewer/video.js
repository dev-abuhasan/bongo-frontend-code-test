/*Write a video player application with ‘Play’, ‘Forward’, ‘Rewind’ functionalities.*/

// Select elements here
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');
const playButton = document.getElementById('playPause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const videoWorks = !!document.createElement('video').canPlayType;


if (videoWorks) {
    video.controls = true;//false for total controls disable
}

const togglePlay = () => {
    if (video.paused || video.ended) {
        video.play();
        playButton.innerHTML = "Pause";
    } else {
        video.pause();
        playButton.innerHTML = "Play";

    }
}
// Add event listeners here
playButton.addEventListener('click', togglePlay);

const videoForward = (e) => {
    vid_currentTime = video.currentTime;
    video.currentTime = vid_currentTime + 5;
}
const videoRewind = (e) => {
    vid_currentTime = video.currentTime;
    video.currentTime = vid_currentTime - 5;
}
forward.addEventListener('click', videoForward);
rewind.addEventListener('click', videoRewind);