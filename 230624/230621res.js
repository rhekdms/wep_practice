function SETUP(){
    if(document.querySelector('.setup').style.display==='block'){
        document.querySelector('.setup').style.display='none';
    } else {
        document.querySelector('.setup').style.display='block';
    }
}

function MENU(){
    if(document.querySelector('.menu_s').style.display==='block'){
        document.querySelector('.menu_s').style.display='none';
        document.querySelector('.Memory').style.display='none';
        document.querySelector('.Remember').style.display='none';
    } else {
        document.querySelector('.menu_s').style.display='block';
    }
}

function MEMORY(){
    if(document.querySelector('.Memory').style.display==='block'){
        document.querySelector('.Memory').style.display='none';
    } else {
        document.querySelector('.Memory').style.display='block';
    }
}

function REMEMBER(){
    if(document.querySelector('.Remember').style.display==='block'){
        document.querySelector('.Remember').style.display='none';
    } else {
        document.querySelector('.Remember').style.display='block';
    }
}
