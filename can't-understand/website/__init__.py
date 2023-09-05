from flask import Flask
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()
DB_NAME = "database.db"

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'semicircle_secret_key'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(app)

    # 블루프린트 인스턴스 가져오기
    from .views import views

    # 플라스크 앱에 등록하기
    app.register_blueprint(views, url_prefix='/')
    
    # DB에 사용할 모델 불러오기
    from .models import Note  # from .models import *
    
    with app.app_context():
        db.create_all()
    
    return app