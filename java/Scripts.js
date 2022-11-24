$(document).ready(function(){


    $("#window").css({"height":$(window).height() + "px"});
    var flag = false;
    var scroll;
    var m=$('.p1');
    var mx2=$('.rp1');
    var mx3=$('#gifs');
    var mx4=$('#p');


    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 100){
            if(!flag){
                $("#logo").css({"margin-top": "-29px", "width": "70px","height":"70px"});
                $("#logo").attr("src","imagenes/ic2.gif");
                $("header").css({"background-color": "#3C3C3C"});

                m.addClass('show');
                mx2.addClass('show');
                mx3.addClass('show');
                mx4.addClass('show');
                flag = true;
            }

        }else{
            if(flag){
                $("#logo").css({"margin-top": "150px", "width": "250px","height":"250px"});
                $("#logo").attr("src","imagenes/ic.png");
                $("header").css({"background-color": "transparent"});
                m.removeClass('show');
                mx2.removeClass('show');
                mx3.removeClass('show');
                mx4.removeClass('show');
                flag = false;
            }

        }


    });
    
var width;
var height;
$(window).resize(function() {
var newWidth = $(window).width();
var newHeight = $(window).height();
if( newWidth <=799 ) {
width = newWidth;
height = newHeight;
doneResizing();
}
else if(newWidth >=800){
    resize();
}
});
function doneResizing(){
location.href='Sub-pags/oof.html';

};
function resize(){
location.href='../index.html';
}
});