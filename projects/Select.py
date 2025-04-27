from flask import Flask, render_template

app = Flask(__name__)


@app.route('/condition')
def condition_demo():
    user = {
        'name': '张望鹏',
        'score': 100,
        'is_active': True,
        'role': 'admin',
        'email':'123@com'
    }
    return render_template('condition.html', user=user)


if __name__ == '__main__':
    app.run(debug=True)
