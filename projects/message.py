from flask import Flask, render_template, flash, redirect, url_for, request, session

app = Flask(__name__)
app.secret_key = 'supersecretkey123'  # 生产环境应使用更安全的密钥

# 模拟用户数据库
users = {
    'admin': '123456',
    'user': '123456'
}


@app.route('/')
def index():
    if 'username' in session:
        return redirect(url_for('dashboard'))
    return render_template('message_index.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        if username in users and users[username] == password:
            flash('🎉 登录成功！', 'success')
            session['username'] = username
            return redirect(url_for('dashboard'))
        else:
            flash('❌ 用户名或密码错误', 'danger')
    return render_template('login.html')


@app.route('/dashboard')
def dashboard():
    if 'username' not in session:
        flash('⚠️ 请先登录', 'warning')
        return redirect(url_for('login'))
    return render_template('dashboard.html', username=session['username'])


@app.route('/logout')
def logout():
    flash('👋 您已安全退出', 'info')
    session.pop('username', None)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)