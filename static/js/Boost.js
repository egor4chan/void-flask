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
  try {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://egor4chan-stars-12d2.twc1.net/generate-invoice', true);

    httpRequest.onprogress = function () {
      if (httpRequest.status >= 200 && httpRequest.status < 300) {
        const invoiceLink = httpRequest.response;

        if (window.Telegram && window.Telegram.WebApp) {
          
          window.Telegram.WebApp.openInvoice(invoiceLink, (status) => {
            if (status === 'paid') {
              alert('Payment successful!');
            } else if (status === 'cancelled') {
              alert(`Payment cancelled: ${status}`);
            } else {
              alert('Payment failed or not completed.');
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