import Player from '@vimeo/player';
import * as throttle from 'lodash.throttle';
const player = new Player('vimeo-player');
const onPlay = function (timeupdate) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeupdate));
};

player.on('timeupdate', throttle((onPlay), 1000));
const currentSecond = JSON.parse(localStorage.getItem("videoplayer-current-time"));
console.log(currentSecond);
player.setCurrentTime(currentSecond.seconds);