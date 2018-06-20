//开始加载并发送数据
$(document).ready(function() {
    var table = "news_recommend";
    //从第几条开始
    offset = 0;
    findAll(table);
});

//设置flag保证多次点击按顺序执行
var loadMoreFlag = 1;
$(".loadMore").click(function() {
    var _this = $(this);
    if (loadMoreFlag == 0) {
        return;
    }
    var table = _this.parent().attr("name");
    loadMoreFlag = 0;
    findAll(table);
    loadMoreFlag = 1;
});

//nav的选择
$(".anvRowBox").click(function() {
    var _this = $(this);
    $(".anvRowBox").removeClass("focused");
    _this.addClass("focused");
    var table = _this.attr("name")
    $(".selected").removeClass("selected");
    $("." + table + "_box").addClass("selected");
    //清除之前加载的数据
    $("." + table + "_box").find(".newsInnerBox").remove();
    //刷新数据
    offset = 0;
    //点击加载更多-可进入
    loadMoreFlag = 1;
    //    alert(table);
    findAll(table);
});

var offset;
//一次查找条数
var findNum = 5;

function findAll(table) {
//    console.log("findNow::" + table);
    $.ajax({
        type: "get",
        url: "./BaiduNews/php/selectNews.php",
        beforeSend: function() {
            $(".loadMore").text("正在加载……");
        },
        data: {
            "table": table,
            "findNum": findNum,
            "offset": offset
        },
        success: function(data) {
            if (data == "") {
                $(".loadMore").text("已全部加载完毕！");
                loadMoreFlag = 0;
                return;
            }
            $(".loadMore").text("点击加载更多");
            //查询成功后offset计数
            offset += findNum;
//            console.log("当前offset:" + offset);
            //插入返回的新闻html片段,插入在“更多”之前
            $(".selected").find(".loadMore").before(data);
            $(".page-loading").css("display", "none");
        },
        //        complete: function(){
        //
        //            $(".loadMore").text("点击加载更多");
        //        },
        error: function() {
            console.lnfo("error: " + data.responseText);
        }
    });
}
