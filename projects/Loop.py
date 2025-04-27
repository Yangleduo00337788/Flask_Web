from flask import Flask, render_template

app = Flask(__name__)

@app.route('/loop')
def loop_demo():
    data = {
        'students': [
            {'name': '张望鹏', 'score': 85},
            {'name': '黄上君', 'score': 92},
            {'name': 'XXX', 'score': 78}
        ],
        'courses': ['Python', 'Flask', 'HTML/CSS'],
        'empty_list': []
    }
    return render_template('loop.html', **data)

if __name__ == '__main__':
    app.run(debug=True)