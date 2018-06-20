requirejs.config({
    baseUrl: 'Public/login/js',
    paths: {
        login_main: 'login_main',
        jquery: 'jquery-2.1.1.min',
        note_info: 'note_info',
        enter_submit: 'enter_submit'
    }
});

//主入口1
requirejs(['jquery', 'note_info', 'enter_submit'],
    function($, note_info, enter_submit) {
        //登录
        $("#login-button").click(function(event) {
            event.preventDefault();
            var username = $("#username").val();
            var password = $("#password").val();
            var verify = $("#verify").val();
            if (username == "" || username == "undefined") {
                // alert("");
                note_info("用户名不能为空！");
                $("#username").focus();
                return;
            }

            if (password == "" || password == "undefined") {
                note_info("密码不能为空！");
                $("#password").focus();
                return;
            }
            
            if (verify == "" || verify == "undefined") {
                note_info("验证码不能为空！");
                $("#verify").focus();
                return;
            }

            $.ajax({
                type: "post",
                //信息提交地址
                url: "/baidunewsThinkPHP/Login/Index/doLogin",
                data: {
                    "username": username,
                    "password": password,
                    "verify": verify
                },
                success: function(data) {
                     console.log(data);
                    if (data == true) {
                        //跳转地址
                        setTimeout(function() {
                            //登陆成功进行跳转，由服务器进行
                            window.location.href = '/baidunewsThinkPHP/BgManager?username='+username;    
                        }, 2000);
                        $('.form').fadeOut(500);
                        $('.wrapper').addClass('form-success');

                    } else {
                        $("#password").val("");
                        $("#password").focus();
                        note_info("用户名或密码错误!");
                    }
                }
            });
        });
        //回车键触发提交
        enter_submit;

    });
