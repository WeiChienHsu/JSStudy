
n = 10;
var res = "";
for (i = 1; i < n; i++) {
    res += "\'" + i.toString() + "\'" ;
    res += ", ";
}
console.log(res);