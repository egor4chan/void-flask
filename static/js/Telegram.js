var WebApp = window.Telegram.WebApp;
var username = WebApp.initDataUnsafe.user.username;
var start_param = WebApp.WebAppInitData.start_param;

alert(`Start param: ${start_param}`)

if (username == undefined) 
    username = `id${WebApp.initDataUnsafe.user.id}`

document.getElementById('username').innerHTML = username;
document.getElementById('userletter').innerHTML = username[0]
document.getElementById('userletterintop').innerHTML = username[0]
