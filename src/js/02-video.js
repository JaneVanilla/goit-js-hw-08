import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeUpdate = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, [wait=1000])

player.on('timeupdate', onTimeUpdate);

player.setCurrentTime(+localStorage.getItem('videoplayer-current-time'));


