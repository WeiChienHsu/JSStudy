//---------------退出--------------------
//显示退出界面
$(".quit").click(function() {
    $(".mask").css("display", "block");
    $(".masktoquit").css("display", "block");
});
//右上关闭按钮
$(".inner-close").click(function() {
    $(".mask").css("display", "none");
    $(".masktoquit").css("display", "none");
});
//返回按钮
$("#goback").click(function() {
    $(".inner-close").click();
    return;
});
//退出按钮并跳转
$("#quitConfirm").click(function() {
    window.location.href = '../login.html';
    $(".mask").css("display", "none");
    $(".masktoquit").css("display", "none");
    return;
});

//---------------退出--------------------
