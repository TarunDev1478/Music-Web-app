const music = new Audio('song.mp3');
//create array

const songs = [
    {
        id: '1',
        songname: `On My Way
        <div class="subtitle">Alan Walker</div>`,
        poster: "/static/song1.jpg"
    },
    {
        id: '2',
        songname: `We Don't Talk<br> Anymore
        <div class="subtitle">Charlie Puth</div>`,
        poster: "/static/song2.jpg"

    },
    {
        id: '3',
        songname: `Dil(Ek Villian)
        <div class="subtitle">Charlie Puth</div>`,
        poster: "/static/song3.jpg"
    },
    {
        id: '4',
        songname: `Raj Ankhein Teri
        <div class="subtitle">Arijit Singh</div>`,
        poster: "/static/song4.jpg"
    },
    {
        id: '5',
        songname: `Hamari Adhuri<br> Khanai
        <div class="subtitle">Arijit Singh</div>`,
        poster: "/static/song5.jpg"
    },
    {
        id: '6',
        songname: `Ae Dil Hai Mushkil
        <div class="subtitle">Arijit Singh</div>`,
        poster: "/static/song6.jpg"
    },
    {
        id: '7',
        songname: `Agar Tum Sath Ho
        <div class="subtitle">Arijit Singh</div>`,
        poster: "/static/song7.jpg"
    },
    {
        id: '8',
        songname: `Kalank(Title Track)
        <div class="subtitle">Arijit Singh</div>`,
        poster: "/static/song8.jpg"
    },
    {
        id: '9',
        songname: `Kuley Kuley 3.0
        <div class="subtitle">Honey Singh</div>`,
        poster: "/static/song9.jpg"
    },
    {
        id: '10',
        songname: `Kaun Tujhe
        <div class="subtitle">Palak Muchhal</div>`,
        poster: "/static/song10.jpg"
    },
    {
        id: '11',
        songname: `Main Phir Bhi Tumko
        <div class="subtitle">Arijit Singh</div>`,
        poster: "/static/song11.jpg"
    },
    {
        id: '12',
        songname: `Tum Kya Mile
        <div class="subtitle">Arijit Singh</div>`,
        poster: "/static/song12.jpg"
    },
    {
        id: '13',
        songname: `Tu Hi Hai
        <div class="subtitle">Rahul Mishra</div>`,
        poster: "/static/song13.jpg"
    },
    {
        id: '14',
        songname: `Tera Chehra
        <div class="subtitle">Arijit Singh</div>`,
        poster: "/static/song14.jpg"
    },
    {
        id: '15',
        songname: `Khamoshiyan
        <div class="subtitle">Arijit Singh</div>`,
        poster: "/static/song15.jpg"
    },
    {
        id: '16',
        songname: `O Bedardeya
        <div class="subtitle">Arijit Singh</div>`,
        poster: "/static/song16.jpg"
    },

]
const vol = document.getElementById('vol');
const dot2 = document.getElementById('voldot');

Array.from(document.getElementsByClassName('songlist')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;
})
Array.from(document.getElementsByClassName('songitem')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i + 6].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i + 6].songname;
})


let masterplay = document.getElementById('masterplayer');
wave = document.getElementsByClassName('wave')[0];
masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        volbar.style.width = `100%`;
        dot2.style.left = `100%`;
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    }
    else {
        music.pause();
        masterplay.classList.remove('bi-pause-fill');
        masterplay.classList.add('bi-play-fill');
        wave.classList.remove('active2');
    }
})
const makeallplay = () => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((element) => {
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
    })
}
const makeallbackground = () => {
    Array.from(document.getElementsByClassName('songlist')).forEach((element) => {
        element.style.background = "rgb(105,105,107,0)";
    })
}
let index = 0;
imageplayer = document.getElementById('postmasterplayer');
title = document.getElementById('title');
let download = document.getElementById('download');
Array.from(document.getElementsByClassName('playlistplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeallplay();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `static/song${index}.mp3`;
        imageplayer.src = `static/song${index}.jpg`;
        download.href = `static/song${index}.mp3`;
        music.play();
        volbar.style.width = `100%`;
        dot2.style.left = `100%`;
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        wave.classList.add('active2');

        let titlename = songs.filter((ele) => {
            return ele.id == index;
        })
        titlename.forEach(ele => {
            let { songname } = ele;
            title.innerHTML = songname;
            download.setAttribute('download', songname)
        })
        makeallbackground();
        Array.from(document.getElementsByClassName('songlist'))[`${index - 1}`].style.background = "rgb(105,105,107,0.2)";
    })
})

