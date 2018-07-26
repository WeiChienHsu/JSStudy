var xlsx = require('node-xlsx');
var fs = require('fs');

var data = [
    {
        name : 'HAMILTON',
        data : [
            [
                'ID',
                'Name',
                'Score'
            ],
            [
                '1',
                'Michael',
                '99'

            ],
            [
                '2',
                'Jordan',
                '98'
            ]
        ]
    },
    {
        name : 'sheet2',
        data : [
            [
                'AA',
                'BB'
            ],
            [
                '23',
                '24'
            ]
        ]
    }
]

// 写xlsx
var buffer = xlsx.build(data);
fs.writeFile('./resut.xls', buffer, function (err)
    {
        if (err)
            throw err;
        console.log('Write to xls has finished');

// 读xlsx
        var obj = xlsx.parse("./" + "resut.xls");
        console.log(JSON.stringify(obj));
    }
);