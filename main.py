from flask import Flask, render_template, jsonify, request
from telegram import Bot
import requests

app = Flask(__name__)

TELEGRAM_TOKEN = "8055937809:AAFPj39LWDxhz-tYAb0fEijg6OHDy0Db5Wc"
API_URL = f'https://api.telegram.org/bot{TELEGRAM_TOKEN}/'

bot = Bot(token=TELEGRAM_TOKEN)

paid_users = {}


@app.route('/')
def page():
    return render_template('start.html')

@app.route('/game')
def game():
    return render_template('index.html')

def generate_invoice(price):
    title = "Boost"
    description = "Instant boost for you."
    payload = "{}"
    currency = "XTR"  # Telegram Stars
    prices = [{'label': 'Boost', 'amount': int(price)}]

    params = {
        'title': title,
        'description': description,
        'payload': payload,
        'currency': currency,
        'prices': prices
    }

    response = requests.post(API_URL + 'createInvoiceLink', json=params)
    print(response.json())

    if response.status_code == 200:
        res = response.json()
        return res["result"]
    else:
        return {'error': 'Failed to create invoice'}

@app.route('/generate-invoice<price>', methods=['GET'])
def generate_invoice_route(price):
    invoice_data = generate_invoice(price)

    return invoice_data

@app.route('/payment-success', methods=['POST'])
def payment_success():
    data = request.json
    user_id = data.get('user_id')
    payment_info = data.get('payment_info')

    if user_id and payment_info:
        paid_users[user_id] = payment_info

        return jsonify({'status': 'success', 'message': 'Payment received!'}), 200
    else:
        return jsonify({'status': 'error', 'message': 'Invalid payment data'}), 400


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')