const currentTime = document.getElementById('currentStart');
const currentEnd = document.getElementById('currentEnd');
const seek = document.getElementById('seek');
const bar2 = document.getElementById('bar2');
const dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let mus_curr = music.currentTime;
    let mus_len = music.duration;
    let min = Math.floor(mus_len / 60);
    let sec = Math.floor(mus_len % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerHTML = `${min}:${sec}`;
    let min1 = Math.floor(mus_curr / 60);
    let sec2 = Math.floor(mus_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }
    currentTime.innerHTML = `${min1}:${sec2}`;

    let progresssbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progresssbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})
const next_m = () => {
    masterplay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index++;
    music.src = `static/song${index}.mp3`;
    imageplayer.src = `static/song${index}.jpg`;
    music.play();
    volbar.style.width = `100%`;
    dot2.style.left = `100%`;
    let titlename = songs.filter((ele) => {
        return ele.id == index;
    })
    titlename.forEach(ele => {
        let { songname } = ele;
        title.innerHTML = songname;
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songlist'))[index - 1].style.background = "rgb(105,105,107,0.2)";

    const tell = document.getElementsByClassName('playlistplay')[index - 1];
    makeallplay();
    tell.classList.add('bi-pause-circle-fill');
    tell.classList.remove('bi-play-circle-fill');
}

const vol_ico = document.getElementById('vol_ico');

const volbar = document.getElementsByClassName('volbar')[0];

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_ico.classList.remove('bi-volume-down-fill');
        vol_ico.classList.add('bi-volume-mute-fill');
        vol_ico.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_ico.classList.add('bi-volume-down-fill');
        vol_ico.classList.remove('bi-volume-mute-fill');
        vol_ico.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_ico.classList.remove('bi-volume-down-fill');
        vol_ico.classList.remove('bi-volume-mute-fill');
        vol_ico.classList.add('bi-volume-up-fill');
    }
    let vol_v = vol.value;
    volbar.style.width = `${vol_v}%`;
    dot2.style.left = `${vol_v}%`;
    music.volume = vol_v / 100;
})
let back = document.getElementById('back');
let next = document.getElementById('next');
let shuffle = document.getElementById('shuffle');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `static/song${index}.mp3`;
    imageplayer.src = `static/song${index}.jpg`;
    music.play();
    volbar.style.width = `100%`;
        dot2.style.left = `100%`;
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    wave.classList.add('active2');

    let titlename = songs.filter((ele) => {
        return ele.id == index;
    })
    titlename.forEach(ele => {
        let { songname } = ele;
        title.innerHTML = songname;
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songlist'))[index - 1].style.background = "rgb(105,105,107,0.2)";
})

next.addEventListener('click', () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songitem')).length) {
        index = 1;
    }
    music.src = `static/song${index}.mp3`;
    imageplayer.src = `static/song${index}.jpg`;
    music.play();
    volbar.style.width = `100%`;
        dot2.style.left = `100%`;
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    wave.classList.add('active2');

    let titlename = songs.filter((ele) => {
        return ele.id == index;
    })
    titlename.forEach(ele => {
        let { songname } = ele;
        title.innerHTML = songname;
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songlist'))[`${index}` - 1].style.background = "rgb(105,105,107,0.2)";
})



let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('Right_scroll');
let popsong = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', () => {
    popsong.scrollLeft -= 330;
})
right_scroll.addEventListener('click', () => {
    popsong.scrollLeft += 330;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', () => {
    item.scrollLeft -= 250;
})
right_scrolls.addEventListener('click', () => {
    item.scrollLeft += 250;
})

