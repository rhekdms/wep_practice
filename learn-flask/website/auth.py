from flask import Blueprint,render_template, request, flash, redirect, url_for
from werkzeug.security import generate_password_hash, check_password_hash
from .models import User
from . import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)

@auth.route('/sign-in', methods=['GET', 'POST'])
def sign_in():
    # login
    if request.method == 'POST':
        email = request.form.get('email')
        password1 = request.form.get('password1')

        # search User in database & compare password
        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password1):
                flash('로그인 완료', category='success')
                login_user(user, remember=True)
                return redirect(url_for('views.home'))
            else: 
                flash('비밀번호가 다릅니다.', category='error')
        else:
            flash('해당 이메일 정보가 없습니다.', category='error')

    return render_template('sign_in.html')

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return render_template('logout.html')

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    
    # 데이터 확인
    # data = request.form
    # print(data)
    
    if request.method == 'POST':
        # form - input의 name 속성을 기준으로 가져오기
        email = request.form.get('email')
        nickname = request.form.get('nickname')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        # 유효성 검사
        user = User.query.filter_by(email=email).first()
        if user:
            flash("이미 가입된 이메일입니다.", category='error')
        elif len(email) < 5 :
            flash("이메일은 5자 이상입니다.", category="error")
        elif len(nickname) < 2:
            flash("닉네임은 2자 이상입니다.", category="error")
        elif password1 != password2 :
            flash("비밀번호와 비밀번호재입력이 서로 다릅니다.", category="error")
        elif len(password1) < 7:
            flash("비밀번호가 너무 짧습니다.", category="error")
        else:
            # Create User > DB
            new_user = User(email=email, nickname=nickname, password=generate_password_hash(password1, method='sha256'))
            db.session.add(new_user)
            db.session.commit()
            # auto-login
            login_user(new_user, remember=True)
            flash("회원가입 완료.", category="success")  # Create User -> DB
            return redirect(url_for('views.home'))


    return render_template('sign_up.html')