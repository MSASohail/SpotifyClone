console.log("welcome to website")

// Initilise Variables
let songIndex = 0;
let audioElement = new Audio('rafi.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songItem'));
let mastersongname=document.getElementById('mastersongname');
let songitemplay=document.getElementsByClassName('songitemplay');

let songs = [
    { songName: "random", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Dil Galti", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "ANNA re nanena nano", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "rataan lambiya", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "maan meri jaan", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rafi saab", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Phero Na Najariya", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
]
songitems.forEach((element, i) => {
    // console.log(element);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');

    // update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
    // console.log(e.target);
    makeAllPlays();  
    songIndex=parseInt(e.target.id)
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src=`songs/${songIndex+1}.mp3`
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();

    fa-circle-play.addEventListener('click',()=>{
        audioElement.pause();
    })
     
    gif.style.opacity=1;  
    masterPlay.classList.add('fa-circle-play')
    masterPlay.classList.remove('fa-circle-pause')  
   })
})



document.getElementById("next").addEventListener('click',()=>{
if(songIndex>=6){
    songIndex=0;
}else{
    songIndex+=1;
}
audioElement.src=`songs/${songIndex+1}.mp3`
mastersongname.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.add('fa-circle-play')
masterPlay.classList.remove('fa-circle-pause')
})

document.getElementById("previous").addEventListener('click',()=>{
if(songIndex<=6){
    songIndex=0;
}else{
    songIndex+=1;
}
audioElement.src=`songs/${songIndex+1}.mp3`
mastersongname.innerText=songs[songIndex].songName;
audioElement.currentTime-=1;
audioElement.play();
masterPlay.classList.add('fa-circle-play')
masterPlay.classList.remove('fa-circle-pause')
})