var json2xls = require('json2xls');
const fs = require('fs');

var json = {
    Num_Incubations: 12,
    Num_SP: 2,
    Vol_DMSO: 23.5,
    date: new Date()
}

var xls = json2xls(json);

fs.writeFileSync('data_01.xls', xls, 'binary');