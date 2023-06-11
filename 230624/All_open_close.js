function A_O_C(name){
if(this.value==='close'){
        document.querySelector(name).style.display='block';
        this.value='open';
    } else {
        document.querySelector(name).style.display='none';
        this.value='close';
    }
}
