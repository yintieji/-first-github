/**
 * Created by Administrator on 2017/10/11.
 */


$(document).scroll(function () {
    ScollPostion();
});
function ScollPostion() {//滚动条位置
    var t, num = 0;

    if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
    } else if (document.body) {
        t = document.body.scrollTop;
    }
    var nav = $("#cloudPlatform-nav");
    $(".info-back").css("padding", " 40px 0 40px 0");
    $(".info-back").css("height", "319px");
    if (t >= 240) {
        nav.css("position", "fixed").css("top", "50px").css("z-index", "3");
        num = 1;
    }
    if (num = 1 && t < 240) {
        var q = 293 - t;
        nav.css("position", "fixed").css("top", q + "px").css("z-index", "3");
    }
}
