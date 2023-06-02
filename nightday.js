
var Link = {
    setColor:function(color){
        document.querySelector('a').style.color = color;
    }
}
var Body = {
    setColor:function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightdayhandler(self){
    if(self.value==='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day';
        Link.setColor('powderblue')
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='night';
        Link.setColor('blue')
    }
}
