var XLSX = require('xlsx');
const express = require('express');


var new_ws_name = "HAMILTON";

var ws_data = [    ["A", "B", "C", "D", "E", "F", "G"],
    [1,2,3,4,5,6,7],
    [2,3,4,5,6,7,8]];

// XLSX.utils.sheet_add_aoa();

// var wb = XLSX.utils.;
var str = "{ opts: \n" +
    "   { Date1904: false,\n" +
    "     CalcPrecision: true,\n" +
    "     RefreshAll: false,\n" +
    "     FullCalc: false,\n" +
    "     CalcMode: 1,\n" +
    "     CalcCount: 100,\n" +
    "     CalcIter: false,\n" +
    "     CalcDelta: 0.001,\n" +
    "     CalcSaveRecalc: true },\n" +
    "  SheetNames: [ 'HAMILTON' ],\n" +
    "  Sheets: { HAMILTON: { '!margins': [Object] } },\n" +
    "  Preamble: { '!protect': false },\n" +
    "  Strings: [ Count: 0, Unique: 0 ],\n" +
    "  SSF: \n" +
    "   { '0': 'General',\n" +
    "     '1': '0',\n" +
    "     '2': '0.00',\n" +
    "     '3': '#,##0',\n" +
    "     '4': '#,##0.00',\n" +
    "     '5': '\"$\"#,##0_);\\\\(\"$\"#,##0\\\\)',\n" +
    "     '6': '\"$\"#,##0_);[Red]\\\\(\"$\"#,##0\\\\)',\n" +
    "     '7': '\"$\"#,##0.00_);\\\\(\"$\"#,##0.00\\\\)',\n" +
    "     '8': '\"$\"#,##0.00_);[Red]\\\\(\"$\"#,##0.00\\\\)',\n" +
    "     '9': '0%',\n" +
    "     '10': '0.00%',\n" +
    "     '11': '0.00E+00',\n" +
    "     '12': '# ?/?',\n" +
    "     '13': '# ??/??',\n" +
    "     '14': 'm/d/yy',\n" +
    "     '15': 'd-mmm-yy',\n" +
    "     '16': 'd-mmm',\n" +
    "     '17': 'mmm-yy',\n" +
    "     '18': 'h:mm AM/PM',\n" +
    "     '19': 'h:mm:ss AM/PM',\n" +
    "     '20': 'h:mm',\n" +
    "     '21': 'h:mm:ss',\n" +
    "     '22': 'm/d/yy h:mm',\n" +
    "     '37': '#,##0 ;(#,##0)',\n" +
    "     '38': '#,##0 ;[Red](#,##0)',\n" +
    "     '39': '#,##0.00;(#,##0.00)',\n" +
    "     '40': '#,##0.00;[Red](#,##0.00)',\n" +
    "     '41': '_(* #,##0_);_(* \\\\(#,##0\\\\);_(* \"-\"_);_(@_)',\n" +
    "     '42': '_(\"$\"* #,##0_);_(\"$\"* \\\\(#,##0\\\\);_(\"$\"* \"-\"_);_(@_)',\n" +
    "     '43': '_(* #,##0.00_);_(* \\\\(#,##0.00\\\\);_(* \"-\"??_);_(@_)',\n" +
    "     '44': '_(\"$\"* #,##0.00_);_(\"$\"* \\\\(#,##0.00\\\\);_(\"$\"* \"-\"??_);_(@_)',\n" +
    "     '45': 'mm:ss',\n" +
    "     '46': '[h]:mm:ss',\n" +
    "     '47': 'mmss.0',\n" +
    "     '48': '##0.0E+0',\n" +
    "     '49': '@',\n" +
    "     '56': '\"上午/下午 \"hh\"時\"mm\"分\"ss\"秒 \"',\n" +
    "     '65535': 'General' },\n" +
    "  Metadata: { Country: [ 'US', 'US' ] },\n" +
    "  Workbook: \n" +
    "   { Sheets: [ [Object] ],\n" +
    "     WBProps: { date1904: false },\n" +
    "     Views: [ {} ] },\n" +
    "  Custprops: \n" +
    "   { SystemIdentifier: 131334,\n" +
    "     CodePage: 936,\n" +
    "     Company: '',\n" +
    "     AppVersion: '15.0000',\n" +
    "     ScaleCrop: false,\n" +
    "     LinksUpToDate: false,\n" +
    "     SharedDoc: false,\n" +
    "     HyperlinksChanged: false,\n" +
    "     FMTID: '02d5cdd59c2e1b10939708002b2cf9ae',\n" +
    "     Author: 'Tianhui Zhu',\n" +
    "     LastAuthor: 'Tianhui Zhu',\n" +
    "     Application: 'Microsoft Excel',\n" +
    "     CreatedDate: '2018-08-28T16:41:06Z',\n" +
    "     ModifiedDate: '2018-08-28T16:41:55Z',\n" +
    "     DocSecurity: 0,\n" +
    "     Worksheets: 1,\n" +
    "     SheetNames: [ 'HAMILTON' ] },\n" +
    "  Props: \n" +
    "   { SystemIdentifier: 131334,\n" +
    "     CodePage: 936,\n" +
    "     Company: '',\n" +
    "     AppVersion: '15.0000',\n" +
    "     ScaleCrop: false,\n" +
    "     LinksUpToDate: false,\n" +
    "     SharedDoc: false,\n" +
    "     HyperlinksChanged: false,\n" +
    "     FMTID: '02d5cdd59c2e1b10939708002b2cf9ae',\n" +
    "     Author: 'Tianhui Zhu',\n" +
    "     LastAuthor: 'Tianhui Zhu',\n" +
    "     Application: 'Microsoft Excel',\n" +
    "     CreatedDate: '2018-08-28T16:41:06Z',\n" +
    "     ModifiedDate: '2018-08-28T16:41:55Z',\n" +
    "     DocSecurity: 0,\n" +
    "     Worksheets: 1,\n" +
    "     SheetNames: [ 'HAMILTON' ] } }";

var workbook = XLSX.readFile('input.xls');

// var workbook = XLSX.write(workbook(str));


console.log(workbook);
/*

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
*/
