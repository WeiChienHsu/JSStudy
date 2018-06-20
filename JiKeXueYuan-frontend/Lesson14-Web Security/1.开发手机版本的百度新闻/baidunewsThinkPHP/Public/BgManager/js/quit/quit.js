//--------------退出----------------------------
define(['jquery','getUrlParam'], function($,getUrlParam) {
    return {
        showBox: (
            //显示退出的画面
            $(".quit").click(function() {
                $(".mask").css("display", "block");
                $(".masktoquit").css("display", "block");
            })
        ),
        closeBox: (
            //点击右上角关闭按钮
            $(".inner-close").click(function() {
                $(".mask").css("display", "none");
                $(".masktoquit").css("display", "none");
            })
        ),
        back:(
             //返回按钮
             $("#goback").click(function() {
                $(".inner-close").click();
                return;
            })
        ),
        quitConfirm: (
            //退出按钮并跳转
            $("#quitConfirm").click(function() {
                $(".mask").css("display", "none");
                $(".masktoquit").css("display", "none");
                var username = getUrlParam("username"); 
                //发送请求服务器清除session
                $.ajax({
                    type: "post",
                    url: "/baidunewsThinkPHP/BgManager/index/logout",
                    data: {
                        'username': username
                    },
                    success:function(data){
                        window.location.href = '/baidunewsThinkPHP/login';
                    }
                });
                return;
            })
        )
    }
});
