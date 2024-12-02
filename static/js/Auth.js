var WebApp = window.Telegram.WebApp;

var user_id = WebApp.initDataUnsafe.user.id // user id
var refer_id = WebApp.initDataUnsafe.start_param; // refer's id


httpRequest = new XMLHttpRequest();

httpRequest.open('POST', 'auth');
var data = JSON.stringify({"user_id": user_id, "refer_id": refer_id});
httpRequest.send(data);

alert(`${user_id}, ${refer_id}`)
