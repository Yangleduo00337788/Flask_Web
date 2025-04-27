from cv2 import data
from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)


@app.route('/')
def index():
    # 定义模板变量：字符串、列表、字典
    user_info = {
        'name': '张望鹏',
        'student_id': '0501230145',
        'courses': ['Python', 'Web开发', 'Flask']
    }
    return render_template('index.html', user=user_info)


# 自定义过滤器函数
def reverse_string(s):
    return s[::-1]


def double_number(n):
    return n * 2


# 注册自定义过滤器
app.template_filter('reverse')(reverse_string)
app.template_filter('double')(double_number)


@app.route('/custom')
def custom_filter():
    return render_template('custom_filters.html',
                           text='Flask',
                           number=21)
@app.route('/test-flash')
def test_flash():
    flash_type = request.args.get('type', 'info')
    if flash_type == 'success':
        flash('✅ 这是一个测试成功消息', 'success')
    elif flash_type == 'warning':
        flash('⚠️ 这是一个测试警告消息', 'warning')
    return redirect(url_for('dashboard'))

if __name__ == '__main__':
    app.run(debug=True)
