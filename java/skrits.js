$(document).ready(function(){

    $("#window").css({"height":$(window).height() + "px"});
    var flag = false;
    var scroll;
    var m=$('#p1');
    var mx2=$('#rp1');
    var mx3=$('#gifs');
    var mx4=$('#p');

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 100){
            if(!flag){
                $("#logo").css({"margin-top": "-29px", "width": "70px","height":"70px"});
                $("#logo").attr("src","https://steamuserimages-a.akamaihd.net/ugc/939463588744502822/E32BDFE873DE7E7E62AEF0723FC8FB1CC15D3058/");
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
                $("#logo").attr("src","https://steamuserimages-a.akamaihd.net/ugc/939457945110653608/AC69F38D12B39E7D6024D61B3E5557013477BD9A/");
                $("header").css({"background-color": "transparent"});
                m.removeClass('show');
                mx2.removeClass('show');
                mx3.removeClass('show');
                mx4.removeClass('show');
                flag = false;
            }

        }


    });

});