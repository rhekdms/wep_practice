from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager


db = SQLAlchemy()
DB_NAME = "database.db"

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'semicircle_secret_key'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(app)

    # 블루프린트 인스턴스 가져오기
    from .views import views
    from .auth import auth

    # 플라스크 앱에 등록하기
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    
    # DB에 사용할 모델 불러오기
    from .models import User, Note  # from .models import *
    
    with app.app_context():
        db.create_all()
        
    # flask-login 적용
    login_manager = LoginManager()
    login_manager.login_view = 'auth.sign_in'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(id)  # primary_key
    
    return app