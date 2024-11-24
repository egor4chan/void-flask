var WebApp = window.Telegram.WebApp;
WebApp.expand()

WebApp.headerColor = '#f7f7f7'
WebApp.backgroundColor = '#f7f7f7';
WebApp.bottomBarColor = '#f7f7f7'

function remove_dr() {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light')
    document.getElementById('dailyreward').style.bottom = '-400px';
    document.getElementById('content_void').style.filter = 'blur(0px)'
}

//function daily_reward() {
//    var WebApp = window.Telegram.WebApp;
    //WebApp.HapticFeedback.impactOccurred('light')
    //document.getElementById('dailyreward').style.bottom = '0px';
    //document.getElementById('content_void').style.filter = 'blur(20px)'
//}

setTimeout(()=>{daily_reward()}, 200)