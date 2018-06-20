/**
 * js设计模式：单例模式
 * 功能:更多产品
 * 将此三个触发时间归为一组方便管理
 */
var flag;
var moreProduct = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.mpMouseEnter = $(".moreProduct");
        me.mpMouseleave = $(".moreProductBar");
    },
    bind: function() {
        var me = this;
        me.mpMouseEnter.mouseenter(function() {
            $(".moreProduct").css("color", "black");
            $(".moreProductWord").css("background-color", "#f9f9f9");
            $(".moreProductBar").css("display", "block");
        });
        me.mpMouseleave.mouseleave(function() {
            $(".moreProduct").css("color", "white");
            $(".moreProductWord").css("background-color", "#38f");
            $(".moreProductBar").css("display", "none");
        });
    }
};
/**
 * js设计模式：单例模式
 * 功能:用户菜单
 */
//
var user_menu = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.userMouseOver = $(".user");
        me.userMouseOut = $(".user");
        me.menu1MouseOver = $(".menu1");
        me.menu1MouseOut = $(".menu1");
    },
    bind: function() {
        var me = this;
        me.userMouseOver.mouseover(function() {
            $(".menu1").css("display", "block");
        });
        me.userMouseOut.mouseout(function() {
            flag = setTimeout(function() {
                $(".menu1").css("display", "none");
            }, 200);
        });
        me.menu1MouseOver.mouseover(function() {
            clearInterval(flag);
            $(".menu1").css("display", "block");
        });
        me.menu1MouseOut.mouseout(function() {
            flag = setTimeout(function() {
                $(".menu1").css("display", "none");
            }, 200);
        });
    }
};
/**
 * js设计模式：单例模式
 * 功能:设置菜单
 */
//
var setting_menu = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.settingMouseOver = $(".setting");
        me.settingMouseOut = $(".setting");
        me.menu2MouseOver = $(".menu2");
        me.menu2MouseOut = $(".menu2");
    },
    bind: function() {
        var me = this;
        me.settingMouseOver.mouseover(function() {
            $(".menu2").css("display", "block");
        });
        me.settingMouseOut.mouseout(function() {
            flag = setTimeout(function() {
                $(".menu2").css("display", "none");
            }, 200);
        });
        me.menu2MouseOver.mouseover(function() {
            clearInterval(flag);
            $(".menu2").css("display", "block");
        });
        me.menu2MouseOut.mouseout(function() {
            flag = setTimeout(function() {
                $(".menu2").css("display", "none");
            }, 200);
        });
    }
};

/**
 * js设计模式：单例模式
 * 功能:天气信息，返回的信息直接修改DOM
 */
var findWeather = {
    init: function() {
        var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
        $.getScript(cityUrl, function(script, textStatus, jqXHR) {
            var citytq = remote_ip_info.city; // 获取城市
            var url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + citytq + "&day=0&dfc=3";
            $.ajax({
                url: url,
                dataType: "script",
                scriptCharset: "gbk",
                success: function(data) {
                    var _w = window.SWther.w[citytq][0];
                    var _f = _w.f1 + "_0.png";
                    if (new Date().getHours() > 17) {
                        _f = _w.f2 + "_1.png";
                    }
                    var img = "<img width='18px' height='18px' src='http://i2.sinaimg.cn/dy/main/weather/weatherplugin/wthIco/20_20/" + _f + "' />";
                    $(".weather_city").text(citytq + ":");
                    $(".weather_img").html(img);
                    $(".weather_cloud").text(_w.s1);
                    $(".weather_temp").text(_w.t1 + "℃～" + _w.t2 + "℃  " + " | ");

                }
            });
        });
    }
};

/**
 * js设计模式：单例模式
 * 功能:轮播
 */
var silider = {
    init: function() {
        this.render();
        this.bind();
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
    },
    render: function() {
        var me = this;
        me.rightSidebarClick = $("#rightSidebar");
        me.leftSidebarClick = $("#leftSidebar");
        me.bottonBarInnerClick = $(".bottonBarInner");
    },
    bind: function() {
        var me = this;
        //右侧
        me.rightSidebarClick.click(function() {
            var imgBoxSize = $(".imgBox").size();
            var currImgBoxIndex = $(".imgBox.currSlider").index();
            if ((currImgBoxIndex + 1) == imgBoxSize) {
                var targetImgBox = $(".imgBox").first();
            } else {
                var targetImgBox = $(".imgBox.currSlider").next();
            }
            siliderToTarget(targetImgBox);
        });
        //左侧
        me.leftSidebarClick.click(function() {
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
        me.bottonBarInnerClick.click(function() {
            siliderToTarget($(".imgBox").eq($(this).index()));
        });
    }
};
/**
 * js设计模式：单例模式
 * 功能:siliderToTarget轮播动画处理函数
 */
var siliderToTarget = function(targetImgBox) {
    
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

/**
 * js设计模式：单例模式
 * 功能:下面橱窗的控制代码
 */
var showCaseControl = {
    init: function() {
        $(".showcase_leftbar_normal").click(function() {
            var _this = $(this);
            var value = _this.attr("title");
            _this.addClass("showcase_leftbar_focus").siblings().removeClass("showcase_leftbar_focus");
            if (value == "导航") {
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
        })
    }
};

/**
 * js设计模式：外观模式
 * 功能:程序开始！！！
 * 作用：网页加载依赖项在此统一载入，方便管理调度
 */
var start = (function() {
    //API接入天气信息
    findWeather.init();
    //更多产品
    moreProduct.init();
    //user_setting触发动画
    user_menu.init();
    setting_menu.init();
    //轮播动画
    silider.init();
    //橱窗控制代码
    showCaseControl.init();
})();
