/**
 * Created by Administrator on 2017/9/25.
 */

$(function () {

    function animation(id, frame, radius, start, end, line, color, time, startAdd, endAdd) {
        var x = document.getElementById(id);
        var Context = x.getContext("2d");
        var num = 0;
        var act = setInterval(function () {
            Context.clearRect(0, 0, 140, 140);
            Context.beginPath();
            Context.strokeStyle = color;
            Context.lineWidth = line;
            start += startAdd;
            num += 1;
            if (num > time) {
                clearInterval(act);
            }
            end += endAdd;
            Context.arc(frame, frame, radius, start, end, false);
            Context.stroke();
            Context.closePath();

        }, 30);
    }

    function draw(id,alpha, frame, radius, start, end, line, color) {

        var Canvas; //声明Canvas对象;
        Canvas = document.getElementById(id);
        var context = Canvas.getContext("2d");
        context.beginPath();
        context.strokeStyle = color;
        context.lineCap = "square";
        context.globalAlpha = alpha;
        context.closePath();
        context.fill();
        context.lineWidth = line;
        context.putImageData(context.getImageData(0, 0, radius, radius), 0, 0);
        context.beginPath();
        context.arc(frame, frame, radius / 2, start, end * Math.PI, false);
        context.stroke();
    }

    function line(id,x,y,nx,ny,deg) {
        var Canvas; //声明Canvas对象;
        Canvas = document.getElementById(id);
        var ctx = Canvas.getContext("2d");
        var time=0;
        var lineRo=setInterval(function () {
            ctx.clearRect(0, 0,142,142);
            ctx.translate(70,70);
            ctx.rotate(deg*time*Math.PI/180);
            ctx.translate(-70,-70);
            time+=1;
            if(time>30){
                clearInterval(lineRo);
            }
            //开始一个新的绘制路径
            ctx.beginPath();
            //定义直线的起点坐标为(x,y)
            ctx.moveTo(x, y);
            //定义直线的终点坐标为(50,10)
            ctx.lineTo(nx, ny);
            //沿着坐标点顺序的路径绘制直线
            ctx.strokeStyle = "#19BFF2";
            ctx.stroke();
            //关闭当前的绘制路径
            ctx.closePath();
        },30);

    }

    setTimeout(function () {
        var Canvas; //声明Canvas对象;
        Canvas = document.getElementById("line");
        var ctx = Canvas.getContext("2d");
        var time=0;
        var lineTr=setInterval(function () {

            time+=1;
            if(time>30){
                clearInterval(lineTr);
            }
            //开始一个新的绘制路径
            ctx.beginPath();
            //定义直线的起点坐标为(x,y)
            ctx.moveTo(0, 227);
            //定义直线的终点坐标为(50,10)
            ctx.lineTo(10*time, 227);
            //沿着坐标点顺序的路径绘制直线
            ctx.strokeStyle = "#19BFF2";
            ctx.stroke();
            //关闭当前的绘制路径
            ctx.closePath();
        },20);
    }, 1000);
    setTimeout(function () {
        animation("circle1", 70, 58, -Math.PI * 1.5, -Math.PI * 0.9, 10*7/12, "#00ADEE", 30, .05, .05)
    }, 3000);
    setTimeout(function () {
        animation("circle2", 70, 47, -Math.PI, -Math.PI, 15*7/12, "#19BFF2", 20, 0, .04)
    }, 2600);
    setTimeout(function () {
        animation("circle3", 70, 37, .5, 1.2 * Math.PI, 18*7/12, "#00ADEE", 20, .04, .04)
    }, 2200);
    setTimeout(function () {
        animation("circle4", 70, 37, 0, .38 * Math.PI, 18*7/12, "#00ADEE", 20, -.05, -.05)
    }, 2200);
    setTimeout(function () {
        animation("circle5", 70, 17.5, .85 * Math.PI, 1.35 * Math.PI, 4*7/12, "#19BFF2", 20, .05, .05)
    }, 1700);
    setTimeout(function () {
        animation("circle6", 70, 17.5, 0, .3 * Math.PI, 4*7/12, "#19BFF2", 20, .05, .05)
    }, 1700);
    setTimeout(function () {
        $("#circle7").css("display", "block")
    }, 1500);
    setTimeout(function () {
        $("#circle8").css("display", "block")
    }, 1000);
    setTimeout(function () {
        $("#circle9").css("display", "block")
    }, 1900);
    setTimeout(function () {
        $("#circle10").css("display", "block")
    }, 2100);
    setTimeout(function () {
        $("#circle11").css("display", "block")
    }, 1400);
    setTimeout(function () {
        line("rotate1",71,71,221*7/12,71,0);
    }, 1600);
    setTimeout(function () {
        line("rotate2",71,71,221*7/12,71,-.02);
    }, 1900);
    setTimeout(function () {
        line("rotate3",71,71,221*7/12,71,-.04);
    }, 2200);
    setTimeout(function () {
        line("rotate4",71,71,221*7/12,71,-.06);
    }, 2500);
    setTimeout(function () {
        line("rotate5",71,71,221*7/12,71,-.08);
    }, 21000);
    setTimeout(function () {
        line("rotate6",71,71,221*7/12,71,-.1);
    }, 3100);
    setTimeout(function () {
       // var p=document.querySelector(".bannerP");
       // p.style.display="block";
        $(".bannerP").fadeIn(100);
    },1500);
    setTimeout(function () {
        $(".label1").fadeIn(400);
    },2000);
    setTimeout(function () {
        $(".label2").fadeIn(400);
    },2600);
    setTimeout(function () {
        $(".label3").fadeIn(400);
    },3200);
    // var canvas = document.createElement("canvas");
    // document.querySelector(".animate").append(canvas);
    // canvas.setAttribute("class", "circle-img");
    // canvas.setAttribute("id", "circle7");
    // canvas.setAttribute("width", "140px");
    // canvas.setAttribute("height", "140px");
    draw("circle7",1, 70, 30*.75, 2.8, 4.2, 1*7/12, "#026799");

    // canvas = document.createElement("canvas");
    // document.querySelector(".animate").append(canvas);
    // canvas.setAttribute("class", "circle-img");
    // canvas.setAttribute("id", "circle8");
    // canvas.setAttribute("width", "140px");
    // canvas.setAttribute("height", "140px");
    draw("circle8",.5, 70, 8*.75, 0.8, 2.3, 2*7/12, "#00ADEE");

    // canvas = document.createElement("canvas");
    // document.querySelector(".animate").append(canvas);
    // canvas.setAttribute("class", "circle-img");
    // canvas.setAttribute("id", "circle9");
    // canvas.setAttribute("width", "140px");
    // canvas.setAttribute("height", "140px");
    draw("circle9",.5, 70, 90*.75, 1, 2.4, 6*7/12, "#19bff2");

    // canvas = document.createElement("canvas");
    // document.querySelector(".animate").append(canvas);
    // canvas.setAttribute("class", "circle-img");
    // canvas.setAttribute("id", "circle10");
    // canvas.setAttribute("width", "140px");
    // canvas.setAttribute("height", "140px");
    draw("circle10",.5, 70, 70*.75, 0.8, 2.3, 8*7/12, "#00ADEE");

    // canvas = document.createElement("canvas");
    // document.querySelector(".animate").append(canvas);
    // canvas.setAttribute("class", "circle-img");
    // canvas.setAttribute("id", "circle11");
    // canvas.setAttribute("width", "140px");
    // canvas.setAttribute("height", "140px");
    draw("circle11",.5, 70, 40*.75, 2.8, 4.2, 1*7/12, "#FFF");


});



