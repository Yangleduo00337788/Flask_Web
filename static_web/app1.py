from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/products')
def products():
    return render_template('products.html')

@app.route('/cart')
def cart():
    return render_template('cart.html')

@app.route('/support')
def support():
    return render_template('support.html')

@app.route('/Home')
def Home():
    return render_template('Home_Furnishing.html')

if __name__ == '__main__':
    app.run(debug=True)
