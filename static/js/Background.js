function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function create_element() {
    var element = document.createElement('h6');
    element.innerHTML = '?';
    element.setAttribute('id', 'question');
    element.style.left = `${randomIntFromInterval(-1, 96)}%`
    document.getElementById('gamespam').appendChild(element);

    setTimeout(()=>{element.style.top = '120%';}, 100)
    setTimeout(()=>{element.remove()}, 15000)
}


setInterval(() => {create_element()}, 1000)



