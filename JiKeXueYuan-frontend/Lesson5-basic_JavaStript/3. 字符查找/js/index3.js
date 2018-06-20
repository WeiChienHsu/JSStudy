;
(function(){
//input result
var input = [];

//character temp
var tempChar = [];

//appearTimes temp
var tempTimes = [];

//read input
function read() {
    var read = document.getElementById("view").value;
    if (read == "") {
        //value initialize
        input = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
    } else {
        //如果重复提交则直接返回
        if (input == read) {
            return;
        }
        //将read转化为数据给input
        input = read.toLowerCase().concat();
        var temp = [];
        var char = 0;
        for (var i = 0; input.length > i; i++) {
            char = input.substring(i, i + 1);
            temp.push(char);
        }
        input = temp.concat();
    }
}

//view devide by ,
function view() {
    document.getElementById("view").value = input.join(",");
}

//character找到互异的符号数组，并且得到他们出现的次数数组
function character() {
    //数组复制！！！！
    var temp = input.concat();
    var char = 0;
    while (temp.length > 0) {
        //zidan
        tempChar.push(temp[0]);
        char = temp[0];
        //gandiao
        temp.splice(0, 1);
        //初始化并计数
        tempTimes.push("0");
        var j = tempTimes.pop();
        j = parseInt(j) + 1;
        tempTimes.push(j);
        //如果剩下的有形同元素，则定位，之后打掉，并计数
        while (temp.indexOf(char) != -1) {
            temp.splice(temp.indexOf(char), 1);
            //计数
            var i = tempTimes.pop();
            i = parseInt(i) + 1;
            tempTimes.push(i);
        }
    }
}

function submit() {
    //read
    read();
    //view
    view();
    //character找到互异的符号数组，并且得到他们出现的次数数组
    character();
    //得到做大值
    var maxNum = tempTimes[0];
    for (var i = 0; tempTimes.length > i; i++) {
        if (maxNum < tempTimes[i]) {
            maxNum = tempTimes[i];
        }
    }
    var position = tempTimes.indexOf(maxNum);
//    //显示字符和出现次数
    document.getElementById("character").innerHTML = tempChar[position];
    document.getElementById("characterAppearNum").innerHTML = maxNum;
    //将查找符号的位置
    var order = [];
    for (var orderChar = 0; input.length > orderChar; orderChar++) {
        if (input[orderChar] == tempChar[position]) {
            order.push(orderChar);
        }
    }
    //显示次序
    document.getElementById("order").innerHTML = order;
    //清空结果
    tempTimes = [];
    tempChar = [];
}
// 事件触发
    document.querySelector('#submit').onclick = submit;

})();


