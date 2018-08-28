var XLSX = require('xlsx');
const express = require('express');


var new_ws_name = "HAMILTON";

var ws_data = [    ["A", "B", "C", "D", "E", "F", "G"],
    [1,2,3,4,5,6,7],
    [2,3,4,5,6,7,8]];

// XLSX.utils.sheet_add_aoa();

// var wb = XLSX.utils.;


// var workbook = XLSX.readFile('input.xls');



// console.log(workbook);


var first_sheet_name = workbook.SheetNames[0];

// console.log(first_sheet_name);

var ws = XLSX.utils.aoa_to_sheet(ws_data);

XLSX.utils.book_append_sheet(workbook, ws, new_ws_name);

XLSX.writeFile(workbook, "input.xls");



console.log("xls file is created.");


const app = express();
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/download', function(req, res){

    var file = __dirname + '/input.xls';
    res.download(file); // Set disposition and send it.
});
