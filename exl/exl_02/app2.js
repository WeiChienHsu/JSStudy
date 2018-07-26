var xlsx = require('node-xlsx');
var fs = require('fs');

var data = [
    {
        name : 'HAMILTON',
        data : [
            [
                'Num_Incubation',
                'Num_SP',
                'Vol_DMSO'
            ],
            [
                '7',
                '3',
                '12.5'

            ]
        ]
    }
];

// 写xlsx
var buffer = xlsx.build(data);
fs.writeFile('./result.xls', buffer, function (err)
    {
        if (err)
            throw err;
        console.log('Write to xls has finished');

// 读xlsx
        var obj = xlsx.parse("./" + "resut.xls");
        console.log(JSON.stringify(obj));
    }
);


const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/download', function(req, res){
    var file = __dirname + '/result.xls';
    res.download(file); // Set disposition and send it.
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

