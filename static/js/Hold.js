function open_game_hold() {
    var WebApp = window.Telegram.WebApp;
    WebApp.headerColor = '#0000FF'

    document.getElementById('content_void').style.filter = 'blur(8px)'

    document.getElementById('gamehold').style.bottom = '0px';
    document.getElementById('gamehold').style.opacity = '1'
    document.getElementById('gamehold').style.zIndex = '10000';

    document.body.style.overflowY = 'hidden'
}

function close_game_hold() {
    var WebApp = window.Telegram.WebApp;
    WebApp.headerColor = '#f7f7f7'
    
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light');

    document.getElementById('gameend').style.top = '100%';
    document.getElementById('gameend').style.opacity = '0';

    document.getElementById('content_void').style.filter = 'blur(0px)'
    document.getElementById('gamehold').style.bottom = '-80%';
    document.getElementById('gamehold').style.opacity = '0'
    document.getElementById('gamehold').style.zIndex = '-10000'
    document.getElementById('gamehold').style.filter = 'blur(0px)'

    document.body.style.overflowY = 'scroll'
    hold_session = 0
    level = 1

    setTimeout(()=>{
        
        document.getElementById('hold_balance').innerHTML = 'hold';
        document.getElementById('hold_balance').style.fontSize = '24px'
        document.getElementById('hold_description').style.opacity = 1;

        document.getElementById('hold_time').style = 'transition: 0s; width: 100%;'
        setTimeout(()=>{
            document.getElementById('hold_time').style = 'transition: 30s;'
        }, 500)
        
    }, 500)
}

var holder = document.getElementById('holder');
var scale = 1
var interval
var level = 1

var hold_session = 0

// зажал холдер
holder.addEventListener('touchstart', ()=>{
    if (hold_session == 0) { // первое нажатие
        hold_session = 1
        document.getElementById('hold_balance').innerHTML = level
        document.getElementById('hold_balance').style.fontSize = '40px'
        document.getElementById('hold_description').style.opacity = 0;

        document.getElementById('hold_time').style.width = '0%'
    }

    holder.style.color = 'blue'
    interval = setInterval(()=>{
        holder.style.scale = 1.1;
        var WebApp = window.Telegram.WebApp;
        WebApp.HapticFeedback.impactOccurred('light');
        
        document.getElementById('hold_balance').innerHTML = Number(document.getElementById('hold_balance').innerHTML) + Number(level)
        level ++;

        setTimeout(()=>{
            holder.style.scale = 1;
        }, 200)
        
    }, 1000)

    setTimeout(() => {
        if (hold_session == 1) { // если юзер до сих пор в окне игры
        // награждение, начисление баланса
        document.getElementById('gameend').style.top = '200px';
        document.getElementById('gameend').style.opacity = '1'
        document.getElementById('claimbtn').setAttribute('onclick', 'close_game_hold()')
        document.getElementById('gamehold').style.filter = 'blur(8px)'
        
        document.getElementById('summaryearn').innerHTML = document.getElementById('hold_balance').innerHTML
        }
    }, 30000)

    
})
// отпустил холдер
holder.addEventListener('touchend', ()=>{
    holder.style.color = 'black'
    holder.style.scale = 1;
    scale = 1
    clearInterval(interval)
    level = 1
})