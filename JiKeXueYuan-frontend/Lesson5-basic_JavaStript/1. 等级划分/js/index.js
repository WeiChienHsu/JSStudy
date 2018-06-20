//得到submit信号
function submit() {
   //读取input信息
   var score = document.getElementById("score").value;

   //调取判断函数
   if (score > 100 || score < 0|| isNaN(score)) {
       alert("请输入正确的数字！");
       //强制刷新
       history.go(0);
       return;
   }

   //等级判断
   var level = judgmentByMath(score);

   //修改显示结果
   document.getElementById("resultId").innerHTML = level;
}

//等级判断-Mach
function judgmentByMath(score) {
   if (score == 100) {
       return 1;
   }
   var level = score / 10;
   level = 10 - Math.floor(level);
   return level;
}

//等级判断-if return
function judgmentByif(score) {
   if (score >= 90) {
       return 1;
   } else if (score >= 80) {
       return 2;
   } else if (score >= 70) {
       return 3;
   } else if (score >= 60) {
       return 4;
   } else if (score >= 50) {
       return 5;
   } else if (score >= 40) {
       return 6;
   } else if (score >= 30) {
       return 7;
   } else if (score >= 20) {
       return 8;
   } else if (score >= 10) {
       return 9;
   } else if (score >= 0) {
       return 10;
   }
}
