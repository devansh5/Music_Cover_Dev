let now_playing=document.querySelector(".now-playing");
let track_art=document.querySelector(".track-art");
let track_name=document.querySelector(".track-name");
let track_artist=document.querySelector(".track-artist");


let prev_btn=document.querySelector(".prev");
let play_btn=document.querySelector(".play");
let next_btn=document.querySelector(".next");

let track_index=0;
let isplaying = false;



let curr_track=document.createElement('audio');


let track_list=[
    {
        name:"2002",
        artist:"Anne Marie",
        bg_img:"https://images.hdqwalls.com/wallpapers/anne-marie-4k-de.jpg",
        image:"https://i.pinimg.com/originals/5e/06/7d/5e067dd922d183c8ac4c3bb1f980966f.jpg",
        path:"2002.mp3"
    },
    {
        name:"Believer",
        artist:"Imagine Dragons",
        bg_img:"https://media.sketchfab.com/models/619ac14f97ad444aac89e453c8920061/thumbnails/040075ffcdbb4bf8a10449fad5ce017e/01d8845a4dea449d9dab62d52d17c727.jpeg",
        image:"https://images.genius.com/f258673d4d0d2748c8bd2693bcdd6440.1000x1000x1.jpg",
        path:"believer.mp3"
    },
    {
        name:"Hall Of Fame",
        artist:"Script",
        bg_img:"https://i.ytimg.com/vi/mk48xRzuNvA/maxresdefault.jpg",
        image:"https://images.rapgenius.com/6808b60b427c626b41455ff375bb8b98.600x600x1.jpg",
        path:"halloffame.mp3"
    },
    {
        name:"Lose Yourself",
        artist:"Eminem",
        bg_img:"https://cdn3.movieweb.com/i/article/EkO52du73gCDZnSsmQXpaZhJ0lYF5l/1200:100/Eminem-Oscars-Lose-Yourself.jpg",
        image:"https://lyricsteam.com/wp-content/uploads/2020/05/lose-yourself-lyrics-1170x658.jpg",
        path:"loseyourself.mp3"
    },
    {
        name:"Just the way you are",
        artist:"Bruno Mars",
        bg_img:"https://i.pinimg.com/originals/7b/f6/eb/7bf6eb6efaca2a936af61e7f6d293356.jpg",
        image:"https://vignette.wikia.nocookie.net/american-top-40-hot-ac/images/b/b7/Bruno_Mars_-_Just_The_Way_You_Are_Cover.jpg/revision/latest?cb=20170205201745",
        path:"brunomars.mp3"
    },
    {
        name:"Let me Down Slowly",
        artist:"Alac Benjamin",
        bg_img:"https://i.ytimg.com/vi/jLNrvmXboj8/maxresdefault.jpg",
        image:"https://i1.sndcdn.com/artworks-000352463268-5bfny8-t500x500.jpg",
        path:"letme.mp3"
    },
    {
        name:"All Of Me",
        artist:"John Legend",
        bg_img:"https://i.ytimg.com/vi/SsKvgN-wduM/maxresdefault.jpg",
        image:"https://miro.medium.com/max/1200/0*unZfyfg9MSewqZGW.png",
        path:"allofme.mp3"
    },
    {
        name:"Love Someone",
        artist:"Lukas Graham",
        bg_img:"https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/muzooka/Lukas%2BGraham/Lukas%2520Graham_16_9_1581371530.jpg?itok=akLILdKN",
        image:"https://i.pinimg.com/564x/26/3b/d7/263bd7ced2c4f2896b9388c673786119.jpg",
        path:"lovesomeone.mp3"
    },
    {
        name:"You are the reason",
        artist:"Calum Scott",
        bg_img:"https://www.officialcharts.com/media/650797/calum-scott-1100.jpg?width=796&height=420&mode=stretch",
        image:"https://upload.wikimedia.org/wikipedia/en/1/14/Calum_Scott_You_Are_the_Reason.jpg",
        path:"calum.mp3"
    },
    {
        name:"When You Say Nothing At all",
        artist:"Ronan Keating",
        bg_img:"https://m.media-amazon.com/images/M/MV5BZjlmYzg2YTItZjA1MC00YTA3LTlmMzUtMDY4MjRkOWEwNTljXkEyXkFqcGdeQXVyMjQwNTA0ODg@._V1_.jpg",
        image:"https://images-na.ssl-images-amazon.com/images/I/71b-kzMxHGL._SX466_.jpg",
        path:"ronan.mp3"
    }
];

function load_track(track_index)
{
    
    


    curr_track.src=track_list[track_index].path;

    curr_track.load();

    track_art.style.backgroundImage=
        "url("+track_list[track_index].image+")";
    
    document.body.style.backgroundImage=
        "url("+track_list[track_index].bg_img+")";
    track_name.textContent=track_list[track_index].name;

    track_artist.textContent=track_list[track_index].artist;

    now_playing.textContent=" "+(track_index+1)+" Of "+track_list.length;

   


    curr_track.addEventListener("ended",nexttrack);

    
}


function playpausetrack()
{
    if (!isplaying) 
    {
        playtrack();
    }

    else {pausetrack()};
}
function playtrack(){
    curr_track.play();
    isplaying=true;

    play_btn.innerHTML='<i class="far fa-pause-circle fa-5x"></i>';
}

function pausetrack(){
    curr_track.pause();
    isplaying=false;

    play_btn.innerHTML='<i class="far fa-play-circle fa-5x"></i>';
}
function nexttrack(){
    if(track_index<track_list.length-1)
        track_index+=1;
    else track_index=0;

    load_track(track_index);
    playtrack();
}
function prevtrack(){
    if(track_index>0)
    {
        track_index-=1;
    }
    else track_index=track_list.length;

    load_track(track_index);
    playtrack();
}

load_track(track_index);