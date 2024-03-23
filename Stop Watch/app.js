var min = 0
var sec = 0
var msec = 0
var a = document.getElementById("msec")
var b = document.getElementById("sec")
var c = document.getElementById("min")
var intercal;
function start() {
    interval = setInterval(function () {
        msec++
        a.innerHTML = msec
        if (msec >= 100) {
            sec++
            b.innerHTML = sec
            msec = 0
        }
        else if (sec >= 60) {
            min++
            c.innerHTML = min
            sec = 0
        }

    }, 10)
}
function stop() {
    clearInterval(interval)
}
function reset() {
    msec = 0
    sec = 0
    min = 0
    a.innerHTML = msec
    b.innerHTML = sec
    c.innerHTML = min
}