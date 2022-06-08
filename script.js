let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;


const music_list = [
    {
        img : './images/1.png',
        name : 'Aawara Shaam',
        artist : 'Swayam',
        music : 'https://drive.google.com/file/d/1xn-eLYwhDE7XxepLLF49l8THjK5Rq2LR/view?usp=sharing'
    },
    {
        img : './images/1.png',
        name : 'Falak Tak Chal Saath Mere',
        artist : 'Swayam',
        music : 'music/Falak Tak Chal Saath Mere  New Song  Latest Song  Amitesh Kushwaha.mp3'
    },
    {
        img : './images/1.png',
        name : 'Hasi Ban Gaye',
        artist : 'Swayam',
        music : 'music/Hasi Ban Gaye SlowedReverb  Ami Mishra  Hamari Adhuri Kahani  Male Version  Music lovers.mp3'
    },
    {
        img : './images/1.png',
        name : 'Hawayein',
        artist : 'Swayam',
        music : 'music/hawayein song lyrics arijit singh.mp3'
    },
    {
        img : './images/1.png',
        name : 'Humnava Mere',
        artist : 'Swayam',
        music : 'music/Humnava Mere slowedreverb  Sad Rain  Bollywood Reverbed.mp3'
    },
    {
        img : './images/1.png',
        name : 'Infinity x Kabhi Jo Badal Barse',
        artist : 'Swayam',
        music : 'music/Infinity x Kabhi Jo Badal Barse Lyrics  LOFI SONG  Hindi English Remix.mp3'
    },
    {
        img : './images/1.png',
        name : 'Ishq Sufiyana',
        artist : 'Swayam',
        music : 'music/Ishq Sufiyana SlowedReverb Sunidhi Chauhan  Textaudio Lyrics.mp3'
    },
    {
        img : './images/1.png',
        name : 'Jaan Nisaar',
        artist : 'Swayam',
        music : 'music/Jaan Nisaar Lofi Arijit Singh  Textaudio Lyrics.mp3'
    },
    {
        img : './images/1.png',
        name : 'Kabira',
        artist : 'Swayam',
        music : 'music/Kabira slowed  reverb Yeh Jawaani Hai Deewani  Textaudio Lyrics.mp3'
    },
    {
        img : './images/1.png',
        name : 'Kaise hua X Dusk till Dawn',
        artist : 'Swayam',
        music : 'music/Kaise hua X Dusk till Dawn  Kabir Singh edit  Hindi English mashup.mp3'
    },
    {
        img : './images/1.png',
        name : 'Kho Gaye Hum Kahan',
        artist : 'Swayam',
        music : 'music/Kho Gaye Hum KahanLyrics  Harrlin Flip  Textaudio Lyrics.mp3'
    },
    {
        img : './images/1.png',
        name : 'Let me down slowly X Tose naina',
        artist : 'Swayam',
        music : 'music/Let me down slowly X Tose naina.mp3'
    },
    {
        img : './images/1.png',
        name : 'Mann Mera',
        artist : 'Swayam',
        music : 'music/Mann Mera  Table No 21  Lofi Remake Shantanu Music  Chill and soothing.mp3'
    },
    {
        img : './images/1.png',
        name : 'Mast magan',
        artist : 'Swayam',
        music : 'music/Mast magan SlowedReverb Arijit Singh  Textaudio Lyrics.mp3'
    },
    {
        img : './images/1.png',
        name : 'Mera Mann',
        artist : 'Swayam',
        music : 'music/Mera Mann Lofi Nautanki Saala JAZ Scape Textaudio Lyrics.mp3'
    },
    {
        img : './images/1.png',
        name : 'Mera wala Sardar',
        artist : 'Swayam',
        music : 'music/Mera wala Sardar Slowed And Reverb  Jugraj Sandhu  Lofi chill Beats Panjabi Lofi Song Channel.mp3'
    },
    {
        img : './images/1.png',
        name : 'Pasoori',
        artist : 'Swayam',
        music : 'music/Pasoori  Ali Sethi Shae Gill Coke Studio Lyrics.mp3'
    },
    {
        img : './images/1.png',
        name : 'Raatan Lambiyan',
        artist : 'Swayam',
        music : 'music/Raatan Lambiyan SlowedReverb Jubin Nautiyal  Asees Kaur.mp3'
    },
    {
        img : './images/1.png',
        name : 'Ranjha',
        artist : 'Swayam',
        music : 'music/Ranjha  lofi remake  slowed reverb rab bhi khel hai khele  lofi ranjha.mp3'
    },
    {
        img : './images/1.png',
        name : 'Runaway x Kaise Hua',
        artist : 'Swayam',
        music : 'music/Runaway x Kaise Hua  Lofi Mashup  Wait for the drop   Adil on the Beat  Midnight Vibes.mp3'  
    },
    {
        img : './images/1.png',
        name : 'Saibo',
        artist : 'Swayam',
        music : 'music/Saibo SlowedReverb Shor In The City  Textaudio Lyrics.mp3'  
    },
    {
        img : './images/1.png',
        name : 'Shayad X Night Changes',
        artist : 'Swayam',
        music : 'music/Shayad X Night Changes Mashup  revibe  Arijit Singh Pritam X One Direction  TikTok Remix.mp3'  
    },
    {
        img : './images/1.png',
        name : 'Talking To The Moon x Kaise Hua',
        artist : 'Swayam',
        music : 'music/Talking To The Moon x Kaise Hua Mashup Full Version  Gravero.mp3'  
    },
    {
        img : './images/1.png',
        name : 'The Love Mashup',
        artist : 'Swayam',
        music : 'music/The Love Mashup Slowed And Reverb  Indian Lofi Song Channel.mp3'  
    },
    {
        img : './images/1.png',
        name : 'Tujhe Kitna Chahne Lage Hum x Changes',
        artist : 'Swayam',
        music : 'music/Tujhe Kitna Chahne Lage Hum x Changes  Lofi Mashup Arijit Singh x XXXTentacion  Tashif.mp3'  
    },
    {
        img : './images/1.png',
        name : 'Tum Mile',
        artist : 'Swayam',
        music : 'music/Tum Mile SlowedReverb  Neeraj Shridhar  Shourov Rahman  Textaudio  For Best.mp3'  
    },
    {
        img : './images/1.png',
        name : '',
        artist : 'Swayam',
        music : 'music/'  
    },
    
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Lo-fi Playlist " + (track_index + 1) + " / " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = curr_track.duration/100;
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
}
function pauseRandom(){
    isRandom = false;
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setUpdate(){
    let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;    
    }
}
