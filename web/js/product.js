/**
 * Created by Administrator on 2017/9/26.
 */
var num = 0;
function dropUp() {
    // var div=document.getElementsByClassName("banner");
    // for (var i = 0; i<div.length;i++) {
    //     div[i].style.display="none";
    // // }
    num += 1;
    if (num % 2 == 0) {
        $(".banner").slideDown("slow");
        setTimeout(
            function () {
                $(".drop-down>img").attr("src", "../img/收缩.png");
            },300
        );
    } else {
        $(".banner").slideUp("slow");

        setTimeout(
            function () {
                $(".drop-down>img").attr("src", "../img/下拉.png");
            },300
        );
    }

}


