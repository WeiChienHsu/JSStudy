define(['jquery', 'calculateSelectedNum','createInnerBoxFragment'], function($, calculateSelectedNum,createInnerBoxFragment) {

    //查找所有
    function findAll(table) {
        $.ajax({
            type: "post",
            //同步请求
            async: false,
            //用表名当url参数
            url: "/baidunewsThinkPHP/BgManager/Index/selectAll",
            data: {
                "table": table
            },
            success: function(data) {
                // console.log(data);
                createInnerBoxFragment(data, table);
                calculateSelectedNum();
            }
        });
        //动态添加的类，需要同步ajax，之后抛出它的选择器事件
        //这里将选中的ID外面蓝色圈添加去掉操作
        var contentitemid = $(".content-item-id").click(function() {
            var _this = $(this);
            // _this.toggleClass("selected");
            var itemid = _this.children(".itemid");
            if(_this.hasClass("selected")){
                _this.removeClass("selected");
                itemid.css("border","4px solid #fff");
            }else{
                _this.addClass("selected");
                itemid.css("border","4px solid rgb(26, 188, 157)");
            }

        });
        return contentitemid;
    }

    return findAll;
});