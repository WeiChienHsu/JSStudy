//开始载入--->推荐 
$(document).ready(function() {
    var table = "news_recommend";
    findAll(table);
});



//实现id的选中和取消，
function contentItemId(id) {
    toggleClass(id, "selected");
    if (id.firstChild.style.border == "4px solid rgb(26, 188, 156)") {
        id.firstChild.style.border = "4px solid #fff";
    } else {
        id.firstChild.style.border = "4px solid rgb(26,188,156)";
    }
}


//js实现class的添加和删除
function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function toggleClass(obj, cls) {
    if (hasClass(obj, cls)) {
        removeClass(obj, cls);
        calculateSelectedNum();
    } else {
        addClass(obj, cls);
        calculateSelectedNum();
    }
}

function toggleClassTest() {
    var obj = document.getElementById('test');
    toggleClass(obj, "testClass");
}
//计算选中的新闻数目，在 推荐 旁边。
function calculateSelectedNum() {
    var tablename = convert2table();
    var tab_item = findRightItem(tablename);
    var selected = convert2selected(tablename);
    var num = selected.length;
    //设置num值
    $("." + tab_item).find(".selectedItemNum").text(num);
}

//找到当前选中的table，返回tablename
function convert2table() {
    var tablename;
    var leftitemsname = $(".clear-backend").children("input.focused").next().text();
    tablename = findTableName(leftitemsname);
    return tablename;
}

//传入tablename，找到被选中的新闻 selected
function convert2selected(tablename) {
    var tab_item = findRightItem(tablename);
    //    alert(a);
    var selected = $("." + tab_item).find(".content-item-id.selected");
    return selected;
}

//左边边栏选择后添加focused类，并刷新右边的边栏
$(".clear-backend").children("input").click(function() {
    var _this = $(this);
    _this.siblings().removeClass("focused");
    _this.addClass("focused");
    var leftitemsname = _this.next().text();
    var table = findTableName(leftitemsname);
    //查找右侧边栏的内容
    findAll(table);
    //当前选中的新闻数目改为0
    $(".selectedItemNum").text(0);
});

//查找所有
function findAll(table) {
    $.ajax({
        type: "get",
        url: "./php/selectAll.php",
        data: {
            "table": table
        },
        success: function(data) {
            $("." + findRightItem(table)).children(".content-box").html(data);
        }
    });
}


//根据table的名字找到右侧专栏的class name
//table-->右边栏目class标志
function findRightItem(table) {
    if (table == "news_recommend") {
        return "tab-item-1"
    }
    if (table == "news_baijia") {
        return "tab-item-2"
    }
    if (table == "news_local") {
        return "tab-item-3"
    }
    if (table == "news_internet") {
        return "tab-item-4"
    }
    if (table == "news_science") {
        return "tab-item-5"
    }
    if (table == "news_woman") {
        return "tab-item-6"
    }
    if (table == "news_picture") {
        return "tab-item-7"
    }
    if (table == "news_military") {
        return "tab-item-8"
    }
    if (table == "news_society") {
        return "tab-item-9"
    }
    if (table == "news_entertainment") {
        return "tab-item-10"
    }
}

//更具左边汉字的名字找到对应的Table的名字；
//左边汉字-->table
function findTableName(leftitemsname) {

    if (leftitemsname == "推荐") {
        return "news_recommend";
    }
    if (leftitemsname == "百家") {
        return "news_baijia";
    }
    if (leftitemsname == "本地") {
        return "news_local";
    }
    if (leftitemsname == "互联网") {
        return "news_internet";
    }
    if (leftitemsname == "科技") {
        return "news_science";
    }
    if (leftitemsname == "女人") {
        return "news_woman";
    }
    if (leftitemsname == "图片") {
        return "news_picture";
    }
    if (leftitemsname == "军事") {
        return "news_military";
    }
    if (leftitemsname == "社会") {
        return "news_society";
    }
    if (leftitemsname == "娱乐") {
        return "news_entertainment";
    }

}
