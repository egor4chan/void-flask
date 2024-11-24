var void_cloud = document.getElementById('content_void');

var session = 0
var game_profit = 0



function open_game_cloud() {
    var WebApp = window.Telegram.WebApp;
    WebApp.headerColor = '#0000FF'

    document.getElementById('content_void').style.filter = 'blur(8px)'
    document.getElementById('gamespam').style.bottom = '0px';
    document.getElementById('gamespam').style.opacity = '1'
    document.getElementById('gamespam').style.zIndex = '10000';
    document.getElementById('question').style.filter = 'blur(5px)'
    document.body.style.overflowY = 'hidden'
}

function close_game_cloud() {
    var WebApp = window.Telegram.WebApp;
    WebApp.headerColor = '#f7f7f7'
    
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light');

    document.getElementById('gameend').style.top = '100%';
    document.getElementById('gameend').style.opacity = '0';

    document.getElementById('content_void').style.filter = 'blur(0px)'
    document.getElementById('gamespam').style.bottom = '-80%';
    document.getElementById('gamespam').style.opacity = '0'
    document.getElementById('gamespam').style.zIndex = '-10000'
    document.getElementById('gamespam').style.filter = 'blur(0px)'
    document.body.style.overflowY = 'scroll'

    session = 0
    game_profit = 0

    setTimeout(()=>{
        
        document.getElementById('balance').innerHTML = 'spam';
        document.getElementById('balance').style.fontSize = '24px'
        document.getElementById('description').style.opacity = 1;

        document.getElementById('time').style = 'transition: 0s; width: 100%;'
        setTimeout(()=>{
            document.getElementById('time').style = 'transition: 30s;'
        }, 500)
        
    }, 500)
    
}

document.getElementById('clicker').addEventListener('mousedown', ()=> {

    game_profit++;
    if (session == 0) {
        document.getElementById('balance').innerHTML = game_profit;
        document.getElementById('balance').style.fontSize = '40px'
        document.getElementById('description').style.opacity = 0;

        document.getElementById('time').style.width = '0%'
        session = 1;

        setTimeout(() => {
            if (session == 1) { // если юзер до сих пор в окне игры
            // награждение, начисление баланса
            document.getElementById('gameend').style.top = '200px';
            document.getElementById('gameend').style.opacity = '1'
            document.getElementById('gamespam').style.filter = 'blur(8px)'
            document.getElementById('claimbtn').setAttribute('onclick', 'close_game_cloud()')
            document.getElementById('summaryearn').innerHTML = document.getElementById('balance').innerHTML
            }
        }, 30000)
    
    }
    if (session == 1) {
    document.getElementById('balance').innerHTML = game_profit;
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light');
    var width = randomIntFromInterval(-10, 90);
    var elem = document.createElement('h4');
    elem.style.left = `${width}%`
    elem.innerHTML = '?'
    document.getElementById('gamespam').appendChild(elem);

    document.getElementById('clicker').style.scale = '0.95';

    setTimeout(()=> {
        document.getElementById('clicker').style.scale = '1';
    }, 100)
    }
    
})

