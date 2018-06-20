//登录
$("#login-button").click(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();
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

    $.ajax({
        type: "post",
        //信息提交地址
        url: "./Login/php/login.php",
        //        async:false,
        data: {
            "username": username,
            "password": password
        },
        success: function(data) {
            // console.log(data);
            if (data == true) {
                //跳转地址
                setTimeout(function() {
                    window.location.href = '../baidunews/BgManager/BgManager.html';
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

//回车将相当于进行提交
$(function() {
    $("body").keydown(function(event) {
        if (event.keyCode == "13") {
            //keyCode=13是回车键
            $('#login-button').click();
        }
    });
});

//信息提示
function note_info(info) {
    //        alert(info);
    $("#login-Tips").html(info);
    $("#login-Tips").animate({
        top: '0px'
    }, "slow");
    setTimeout(function() {
        $("#login-Tips").animate({
            top: '-20px'
        }, "slow");
    }, 3000);
}
