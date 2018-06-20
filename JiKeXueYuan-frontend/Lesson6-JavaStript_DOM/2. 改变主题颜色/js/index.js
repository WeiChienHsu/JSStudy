
var targetIndex = document.cookie.search("themeColor");
var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)themeColor\s*\=\s*([^;]*).*$)|^.*$/, "$1");

if (targetIndex >= 0 || localStorage.getItem("themeColor") != null) {
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)themeColor\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    changeColor(cookieValue);
}

if (localStorage.getItem("themeColor") != null) {
    var cookieValue = localStorage.getItem("themeColor");
    changeColor(cookieValue);
}

function changeColor(themeColor) {
    //找到需要改变颜色的地方 TEXT
    var element = document.getElementsByClassName("themeTextColor");
    for (var j = 0; element.length > j; j++) {
        element[j].style.color = themeColor;
    }
    element = document.getElementsByClassName("tc-green");
    for (var j = 0; element.length > j; j++) {
        element[j].style.color = themeColor;
    }
    //找到需要改变颜色的地方 background
    element = document.getElementsByClassName("themebackgroundColor");
    for (var j = 0; element.length > j; j++) {
        element[j].style.backgroundColor = themeColor;
    }
    //找到需要改变颜色的地方 BorderColor
    element = document.getElementsByClassName("themeBorderColor");
    for (var j = 0; element.length > j; j++) {
        element[j].style.borderTopColor = themeColor;
    }
    element = document.getElementsByClassName("themeBorderColor");
    for (var j = 0; element.length > j; j++) {
        element[j].style.borderTopColor = themeColor;
    }
    //找到需要改变颜色的地方 右边三角
    document.getElementById("s-sicon").style.borderRightColor = themeColor;
    document.getElementById("s-sicon").style.borderTopColor = themeColor;
    //右边边框
    document.getElementById("layout-famoussite").style.borderColor = themeColor;
    //左边边框
    element = document.getElementsByClassName("servicetab-itemactive");
    for (var j = 0; element.length > j; j++) {
        element[j].style.color = themeColor;
        element[j].style.borderTopColor = themeColor;
    }
}

function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
document.querySelector('#original').onclick = function() {
    changeColor("#0aa770");
    setCookie("themeColor", "#0aa770");
    //     Response.Cookies("themeColor").Expires = (now() + 1 / 24);
    localStorage.setItem("themeColor", "#0aa770");
}
document.querySelector('#red').onclick = function() {
    changeColor("red");
    setCookie("themeColor", "red");
    //     Response.Cookies("themeColor").Expires = (now() + 1 / 24);
    localStorage.setItem("themeColor", "red");
}
document.querySelector('#blue').onclick = function() {
    changeColor("blue");
    setCookie("themeColor", "blue");
    localStorage.setItem("themeColor", "blue");
}
document.querySelector('#grey').onclick = function() {
    changeColor("grey");
    setCookie("themeColor", "grey");
    localStorage.setItem("themeColor", "grey");
}
document.querySelector('#orange').onclick = function() {
    changeColor("orange");
    setCookie("themeColor", "orange");
    localStorage.setItem("themeColor", "orange");
}
document.querySelector('#pink').onclick = function() {
    changeColor("pink");
    setCookie("themeColor", "pink");
    localStorage.setItem("themeColor", "pink");
}

