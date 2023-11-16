from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from api import get_business, get_details

app = Flask(__name__)
CORS(app)

# Access this endpoint through: http://localhost:5000/
@app.route('/')
def index():
    return render_template('tinder.html')

# Access this endpoint through: http://localhost:5000/api
@app.route('/api')
def api():
    location = request.args.get('location')
    price_string = request.args.get('price')
    price_list = list(map(int, price_string.split(',')))

    result = get_business(location, price_list)
    return jsonify(result)