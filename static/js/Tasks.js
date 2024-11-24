var task = document.getElementById('task');
var task_content = document.getElementById('content_tasks');

var taskName = document.getElementById('taskName')
var taskAbout = document.getElementById('taskAbout')
var taskButton = document.getElementById('taskButton')

function close_task() {
    task.style = 'bottom: -400px; opacity: 0;'
    task_content.style.filter = 'blur(0px)';
    task_content.setAttribute('onclick', '')
}

function open_task(task_number) {
    if (task_number == 1) {
        taskName.innerHTML = 'ton transaction'
        taskAbout.innerHTML = 'connect wallet and make simple ton transaction into our wallet.'
        taskButton.innerHTML = 'connect wallet'

        task.style = 'bottom: 0; opacity: 1;'
        task_content.style.filter = 'blur(5px)';
        task_content.onclick = 'close_task()'   
    }
    if (task_number == 2) {
        taskName.innerHTML = 'stars purshare'
        taskAbout.innerHTML = 'you just need to make stars purshare for community. stars is cool.'
        taskButton.innerHTML = 'purshare'

        task.style = 'bottom: 0; opacity: 1;'
        task_content.style.filter = 'blur(5px)';
        task_content.onclick = 'close_task()'
    }
    if (task_number == 3) {
        taskName.innerHTML = 'view video'
        taskAbout.innerHTML = 'view video. trust me.'
        taskButton.innerHTML = "let's go"

        task.style = 'bottom: 0; opacity: 1;'
        task_content.style.filter = 'blur(5px)';
        task_content.onclick = 'close_task()'
    }

    if (task_number == 4) {
        taskName.innerHTML = 'subscribe us'
        taskAbout.innerHTML = 'follow our community. there you can hear a news about void. but you will never know what is void.'
        taskButton.innerHTML = "subscribe"

        task.style = 'bottom: 0; opacity: 1;'
        task_content.style.filter = 'blur(5px)';
        task_content.onclick = 'close_task()'
    }

    if (task_number == 5) {
        taskName.innerHTML = 'subscribe partners'
        taskAbout.innerHTML = 'they are beautiful. and rich.'
        taskButton.innerHTML = "subscribe"

        task.style = 'bottom: 0; opacity: 1;'
        task_content.style.filter = 'blur(5px)';
        task_content.onclick = 'close_task()'
    }

    if (task_number == 6) {
        taskName.innerHTML = 'boost channel'
        taskAbout.innerHTML = 'give your boost for us. it helps to make our content better.'
        taskButton.innerHTML = "boost"

        task.style = 'bottom: 0; opacity: 1;'
        task_content.style.filter = 'blur(5px)';
        task_content.onclick = 'close_task()'
    }

    if (task_number == 7) {
        taskName.innerHTML = '???'
        taskAbout.innerHTML = 'y?u n??d t? m?k? s?mth?ng gr??t.'
        taskButton.innerHTML = "???"

        task.style = 'bottom: 0; opacity: 1;'
        task_content.style.filter = 'blur(5px)';
        task_content.onclick = 'close_task()'
    }
}

