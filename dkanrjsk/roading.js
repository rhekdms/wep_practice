function f(n){
    $(function(){
        $('#screen_change').load(n);
        document.querySelector('#back').style.display='block';
    });}

function BACK(){
    $(function(){
        $('#screen_change').load('start.html');
        document.querySelector('#back').style.display='none';
    });}