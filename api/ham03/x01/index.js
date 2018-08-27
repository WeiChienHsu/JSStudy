// var XLSX = require('xlsx');
var XLSX = require('xlsx');

var wb = XLSX.utils.book_new();


var ws = XLSX.utils.aoa_to_sheet([
    "SheetJS".split(""),
    [1,2,3,4,5,6,7],
    [2,3,4,5,6,7,8]
]);

XLSX.utils.book_append_sheet(wb, ws, "sheet001");



// console.log(ws);






// XLSX.utils.book_append_sheet(wb, ws, "SheetJS");

// return wb;


XLSX.writeFile(wb, 'test.xls');

/*function make_book() {
    var ws = XLSX.utils.aoa_to_sheet(data);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
    return wb;
}*/
console.log("hello");




