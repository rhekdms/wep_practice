from flask import Blueprint, redirect, render_template, request, flash, url_for, jsonify
from .models import Note
from . import db

views = Blueprint('views', __name__)

@views.route('/')
def index():
    return render_template('index.html')

@views.route('/class/1grade')
def class_1grade():
    return render_template('1grade.html')

@views.route('/class/2grade')
def class_2grade():
    return render_template('2grade.html')

@views.route('/class/3grade')
def class_3grade():
    return render_template('3grade.html')

@views.route('/class/4grade')
def class_4grade():
    return render_template('4grade.html')

@views.route('/club/algorithms')
def club_algorithms():
    return render_template('algorithms.html')

@views.route('/club/web')
def club_web():
    return render_template('web.html')

@views.route('/club/gamedevelop')
def club_gamedevelop():
    return render_template('gamedevelop.html')

@views.route('/club/omnibus')
def club_omnibus():
    return render_template('omnibus.html')

@views.route('/etc/drawing')
def etc_drawing():
    return render_template('drawing.html')

@views.route('/etc/travel')
def etc_travel():
    return render_template('travel.html')

@views.route('/etc/etc')
def etc_etc():
    return render_template('etc.html')

@views.route('/class/1grade/1class', methods=['GET','POST'])
def class_1grade_1class():
    # POST : 메모 생성
    if request.method == "POST":
        title = request.form.get('note-title')
        content = request.form.get('note-content')

        if len(title) < 1 or len(content) < 1:
            flash("제목 또는 내용이 없습니다.", category = "error")
        elif len(title) > 50:
            flash("제목이 너무 깁니다. 50자 이내", category = "error")
        elif len(content) > 9999999999:
            flash("내용이 너무 깁니다. 9999999999자 이내", category="error")
        else :            
            # Note 인스턴스 생성 -> DB에 저장
            new_note = Note(title=title, content=content)    
            db.session.add(new_note)
            db.session.commit()

            flash("메모 생성 완료", category="success")
            return redirect(url_for('views.class_1grade_1class')) # 없으면 메모 계속 생성


    return render_template('1grade_1class.html')


# 메모 삭제 기능
@views.route('/delete-note', methods=['POST'])
def delete_note():
    # POST : 메모 삭제
    if request.method == "POST":
        note = request.get_json()
        note_id = note.get('noteId')

        select_note = Note.query.get(note_id)
        if select_note:
            db.session.delete(select_note)
            db.session.commit()

        return jsonify({})
    

# 메모 수정 기능
@views.route('/update-note', methods=['PUT'])
def update_note():
    # PUT : 메모 수정
    if request.method == "PUT":
        note = request.get_json()
        note_id = note.get('noteId')
        title = note.get('title')
        content = note.get('content')

        select_note = Note.query.get(note_id)
        if select_note:
            select_note.title = title
            select_note.content = content
            db.session.commit()

        return jsonify({})