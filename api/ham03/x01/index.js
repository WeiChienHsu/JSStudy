var XLSX = require('xlsx');
const express = require('express');



var wb = XLSX.utils.book_new();

var ws = XLSX.utils.aoa_to_sheet([
    // "SheetJS".split(""),
    ["A", "B", "C", "D", "E", "F", "G"],
    [1,2,3,4,5,6,7],
    [2,3,4,5,6,7,8]
]);

XLSX.utils.book_append_sheet(wb, ws, "HAMILTON");

XLSX.writeFile(wb, 'test.xlsx');

console.log("xls file is created.");


const app = express();
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/download', function(req, res){

    var file = __dirname + '/example.xls';
    res.download(file); // Set disposition and send it.
});




