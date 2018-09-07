$(function () {
    $("#jy_content>#jy_content_left>ul>li").hover(function () {
        $(this).addClass("current")
    },function () {
        $(this).removeClass("current")
    })
});