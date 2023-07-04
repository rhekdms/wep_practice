/* open & close */
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
function WRITE(){
    document.querySelector('.Write').style.display='block';
    document.querySelector('.OnlyPicture').style.display='none';
    document.querySelector('.OnlyWriting').style.display='none';
    document.querySelector('.To_Do').style.display='none';
    document.querySelector('.Memo').style.display='none';
    document.querySelector('.Calender').style.display='none';
}

function ONLY_PICTURE(){
    document.querySelector('.Write').style.display='none';
    document.querySelector('.OnlyPicture').style.display='block';
    document.querySelector('.OnlyWriting').style.display='none';
    document.querySelector('.To_Do').style.display='none';
    document.querySelector('.Memo').style.display='none';
    document.querySelector('.Calender').style.display='none';
}

function ONLY_WRITING(){
    document.querySelector('.Write').style.display='none';
    document.querySelector('.OnlyPicture').style.display='none';
    document.querySelector('.OnlyWriting').style.display='block';
    document.querySelector('.To_Do').style.display='none';
    document.querySelector('.Memo').style.display='none';
    document.querySelector('.Calender').style.display='none';
}

function PICTURE_N_WRITING(){
    document.querySelector('.Write').style.display='none';
    document.querySelector('.OnlyPicture').style.display='block';
    document.querySelector('.OnlyWriting').style.display='block';
    document.querySelector('.To_Do').style.display='none';
    document.querySelector('.Memo').style.display='none';
    document.querySelector('.Calender').style.display='none';
}

function MEMO(){
    document.querySelector('.Write').style.display='none';
    document.querySelector('.OnlyPicture').style.display='none';
    document.querySelector('.OnlyWriting').style.display='none';
    document.querySelector('.To_Do').style.display='none';
    document.querySelector('.Memo').style.display='block';
    document.querySelector('.Calender').style.display='none';
    document.querySelector('.screen_grid_2').style.display='block';
    document.querySelector('.screen_grid').style.display='block';
}

function TO_DO(){
    document.querySelector('.Write').style.display='none';
    document.querySelector('.OnlyPicture').style.display='none';
    document.querySelector('.OnlyWriting').style.display='none';
    document.querySelector('.To_Do').style.display='block';
    document.querySelector('.Memo').style.display='none';
    document.querySelector('.Calender').style.display='none';
    document.querySelector('.screen_grid_2').style.display='block';
    document.querySelector('.screen_grid').style.display='block';
}
function PHOTO_DIARY(){
    document.querySelector('.Write').style.display='none';
    document.querySelector('.OnlyPicture').style.display='none';
    document.querySelector('.OnlyWriting').style.display='none';
    document.querySelector('.To_Do').style.display='block';
    document.querySelector('.Memo').style.display='block';
    document.querySelector('.Calender').style.display='block';
    document.querySelector('.screen_grid_2').style.display='grid';
    document.querySelector('.screen_grid').style.display='grid';
}

/* screen-position */
function SCREEN_POSITION_1(){
    document.querySelector('.screen_grid').style.gridTemplateColumns='60% 1fr';
    document.querySelector('.screen_grid_2').style.gridTemplateColumns='none';
    document.querySelector('.screen_grid_2').style.gridTemplateRows='50% 1fr';
}

function SCREEN_POSITION_2(){
    document.querySelector('.screen_grid').style.gridTemplateColumns='60% 1fr';
    document.querySelector('.screen_grid_2').style.gridTemplateColumns='none';
    document.querySelector('.screen_grid_2').style.gridTemplateRows='50% 1fr';
}