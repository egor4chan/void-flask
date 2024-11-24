function boost() {
    document.getElementById('boostcloud').style.bottom = '0%';
    document.getElementById('content_top').style.filter = 'blur(10px)'
}

function buy_rank() {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light')
    
}

function close_boost() {
    document.getElementById('boostcloud').style.bottom = '-90%';
    document.getElementById('content_top').style.filter = 'blur(0px)'
}

var selected_position = 1

function select(pos) {
    selected_position = pos;
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light')
    if (pos == 1) {
        document.getElementById('s1').style.border = '1px solid blue'

        document.getElementById('s2').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s3').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s4').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s5').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s6').style.border = '1px solid rgb(220, 220, 220)'
    }
    if (pos == 2) {
        document.getElementById('s2').style.border = '1px solid blue'

        document.getElementById('s1').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s3').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s4').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s5').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s6').style.border = '1px solid rgb(220, 220, 220)'
    }
    if (pos == 3) {
        document.getElementById('s3').style.border = '1px solid blue'

        document.getElementById('s2').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s1').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s4').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s5').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s6').style.border = '1px solid rgb(220, 220, 220)'
    }
    if (pos == 4) {
        document.getElementById('s4').style.border = '1px solid blue'

        document.getElementById('s2').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s3').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s1').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s5').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s6').style.border = '1px solid rgb(220, 220, 220)'
    }
    if (pos == 5) {
        document.getElementById('s5').style.border = '1px solid blue'

        document.getElementById('s2').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s3').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s4').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s1').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s6').style.border = '1px solid rgb(220, 220, 220)'
    }
    if (pos == 6) {
        document.getElementById('s6').style.border = '1px solid blue'

        document.getElementById('s2').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s3').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s4').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s5').style.border = '1px solid rgb(220, 220, 220)'
        document.getElementById('s1').style.border = '1px solid rgb(220, 220, 220)'
    }
}

document.getElementById('buystars').addEventListener('click', () => {
  var price = 500
  if (selected_position == 1) { price = 500 }
  if (selected_position == 2) { price = 1250 }
  if (selected_position == 3) { price = 2500 }
  if (selected_position == 4) { price = 5000 }
  if (selected_position == 5) { price = 12500 }
  if (selected_position == 6) { price = 50000 }
  try {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', `https://egor4chan-void-flask-9155.twc1.net/generate-invoice${price}`, true);

    httpRequest.onprogress = function () {
      if (httpRequest.status >= 200 && httpRequest.status < 300) {
        const invoiceLink = httpRequest.response;

        if (window.Telegram && window.Telegram.WebApp) {
          
          window.Telegram.WebApp.openInvoice(invoiceLink, (status) => {
            if (status === 'paid') {
              alert('Payment successful!');
            } else if (status === 'cancelled') {
              console.log('payment cancelled')
            } else {
              console.log('payment cancelled or else')
            }
          });
        } else {
          alert('This functionality is only available inside Telegram Web App.');
        }
      } else {
        throw new Error(`Request failed with status ${httpRequest.status}`);
      }
    };

    httpRequest.onerror = function () {
      console.error('Error during the request.');
      alert('Error generating invoice. Check console for details.');
    };

    httpRequest.send();
  } catch (error) {
    console.error('Error generating invoice:', error);
    alert('Error generating invoice. Check console for details.');
  }
});