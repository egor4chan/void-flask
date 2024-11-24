var access_hold = true

var hours = '04'
var minutes = '00'
var seconds = '00'

var time = setInterval(()=>{
    
    if (Number(seconds) > 0) {
        seconds = String(Number(seconds) - 1)
    }
    else {
        if (Number(minutes > 0)) {
            minutes = String(Number(minutes) - 1)
            seconds = '59'
        }
        else {
            if (Number(hours > 0)) {
                hours = String(Number(hours) - 1)
                minutes = '59'
                seconds = '59'
            }
            else {
                clearInterval(time)
            }
        }
    }
    document.getElementById('hold_play').innerHTML = `${hours}:${minutes}:${seconds}`;
}, 100)

if (access_hold) {
    document.getElementById('hold_play').innerHTML = `${hours}:${minutes}:${seconds}`;
}