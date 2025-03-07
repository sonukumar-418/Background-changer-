function updateTime() {
    const timeElement = document.getElementById('time');
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`;
    timeElement.textContent = time;
}

setInterval(updateTime, 1000);
updateTime(); 

const playButton = document.getElementById('play-button');
var isPlaying = false;
const audio = new Audio('lofi-song.mp3');
playButton.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        playButton.textContent = 'Pause';
        isPlaying = true;
    } else {
        audio.pause();
        playButton.textContent = 'Play';
        isPlaying = false;
    }
})