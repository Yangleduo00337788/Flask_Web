from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    data = {
        'text': 'hello world',
        'number': 42,
        'html_content': '<strong>加粗文本</strong>',
        'students': ['张望鹏', '黄上君', 'XXX']
    }
    return render_template('filters.html', **data)


if __name__ == '__main__':
    app.run(debug=True)
