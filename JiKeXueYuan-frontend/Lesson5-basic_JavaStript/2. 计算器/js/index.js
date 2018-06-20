//将输入的代运算添加为数组-全局变量 OK
input = [];

//读取input信息并显示 OK
function view() {
    document.getElementById("view").value = input.join("");
}

//syntaxErrorCode显示 OK
function syntaxErrorCode(code) {
    alert("输入的语法错误，请修改！" + code);
}

function syntaxError() {
    alert("输入的语法错误，请修改！");
}

//数字合并 OK
function numberCombine() {
    for (var i = 0; input.length > i; i++) {
        //第一个如果是数字，则感知下一个是否为数字
        while (input.length > i) {
            if (!isNaN(input[i])) {
                if (!isNaN(input[i + 1])) {
                    input[i] = input[i] + input[i + 1];
                    input.splice(i + 1, 1);
                } else {
                    i++;
                    break;
                }
            } else {
                break;
            }
        }
    }
}

//点合并，小数 OK
function dotCombine() {
    while (input.indexOf(".") != -1) {
        var dotPosition = input.indexOf(".");
        //两边肯定为数字
        var dotNumber = input[dotPosition - 1] + input[dotPosition] + input[dotPosition + 1];
        input.splice(dotPosition, 2);
        input[dotPosition - 1] = parseFloat(dotNumber);
    }
}

//语法检查 return boolean
function syntaxTest() {
    var i = 0;
    //第一个不能为空，但不是错 ok
    if (input.length == 0) {
        return false;
    }
    //首元素不能是符号 ok
    if (input[i] == "*" || input[i] == "/") {
        syntaxErrorCode(" Code: 首元素不能是 * 或 / 符号!");
        return false;
    }




    //尾部不能是符号 ok
    if (input.length != 0 && isNaN(input[input.length - 1])) {
        syntaxErrorCode(" Code: 尾元素不能是符号!");
        return false;
    }

    //加号减号后面是数字（首元素） ok
    if (input[i] == "+" || input[i] == "-" || input[i] == ".") {
        //第一个为正负号且下一个是数字，则在第一个元素添加0
        input.splice(0, 0, "0");
        //        alert("shouge:" + input);
    }


    for (var j = 0; input.length > j; j++) {

        //对加法减法运算符重复出现的情况（后面的元素 -- ++ -+ +-）
        if (input[j] == "-" || input[j] == "+") {
            if (input[j + 1] == "+" || input[j + 1] == "-") {
                input.splice(j + 1, 0, "0");
            }
        }
        //对于+.2的情况，在前面加上0  +0.2
        if (input[j] == "." && !isNaN(input[j + 1]) && isNaN(input[j - 1])) {
            input.splice(j, 0, "0");
        }

    }

    //找到符号，且左右不能是符号 ok
    //+
    for (var i = 0; i < input.length; i++) {
        //找到符号处
        if (isNaN(input[i])) {
            if (isNaN(input[i - 1]) || isNaN(input[i + 1])) {
                //语法错误
                syntaxErrorCode("Code: 位置 " + (i + 1) + " 处语法错误，请更改！");
                return false;
            }
        }
    }
    return true;
}

//GET SIGN
//+
function signPlus() {
    input.push("+");
    view();
}
//-
function signMinus() {
    input.push("-");
    view();
}
//*
function signMult() {
    input.push("*");
    view();
}
// /
function signDiv() {
    input.push("/");
    view();
}
//Del
function signDel() {
    //取出一个
    input.pop();
    view();
}
//C
function reset() {
    //从index=0开始删除==清空
    input.splice(0);
    view();

}


//NUMBER
function num0() {
    input.push("0");
    view();
}

function num1() {
    input.push("1");
    view();
}

function num2() {
    input.push("2");
    view();
}

function num3() {
    input.push("3");
    view();
}

function num4() {
    input.push("4");
    view();
}

function num5() {
    input.push("5");
    view();
}

function num6() {
    input.push("6");
    view();
}

function num7() {
    input.push("7");
    view();
}

function num8() {
    input.push("8");
    view();
}

function num9() {
    input.push("9");
    view();
}

//DOT
function signDot() {
    input.push(".");
    view();
}






//RESULT
function result() {
    //语法检查（只是：左右2个是不是符号）
    if (!syntaxTest()) {
        return;
    }

    //数字合并 
    numberCombine();

    //合并DOT
    dotCombine();

    //    alert("计算式子：" + input);
    //找到计算起点（* /）
    var i = 0;
    while (input.indexOf("*") != -1 || input.indexOf("/") != -1) {


        if (input.indexOf("*") != -1) {
            i = input.indexOf("*");
            input[i - 1] = parseFloat(input[i - 1]) * parseFloat(input[i + 1]);
            input.splice(i, 2);
        } else {
            i = input.indexOf("/");
            input[i - 1] = parseFloat(input[i - 1]) / parseFloat(input[i + 1]);
            input.splice(i, 2);
        }
    }
    //找到计算起点（+ -）
    while (input.indexOf("-") != -1 || input.indexOf("+") != -1) {


        if (input.indexOf("-") != -1) {
            i = input.indexOf("-");
            input[i - 1] = parseFloat(input[i - 1]) - parseFloat(input[i + 1]);
            input.splice(i, 2);
        } else {
            i = input.indexOf("+");
            input[i - 1] = parseFloat(input[i - 1]) + parseFloat(input[i + 1]);
            input.splice(i, 2);
        }
    }

    view();

}
