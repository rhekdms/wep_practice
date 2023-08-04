function f(n){
    $(function(){
        $('#screen_change').load(n);
    });}

function OPEN(a){
    if(document.querySelector(a).style.display==='block'){
        document.querySelector('.menu_s').style.display='none';
        document.querySelector('.Memory').style.display='none';
        document.querySelector('.Remember').style.display='none';
    } else {
        document.querySelector('.menu_s').style.display='block';
    }
}