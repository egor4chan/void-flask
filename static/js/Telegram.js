var WebApp = window.Telegram.WebApp;
var username = WebApp.initDataUnsafe.user.username;

var user_id = WebApp.initDataUnsafe.user.id // user id
var start_param = WebApp.initDataUnsafe.start_param; // refer's id

// register user with 'user_id' and 'start_param'

if (username == undefined) 
    username = `id${WebApp.initDataUnsafe.user.id}`

document.getElementById('username').innerHTML = username;
document.getElementById('userletter').innerHTML = username[0]
document.getElementById('userletterintop').innerHTML = username[0]
