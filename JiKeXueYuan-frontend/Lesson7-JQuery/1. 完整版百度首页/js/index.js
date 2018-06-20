var flag;
//更多产品
$(".moreProduct").mouseenter(function() {
    $(".moreProduct").css("color", "black");
    $(".moreProductWord").css("background-color", "#f9f9f9");
    $(".moreProductBar").css("display", "block");
});

$(".moreProductBar").mouseleave(function() {
    $(".moreProduct").css("color", "white");
    $(".moreProductWord").css("background-color", "#38f");
    $(".moreProductBar").css("display", "none");
});

//用户菜单
var flag1;
$(".user").mouseover(function() {
    $(".menu1").css("display", "block");
});
$(".user").mouseout(function() {
    flag1 = setTimeout(function() {
        $(".menu1").css("display", "none");
    }, 200);
});

$(".menu1").mouseover(function() {
    clearInterval(flag1);
    $(".menu1").css("display", "block");
});
$(".menu1").mouseout(function() {
    flag1 = setTimeout(function() {
        $(".menu1").css("display", "none");
    }, 200);
});


//设置菜单
var flag2;
$(".setting").mouseover(function() {
    $(".menu2").css("display", "block");
});
$(".setting").mouseout(function() {
    flag2 = setTimeout(function() {
        $(".menu2").css("display", "none");
    }, 200);
});

$(".menu2").mouseover(function() {
    clearInterval(flag2);
    $(".menu2").css("display", "block");
});
$(".menu2").mouseout(function() {
    flag2 = setTimeout(function() {
        $(".menu2").css("display", "none");
    }, 200);
});



//$(document).ready(function(){
//    
//
////天气请求
////得到城市
//var localCity = new BMap.LocalCity();
////key
//var key = "bfab4275a3215b1d50205f4368f0ed24";
////拼接url
//var apiURL;
////城市名称
//var cityName;
//localCity.get(myFun);
//    
//function myFun(result){
//		cityName = result.name;
//        //拼接url
//        apiURL = "http://apis.baidu.com/heweather/weather/free?city=beijing";
//        console.log(apiURL);
//        var xmlhttp = new XMLHttpRequest();
//        xmlhttp.open("GET","apiURL",true);
//        xmlhttp.setRequestHeader("apikey","bfab4275a3215b1d50205f4368f0ed24");
//        xmlhttp.send();
//    
//        $.ajax({
//            type:"GET",
//            url:apiURL,
//            beforeSend:function(XMLHttpRequest){
//                XMLHttpRequest.setRequestHeader("apikey","bfab4275a3215b1d50205f4368f0ed24");
//                
//            },
//            success:function(result){
//                alert(result);
//            }
//        });
//}
//
//    
//});

//左侧  
$("#leftSidebar").click(function() {
    var imgBoxSize = $(".imgBox").size();
    var currImgBoxIndex = $(".imgBox.currSlider").index();
    if ((currImgBoxIndex + 1) == imgBoxSize) {
        var targetImgBox = $(".imgBox").first();
    } else {
        var targetImgBox = $(".imgBox.currSlider").next();
    }
    siliderToTarget(targetImgBox);
});

//右侧
$("#rightSidebar").click(function() {
    var currImgbox = $(".imgBox.currSlider");
    var currImgBoxIndex = currImgbox.index();
    if (currImgBoxIndex == 0) {
        var targetImgBox = $(".imgBox").last();
    } else {
        var targetImgBox = $(".imgBox.currSlider").prev();
    }
    siliderToTarget(targetImgBox);
});
//下部6个按钮
$("#bottonBarInner1").click(function() {
    var index = $("#bottonBarInner1").index();
    var targetImgBox = $(".imgBox").eq(index);
    siliderToTarget(targetImgBox);
});
$("#bottonBarInner2").click(function() {
    var index = $("#bottonBarInner2").index();
    var targetImgBox = $(".imgBox").eq(index);
    siliderToTarget(targetImgBox);
});
$("#bottonBarInner3").click(function() {
    var index = $("#bottonBarInner3").index();
    var targetImgBox = $(".imgBox").eq(index);
    siliderToTarget(targetImgBox);
});
$("#bottonBarInner4").click(function() {
    var index = $("#bottonBarInner4").index();
    var targetImgBox = $(".imgBox").eq(index);
    siliderToTarget(targetImgBox);
});
$("#bottonBarInner5").click(function() {
    var index = $("#bottonBarInner5").index();
    var targetImgBox = $(".imgBox").eq(index);
    siliderToTarget(targetImgBox);
});
$("#bottonBarInner6").click(function() {
    var index = $("#bottonBarInner6").index();
    var targetImgBox = $(".imgBox").eq(index);
    siliderToTarget(targetImgBox);
});

//---------------主页轮播 over---------------------

//自动轮播
setInterval(function() {
    var imgBoxSize = $(".imgBox").size();
    var currImgBoxIndex = $(".imgBox.currSlider").index();
    if ((currImgBoxIndex + 1) == imgBoxSize) {
        var targetImgBox = $(".imgBox").first();
    } else {
        var targetImgBox = $(".imgBox.currSlider").next();
    }
    siliderToTarget(targetImgBox);
}, 6000);

function siliderToTarget(targetImgBox) {
    if (flag == 0) {
        //console.log("还未结束");
        return
    }
    flag = 0;
    var imgBoxSize = $(".imgBox").size();
    var currImgbox = $(".imgBox.currSlider");
    var currImgBoxIndex = currImgbox.index();
    var targetImgBoxIndex = targetImgBox.index();
    $(".bottonBarInner.currBottonbar").removeClass("currBottonbar");
    $(".bottonBarInner").eq(targetImgBoxIndex).addClass("currBottonbar");

    //right
    if (currImgBoxIndex > targetImgBoxIndex) {
        var prev = currImgbox.prev();
        currImgbox.animate({
            left: "425px"
        });
        targetImgBox.css({
            "left": -425
        });
        targetImgBox.addClass("currSlider");
        targetImgBox.animate({
            left: "0"
        });
        setTimeout(function() {
            currImgbox.removeClass("currSlider");
            flag = 1;
        }, 500);
    }
    //left
    if (currImgBoxIndex < targetImgBoxIndex) {
        var next = currImgbox.next();
        currImgbox.animate({
            left: "-425px"
        });
        targetImgBox.css({
            "left": 425
        });
        targetImgBox.addClass("currSlider");
        targetImgBox.animate({
            left: "0"
        });
        setTimeout(function() {
            currImgbox.removeClass("currSlider");
            flag = 1;
        }, 500);
    }
}

//下面橱窗的控制代码
$(".showcase_leftbar_normal").click(function() {
    var _this = $(this);
    var value = _this.attr("title");
    _this.addClass("showcase_leftbar_focus").siblings().removeClass("showcase_leftbar_focus");
    //     alert(value);

    if (value == "导航") {
        //        alert("--");
        $(".showcase_rightcontant2")
            .addClass("showcase_rightcontant_focus")
            .siblings()
            .removeClass("showcase_rightcontant_focus");
    }

    if (value == "新闻") {
        $(".showcase_rightcontant1")
            .addClass("showcase_rightcontant_focus")
            .siblings()
            .removeClass("showcase_rightcontant_focus");
    }
});