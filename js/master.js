// Full screen mode,Mini player and dark/light mode video quality


scrmod.addEventListener('click', function() {
    screenmode()
})

function screenmode() {
    if (full) {
        scrm.src = "https://img.icons8.com/fluent-systems-filled/24/" + png + "/fullscreen.png"
        full = !full
        document.exitFullscreen()
    } else {
        scrm.src = "https://img.icons8.com/ios-filled/25/" + png + "/normal-screen.png"
        full = !full
        cv.requestFullscreen()
    }
}

blobfun

function blobfun() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", video.src)
    xhr.responseType = 'arraybuffer'

    xhr.onload = function(e) {
        var blob = new Blob([xhr.response])
        var url = URL.createObjectURL(blob)
        video.src = url
    }
    xhr.send()
}


var xh = new XMLHttpRequest()
xh.open("GET", "low.mp4")
xh.responseType = 'arraybuffer'
xh.onload = function(e) {
    var blob = new Blob([xh.response])
    var url = URL.createObjectURL(blob)
    minivideo.src = url
}
xh.send()

bar.addEventListener('mousemove', (e) => {
    miniplay.style.display = "block"
    var te = (e.offsetX / bar.offsetWidth) * video.duration
    var le = ((e.offsetX / bar.offsetWidth) * 100 - 9)
    miniplay.style.left = (le < 0) ? 0 : (le > 82) ? 82 + "%" : le + "%"
    minivideo.currentTime = te
})

cv.addEventListener('mousemove', (e) => {
    let py = e.pageY
    if (py > 560 && py < 570) {
        miniplay.style.display = 'block'
    } else {
        miniplay.style.display = 'none'
    }
})


function chr(name, value) {
    root.style.setProperty(name, value)
}

mode.addEventListener('click', function() {
    if (darkmode) {
        // Convert into light mode
        mode.innerText = "DARK"
        chr('--b', 'white')
        chr('--w', 'black')
        chr('--bc', '#d1d8e0')
        chr('--n', 'black')
        chr('--conbg', '#b2bec3b3')
        chr('--navbg', '#45aaf2')
        chr('--range', '#857f7fd5')
        chr('--c', '#1e272e')
        png = "000000"
        darkmode = false
    } else {
        // Convert into dark mode
        mode.innerText = "LIGHT"
        chr('--b', 'black')
        chr('--w', 'white')
        chr('--bc', '#535c68')
        chr('--n', '#78e08f')
        chr('--conbg', '#535c68b7')
        chr('--navbg', '#2f3640')
        chr('--range', '#857f7fd5')
        chr('--c', '#55E6C1')
        png = "ffffff"
        darkmode = true
    }
    plauch()
    volch()
    scrch()
})

qua.forEach(e => {
    e.addEventListener('click', () => {
        ct = video.currentTime
        if (e.dataset.q == 1) {
            video.src = 'low.mp4'
        }
        if (e.dataset.q == 2) {
            video.src = 'hd.mp4'
        }
        if (e.dataset.q == 3) {
            video.src = 'ultra.mp4'
        }

        video.currentTime = ct
        video.play()
    })
})