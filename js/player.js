window.addEventListener('load', () => {
    if (localStorage.getItem("at") != null) {
        // video.currentTime = localStorage.getItem('at')
    }
})

// var v = video.src.split("/")
// v = v[v.length - 1];
// v = v.split(".")
// v = v[0].replace("%20", " ")
// title.innerHTML = v;
title.innerHTML = "Iron Man meets Iron Lady"

bt.addEventListener('click', () => {
    plau()
})

function plau() {
    if (video.paused) {
        pap.src = "https://img.icons8.com/ios-filled/" + playsize + "/" + png + "/pause.png"
        title.style.opacity = 0
        sp.src = "https://img.icons8.com/ios-filled/50/" + png + "/play.png"
        video.play();
    } else {
        pap.src = "https://img.icons8.com/ios-filled/" + playsize + "/" + png + "/play.png"
        sp.src = "https://img.icons8.com/ios-filled/50/" + png + "/pause.png"
        title.style.opacity = 1
        setTimeout(function() {
            title.style.opacity = 0
        }, 3000)
        video.pause();
    }

    showplay.classList.add('ani')
    setTimeout(() => {
        showplay.classList.remove('ani')
    }, 500)


}

function plauch() {
    if (video.paused) {
        pap.src = "https://img.icons8.com/ios-filled/" + playsize + "/" + png + "/play.png"
    } else {
        pap.src = "https://img.icons8.com/ios-filled/" + playsize + "/" + png + "/pause.png"
    }
}

function volch() {
    if (video['volume'] == 0) {
        vi.src = "https://img.icons8.com/metro/" + volsize + "/" + png + "/mute.png"
    } else {
        vi.src = "https://img.icons8.com/metro/" + volsize + "/" + png + "/low-volume.png"
    }
}

function scrch() {
    scrmod.src = "https://img.icons8.com/fluent-systems-filled/24/" + png + "/fullscreen.png"
}

var min = 0
var sec = 0

video.addEventListener('timeupdate', function(e) {
    var c = parseInt(video.currentTime)
    var d = parseInt(video.duration)
    fill.style.width = (c / d) * 100 + "%"
    var cm = Math.floor(video.currentTime / 60)
    var cs = Math.floor(video.currentTime - cm * 60)
    var dm = Math.floor(video.duration / 60)
    var ds = Math.floor(video.duration - dm * 60)
    per.innerHTML = ((c / d) * 100).toFixed(1) + "%"
    if (cs < 10) {
        cs = "0" + cs
    }
    if (ds < 10) {
        ds = "0" + ds
    }
    cur.innerHTML = cm + ":" + cs
    dur.innerHTML = dm + ":" + ds
    localStorage.setItem('at', Math.floor(video.currentTime))
})

bar.addEventListener('click', function(e) {
    video.currentTime = (e.offsetX / bar.offsetWidth) * video.duration
})

// Current Time change
function curt(e) {
    var chskip;
    showskip.style.display = "block"
    if (e > 0)
        chskip = front
    else
        chskip = back
    chskip.classList.add('ani')
    setTimeout(() => {
        chskip.classList.remove('ani')
        showskip.style.display = "none"
    }, 500)
    video.currentTime += e
}

sk.forEach(button => button.addEventListener('click', function() {
    curt(parseInt(this.dataset.skip))
}))

function volmute() {
    if (video['volume'] != 0) {
        vi.src = "https://img.icons8.com/metro/" + volsize + "/" + png + "/mute.png"
        vol.value = 0
        video['volume'] = 0
    } else {
        vi.src = "https://img.icons8.com/metro/" + volsize + "/" + png + "/low-volume.png"
        vol.value = 0.5
        video['volume'] = 0.5
    }
}

function chvol(vol) {
    video['volume'] += vol
}

volmod.addEventListener('click', function() {
    volmute()
})

vol.addEventListener('mousemove', function() {
    video['volume'] = this.value
    if (video['volume'] == 0) {
        vi.src = "https://img.icons8.com/metro/" + volsize + "/ffffff/mute.png"
    } else {
        vi.src = "https://img.icons8.com/metro/" + volsize + "/ffffff/low-volume.png"
    }
})

function playback(e) {
    video['playbackRate'] = e
}

pl.forEach(e => {
    e.addEventListener('click', () => {
        playback(e.dataset.play)
    })
})

sklf.forEach(s => {
    s.addEventListener('dblclick', () => {
        curt(-10)
    })
});

skrg.forEach(s => {
    s.addEventListener('dblclick', () => {
        curt(15)
    })
});

window.addEventListener("keydown", function(key) {

    switch (Math.floor(key.keyCode)) {
        case 77:
            volmute()
            break;
        case 37:
            curt(-10)
            break;
        case 39:
            curt(25)
            break;
        case 32:
            plau()
            break;
        case 75:
            plau()
            break;
        case 38:
            chvol(0.1)
            break;
        case 40:
            chvol(-0.1)
            break;
        case 70:
            screenmode()
            break
    }
})
