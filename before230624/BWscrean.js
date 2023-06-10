var Input = {
    setColor:function(color,backgroundcolor,border){
        $('input').css({'color': color,
        'background-color': backgroundcolor,
        'border': border});
    }
}
var NightDay = {
    setColor:function(color,backgroundcolor,border){
        $('#night_day').css({'color': color,
        'background-color': backgroundcolor,
        'border': border});
    }
}
var screan = {
    setborderColor:function(border){
        $('.main_screan').css('border-top', border);
    }
}
var Name = {
    setColor:function(color){
        $('h1').css('color', color);
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
        Input.setColor("white","black","white");
        NightDay.setColor("white","black","black");
        screan.setborderColor("black");
        Name.setColor("black");
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='night';
        Input.setColor("black","white","black");
        NightDay.setColor("black","white","white");
        screan.setborderColor("white");
        Name.setColor("white");
    }
}