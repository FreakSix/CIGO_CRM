/**
 * Created by lenovo on 2017/9/5.
 */
$(document).ready(function(){
    $(".tpl-content-wrapper").height($(window).height()-150);

    $("#main-iframe").height($(window).height()-110);

    $(".tpl-left-nav").height($(window).height()-150);
    if($(window).width()<1000){
        $(".tpl-content-wrapper").width($(window).width());
        $("#main-iframe").width($(window).width());
    }
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    if (userAgent.indexOf("Chrome") > -1){
        $(".tpl-left-nav").height($(document.body).height()-45);
        $(".b-box").height($(document.body).height()-95);
        $(".tpl-content-wrapper").width($(window).width()-280);
        $("#main-iframe").width($(window).width()-280);
    }else{
        $(".tpl-content-wrapper").width($(window).width()-275);
        $("#main-iframe").width($(window).width()-275);
        $(".tpl-left-nav").height($(document.body).height()+45);
        $(".b-box").height($(document.body).height()+45);
    }
    $(".tpl-left-nav-item a").click(function(){
        $(".tpl-left-nav-item a").removeClass("active");
        $(this).addClass("active");
    });
});

