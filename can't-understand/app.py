from flask import Flask, render_template

# 웹 서버 역할 Flask APP 생성
app = Flask(__name__)

# 라우팅 설정 - url을 통한 접속 > 응답을 담당
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/class-1grade')
def class_1grade():
    return render_template('1grade.html')

@app.route('/first')
def first():
    return render_template('first.html')

# Flask 앱 가동(run)
if __name__ == "__main__":
    app.run()