Flask 帮助文档
1. 简介
FlaskWeb 是一个基于 Python Flask 框架的轻量级 Web 应用模板，包含以下功能：

静态文件托管（CSS/JS/图片）

模板渲染（Jinja2）

动态路由配置

现代化前端布局（支持响应式设计）
2. 快速启动
环境准备
bash
# 安装 Python (3.7+)
python --version

# 安装依赖
pip install flask
启动开发服务器
bash
# 进入项目目录
cd /path/to/flaskweb

# 方式1：直接运行（Windows/macOS/Linux通用）
python app.py

# 方式2：使用Flask CLI（推荐）
flask --app app run --debug
默认访问地址：http://127.0.0.1:5000

生产环境部署
bash
# 安装生产服务器
pip install gunicorn

# 启动（Linux/macOS）
gunicorn -w 4 -b 0.0.0.0:5000 app:app
4. 常用命令
命令	作用
flask run	启动开发服务器
flask shell	进入交互式Python环境
flask routes	查看所有路由
flask --app app run --host=0.0.0.0	允许局域网访问
5. 开发指南
添加新页面
在 app.py 中添加路由：

python
@app.route('/about')
def about():
    return render_template('about.html')
创建模板文件 templates/about.html

修改样式
编辑 static/css/main.css 文件

添加静态资源
将图片放入 static/images/，通过模板引用：

html
<img src="{{ url_for('static', filename='images/logo.png') }}">
6. 故障排除
端口占用
bash
# 指定其他端口
flask run --port 5001
模块找不到
bash
# 设置环境变量（PowerShell）
$env:FLASK_APP = "app"
模板修改不生效
关闭缓存（开发模式）：

python
app.config['TEMPLATES_AUTO_RELOAD'] = True
浏览器强制刷新：Ctrl + F5

7. 扩展建议
数据库：flask-sqlalchemy

表单处理：flask-wtf

用户认证：flask-login

提示：开发时建议启用调试模式（--debug），错误时会显示详细日志。
