from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    students = [
        {"name": "张望鹏", "score": 95, "active": True},
        {"name": "黄上君", "score": 88, "active": True},
        {"name": "XXX", "score": 62, "active": False}
    ]
    return render_template("index_macro.html", students=students)

if __name__ == '__main__':
    app.run(debug=True)