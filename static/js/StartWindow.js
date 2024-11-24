var WebApp = window.Telegram.WebApp;
WebApp.expand()

WebApp.headerColor = '#f7f7f7'
WebApp.backgroundColor = '#f7f7f7';
WebApp.bottomBarColor = '#f7f7f7'

var startInterval = setInterval(()=> {
    document.getElementById('v').innerHTML = '?'
    setTimeout(()=>{
        document.getElementById('v').innerHTML = 'v'
    }, 125)
}, 450)

var startIntervalI = setInterval(()=> {
    document.getElementById('i').innerHTML = '?'
    setTimeout(()=>{
        document.getElementById('i').innerHTML = 'i'
    }, 100)
}, 350)

var startIntervalO = setInterval(()=> {
    document.getElementById('o').innerHTML = '?'
    setTimeout(()=>{
        document.getElementById('o').innerHTML = 'o'
    }, 500)
}, 380)

var startIntervalD = setInterval(()=> {
    document.getElementById('d').innerHTML = '?'
    setTimeout(()=>{
        document.getElementById('d').innerHTML = 'd'
    }, 200)
}, 560)

var vibro = setInterval(() => {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light');
}, 500);

setTimeout(() => {
    
    clearInterval(startInterval)
    clearInterval(startIntervalO)
    clearInterval(startIntervalI)
    clearInterval(startIntervalD)
    clearInterval(vibro)

    setTimeout(()=>{
        document.getElementById('present').style.scale = 1.3;
    }, 200)
    

    setTimeout(()=>{
        window.location.href = '/game'
    }, 1000)
}, 2000)

