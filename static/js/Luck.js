function randint(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function open_game_luck() {
    var WebApp = window.Telegram.WebApp;
    WebApp.headerColor = '#0000FF'
    
    document.getElementById('content_void').style.filter = 'blur(8px)'

    document.getElementById('gameluck').style.bottom = '0px';
    document.getElementById('gameluck').style.opacity = '1'
    document.getElementById('gameluck').style.zIndex = '10000';

    document.body.style.overflowY = 'hidden'
}

function close_game_luck() {
    var WebApp = window.Telegram.WebApp;
    WebApp.headerColor = '#f7f7f7'

    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light');

    document.getElementById('gameend').style.top = '100%';
    document.getElementById('gameend').style.opacity = '0';

    document.getElementById('content_void').style.filter = 'blur(0px)'
    document.getElementById('gameluck').style.bottom = '-80%';
    document.getElementById('gameluck').style.opacity = '0'
    document.getElementById('gameluck').style.zIndex = '-10000'
    document.getElementById('gameluck').style.filter = 'blur(0px)'

    document.getElementById('wheel').style.transition = '0s'
    document.getElementById('wheel').style.rotate = '0deg'

    document.body.style.overflowY = 'scroll'
    document.getElementById('gameluck').style.filter = 'blur(0px)';

    document.getElementById('luck_balance').innerHTML = 'luck'
    document.getElementById('luck_description').innerHTML = 'just use your luck'

    document.getElementById('whitebet').setAttribute('onclick', 'create_game("white")') 
    document.getElementById('bluebet').setAttribute('onclick', 'create_game("blue")') 
    
}

function create_game(color) {
    document.getElementById('whitebet').setAttribute('onclick', '') //create_game('white')
    document.getElementById('bluebet').setAttribute('onclick', '') //create_game('white')
    
    document.getElementById('wheel').style.transition = '5s'
    document.getElementById('luck_description').innerHTML = 'points you can earn.'
    var changing = setInterval(()=>{
        var WebApp = window.Telegram.WebApp;
        WebApp.HapticFeedback.impactOccurred('light');
        document.getElementById('luck_balance').innerHTML = randint(500, 2500) 
    }, 100)

    var degrees = Number(randint(1, 359))
    var wheel = document.getElementById('wheel');
    var win_color
    wheel.style.rotate = `${1800+Number(degrees)}deg`

    if (degrees > 1 && degrees <= 45) {
        win_color = 'white'
    }
    if (degrees > 45 && degrees <= 90) {
        win_color = 'blue'
    }
    if (degrees > 90 && degrees <= 135) {
        win_color = 'white'
    }
    if (degrees > 135 && degrees <= 180) {
        win_color = 'blue'
    }
    if (degrees > 180 && degrees <= 225) {
        win_color = 'white'
    }
    if (degrees > 225 && degrees <= 270) {
        win_color = 'blue'
    }
    if (degrees > 270 && degrees <= 315) {
        win_color = 'white'
    }
    if (degrees > 315 && degrees <= 360) {
        win_color = 'blue'
    }


    setTimeout(() => {
        clearInterval(changing)
        setTimeout(() => {
            if (color == win_color) {
                var WebApp = window.Telegram.WebApp;
                WebApp.HapticFeedback.impactOccurred('light');
            document.getElementById('gameend').style.top = '200px';
            document.getElementById('gameend').style.opacity = '1'
            document.getElementById('claimbtn').setAttribute('onclick', 'close_game_luck()')
            document.getElementById('gameluck').style.filter = 'blur(8px)'
        
            document.getElementById('summaryearn').innerHTML = document.getElementById('luck_balance').innerHTML
            }
            else {
                var WebApp = window.Telegram.WebApp;
                WebApp.HapticFeedback.impactOccurred('light');
                close_game_luck()
            }
        }, 500)
    }, 5000);

    
}