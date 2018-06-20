"use strict";

;(function () {
  var flag;
  //7秒轮播
  setInterval(function () {
    var tiBoxSize = $(".tiBox").size();
    var currtiBoxIndex = $(".tiBox.tiBox_Selected").index();
    if (currtiBoxIndex + 1 == tiBoxSize) {
      var targettiBox = $(".tiBox").first();
    } else {
      var targettiBox = $(".tiBox.tiBox_Selected").next();
    }
    siliderToTarget(targettiBox);
  }, 7000);

  //下部6个按钮
  $(".dot").click(function () {
    siliderToTarget($(".tiBox").eq($(this).index()));
  });

  //实现函数
  function siliderToTarget(targettiBox) {
    if (flag == 0) {
      //console.log("还未结束");
      return;
    }
    flag = 0;
    var currtiBox = $(".tiBox.tiBox_Selected");
    var currtiBoxIndex = currtiBox.index();
    var targettiBoxIndex = targettiBox.index();
    $(".dot.dotSelected").removeClass("dotSelected");
    $(".dot").eq(targettiBoxIndex).addClass("dotSelected");

    //right
    if (currtiBoxIndex > targettiBoxIndex) {
      currtiBox.animate({ left: "1200px" });
      targettiBox.css({ "left": -1200 });
      targettiBox.addClass("tiBox_Selected");
      targettiBox.animate({ left: "0" });
      setTimeout(function () {
        currtiBox.removeClass("tiBox_Selected");
        flag = 1;
      }, 1000);
    }
    //left
    if (currtiBoxIndex < targettiBoxIndex) {
      currtiBox.animate({ left: "-1200px" });
      targettiBox.css({ "left": 1200 });
      targettiBox.addClass("tiBox_Selected");
      targettiBox.animate({ left: "0" });
      setTimeout(function () {
        currtiBox.removeClass("tiBox_Selected");
        flag = 1;
      }, 1000);
    }
  }

  //视屏切换,yeoman进行构建时,会在图片后面加上md5值,这样的话,如果在js里面写上图片地址信息后会导致
  //build后,页面出现错误,找不到图片.所以将图片地址放到了html中,用poster和poster_backup进行保存,切换
  //的时候将这两个属性中的值取出来互换,达到跟换poster的目的,有些麻烦.
  var poster;
  var poster_backup;
  var tmp;

  $(".svBar").click(function () {
    if ($("#stVideo").attr("tag") == "web") {
      $("#stVideo").attr("tag", "android");
      $("#stVideo").attr("src", "http://wirrorcdn.jikexueyuan.com/jiuye/video/show2.mp4");
      poster = $("#stVideo").attr("poster"); //web
      poster_backup = $("#stVideo").attr("poster_backup"); //and
      tmp = poster;
      poster = poster_backup;
      poster_backup = tmp;

      $("#stVideo").attr("poster", poster);
      $("#stVideo").attr("poster_backup", poster_backup);
    } else if ($("#stVideo").attr("tag") == "android") {
      $("#stVideo").attr("tag", "web");
      $("#stVideo").attr("src", "http://wirrorcdn.jikexueyuan.com/jiuyewebshow3.0.mp4");
      poster = $("#stVideo").attr("poster"); //and
      poster_backup = $("#stVideo").attr("poster_backup"); //web
      tmp = poster;
      poster = poster_backup;
      poster_backup = tmp;

      $("#stVideo").attr("poster", poster);
      $("#stVideo").attr("poster_backup", poster_backup);
    }
  });
})();
//# sourceMappingURL=main.js.map
