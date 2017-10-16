/**
 * Created by Administrator on 2017/9/27.
 */
var imgObj0=document.getElementById("lunBo0");
var imgObj=document.getElementById("lunBo1");
var imgObj2=document.getElementById("lunBo2");
$(function () {
    nextLunBo();
    parLunBo0();
    parLunBo();
    parLunBo2()
});
function nextLunBo(){
    var imgObj0=document.getElementById("lunBo0");
    var imgObj=document.getElementById("lunBo1");
    var imgObj2=document.getElementById("lunBo2");

    imgObj0.style.marginTop == ""
    if(imgObj0.style.marginTop == ""){
        imgObj0.style.marginTop = "0px";
    }
    if(parseInt(imgObj0.style.marginTop) == -888){
        imgObj0.style.marginTop = "0px";
    }else{
        imgObj0.style.marginTop = parseInt(imgObj0.style.marginTop)-222+"px";
    }

    imgObj.style.marginTop == ""
    if(imgObj.style.marginTop == ""){
        imgObj.style.marginTop = "0px";
    }
    if(parseInt(imgObj.style.marginTop) == -888){
        imgObj.style.marginTop = "0px";
    }else{
        imgObj.style.marginTop = parseInt(imgObj.style.marginTop)-222+"px";
    }

    imgObj2.style.marginTop == ""
    if(imgObj2.style.marginTop == ""){
        imgObj2.style.marginTop = "0px";
    }
    if(parseInt(imgObj2.style.marginTop) == -888){
        imgObj2.style.marginTop = "0px";
    }else{
        imgObj2.style.marginTop = parseInt(imgObj2.style.marginTop)-222+"px";
    }

}

function  parLunBo0() {
    var imgObj0=document.getElementById("lunBo0");
    imgObj0.style.marginTop == "";
    if(imgObj0.style.marginTop == ""){
        imgObj0.style.marginTop = "0px";
    }

    if(parseInt(imgObj0.style.marginTop) == 0){
        imgObj0.style.marginTop = "-666px";
    }else{
        imgObj0.style.marginTop = parseInt(imgObj0.style.marginTop)+222+"px";
    }
    $(".hc-example-img-loop-zero").find("li").find("div").css("transform","scale(0)");

    if(parseInt(imgObj0.style.marginTop) == -666){
        $(".liBox1").css("transform","scale(1)");
    }

    if(parseInt(imgObj0.style.marginTop) == -444){
        $(".liBox2").css("transform","scale(1)")
    }

    if(parseInt(imgObj0.style.marginTop) == -222){
        $(".liBox3").css("transform","scale(1)")
    }

    if(parseInt(imgObj0.style.marginTop) == 0){
        $(".liBox4").css("transform","scale(1)")
    }

}
function parLunBo2() {
    var imgObj2=document.getElementById("lunBo2");
    imgObj2.style.marginTop == "";
    if(imgObj2.style.marginTop == ""){
        imgObj2.style.marginTop = "0px";
    }
    if(parseInt(imgObj2.style.marginTop) == 0){
        imgObj2.style.marginTop = "-666px";
    }else{
        imgObj2.style.marginTop = parseInt(imgObj2.style.marginTop)+222+"px";
    }
    $(".hc-example-img-loop-two").find("li").find("div").css("transform","scale(0)");
    if(parseInt(imgObj2.style.marginTop) == -666){
        $(".liBox9").css("transform","scale(1)")
    }
    if(parseInt(imgObj2.style.marginTop) == -444){
        $(".liBox10").css("transform","scale(1)")
    }
    if(parseInt(imgObj2.style.marginTop) == -222){
        $(".liBox11").css("transform","scale(1)")
    }
    if(parseInt(imgObj2.style.marginTop) == 0){
        $(".liBox12").css("transform","scale(1)")
    }
}
function parLunBo(){
    var imgObj=document.getElementById("lunBo1");


    if(imgObj.style.marginTop == ""){
        imgObj.style.marginTop = "0px";
    }
    if(parseInt(imgObj.style.marginTop) == 0){
        imgObj.style.marginTop = "-666px";
    }else{
        imgObj.style.marginTop = parseInt(imgObj.style.marginTop)+222+"px";
    }
    $(".hc-example-img-loop-one").find("li").find("div").css("transform","scale(0)");
    if(parseInt(imgObj.style.marginTop) == -666){
        $(".liBox5").css("transform","scale(1)")
    }
    if(parseInt(imgObj.style.marginTop) == -444){
        $(".liBox6").css("transform","scale(1)")
    }
    if(parseInt(imgObj.style.marginTop) == -222){
        $(".liBox7").css("transform","scale(1)")
    }
    if(parseInt(imgObj.style.marginTop) == 0){
        $(".liBox8").css("transform","scale(1)")
    }
}
var a = setInterval(parLunBo0,3000);
var b = setInterval(parLunBo,3000);
var c = setInterval(parLunBo2,3000);

function clickbtn(obj){
    clearInterval(b);
    var imgObj=document.getElementById("lunBo1");
    imgObj.style.marginTop=parseInt(obj)+"px";
    $(".hc-example-img-loop-one").find("li").find("div").css("transform","scale(0)");

    if(parseInt(imgObj.style.marginTop)==-666){
        $(".liBox5").css("transform","scale(1)")
    }
    if(parseInt(imgObj.style.marginTop)==-444){
        $(".liBox6").css("transform","scale(1)")
    }
    if(parseInt(imgObj.style.marginTop)==-222){
        $(".liBox7").css("transform","scale(1)")
    }
    if(parseInt(imgObj.style.marginTop)==0){
        $(".liBox8").css("transform","scale(1)")
    }

}

function clickbtn0(obj) {
    clearInterval(a);
    var imgObj0=document.getElementById("lunBo0");
    imgObj0.style.marginTop=parseInt(obj)+"px";
    $(".hc-example-img-loop-zero").find("li").find("div").css("transform","scale(0)");
    if(parseInt(imgObj0.style.marginTop)==-666){
        $(".liBox1").css("transform","scale(1)")
    }
    if(parseInt(imgObj0.style.marginTop)==-444){
        $(".liBox2").css("transform","scale(1)")
    }
    if(parseInt(imgObj0.style.marginTop)==-222){
        $(".liBox3").css("transform","scale(1)")
    }
    if(parseInt(imgObj0.style.marginTop)==-0){
        $(".liBox4").css("transform","scale(1)")
    }
}
function clickbtn2(obj) {
    clearInterval(c);
    var imgObj2=document.getElementById("lunBo2");
    imgObj2.style.marginTop=parseInt(obj)+"px";
    $(".hc-example-img-loop-two").find("li").find("div").css("transform","scale(0)");

    if(parseInt(imgObj2.style.marginTop)==-666){
        $(".liBox9").css("transform","scale(1)")
    }
    if(parseInt(imgObj2.style.marginTop)==-444){
        $(".liBox10").css("transform","scale(1)")
    }
    if(parseInt(imgObj2.style.marginTop)==-222){
        $(".liBox11").css("transform","scale(1)")
    }
    if(parseInt(imgObj2.style.marginTop)==0){
        $(".liBox12").css("transform","scale(1)")
    }
}