const shuffl = document.getElementsByClassName('shuffle')[0];
var count;
shuffl.addEventListener('click', () => {
    a = shuffl.innerHTML;
    switch (a) {
        case "repeat":
            shuffl.classList.add("bi-shuffle");
            shuffl.classList.remove("bi-repeat");
            shuffl.classList.remove("bi-music-note-beamed");
            shuffl.innerHTML = 'shuffle';
            break;
        case "next":
            shuffl.classList.remove("bi-shuffle");
            shuffl.classList.remove("bi-repeat");
            shuffl.classList.add("bi-music-note-beamed");
            shuffl.innerHTML = 'repeat';
            break;
        case "shuffle":
            shuffl.classList.remove("bi-shuffle");
            shuffl.classList.add("bi-repeat");
            shuffl.classList.remove("bi-music-note-beamed");
            shuffl.innerHTML = 'next';
            break;
    }
})

music.addEventListener('ended', () => {
    b = shuffl.innerHTML;
    switch (b) {
        case "shuffle":
            random();
            break;
        case "next":
            repeat_m();
            break;
        case "repeat":
            next_m();
            break;
    }
})

function random() {
    index = Math.floor(Math.random() * songs.length + 1);
    if (index == 0) {
        index = Math.floor(Math.random() * songs.length + 1);
    }
    music.src = `static/song${index}.mp3`;
    imageplayer.src = `static/song${index}.jpg`;
    music.play();
    volbar.style.width = `100%`;
        dot2.style.left = `100%`;
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    let titlename = songs.filter((ele) => {
        return ele.id == index;
    })
    titlename.forEach(ele => {
        let { songname } = ele;
        title.innerHTML = songname;
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songlist'))[index - 1].style.background = "rgb(105,105,107,0.2)";
}

function repeat_m() {
    masterplay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index;
    music.src = `static/song${index}.mp3`;
    imageplayer.src = `static/song${index}.jpg`;
    music.play();
    volbar.style.width = `100%`;
        dot2.style.left = `100%`;
    let titlename = songs.filter((ele) => {
        return ele.id == index;
    })
    titlename.forEach(ele => {
        let { songname } = ele;
        title.innerHTML = songname;
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songlist'))[index - 1].style.background = "rgb(105,105,107,0.2)";

    const tell = document.getElementsByClassName('playlistplay')[index - 1];
    makeallplay();
    tell.classList.add('bi-pause-circle-fill');
    tell.classList.remove('bi-play-circle-fill');
}

window.addEventListener('load', () => {
    const searchInput = document.getElementById('inputbox');
    searchInput.value = "";
});

const resultbox = document.getElementById('search_result');
const inputbox = document.getElementById('inputbox');
inputbox.addEventListener('keyup', () => {
    let result = [];
    let input = inputbox.value.toLowerCase();
    if (input.length) {
        result = songs.filter((keyword) => {
            return keyword.songname.toLowerCase().includes(input);
        });
    }
    display(result);
    Array.from(resultbox.children).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            const ele=e.target.id;
            var match = ele.match(/\d+/);
             if (match) {
            var number = parseInt(match[0], 10);
            }
            music.src = `static/song${number}.mp3`;
         imageplayer.src = `static/song${number}.jpg`;
         music.play();  
         volbar.style.width = `100%`;
        dot2.style.left = `100%`;
     masterplay.classList.remove('bi-play-fill');
     masterplay.classList.add('bi-pause-fill');
     wave.classList.add('active2');
     let titlename = songs.filter((ele) => {
         return ele.id == number;
     })
     titlename.forEach(ele => {
         let { songname } = ele;
         title.innerHTML = songname;
     })
     makeallbackground();
     Array.from(document.getElementsByClassName('songlist'))[number-1].style.    background = "rgb(105,105,107,0.2)";
     });
        
    });  

function display(result) {
    const content = result.map((list) => {
        return `<li id=l${list.id}>` + `<img src='${list.poster}' alt=''>` + `<h5>${list.songname}</h5>` + '<i class="bi playlistplay bi-play-circle-fill"></i>' + "</li>";
    });
    resultbox.innerHTML = content.join('');
}

});


