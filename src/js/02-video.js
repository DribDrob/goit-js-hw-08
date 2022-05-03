import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle((data)=> 
localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds)), 1000));

if (localStorage.getItem(STORAGE_KEY)){
player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)));}