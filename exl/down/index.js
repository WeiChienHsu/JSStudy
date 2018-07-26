const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/download', function(req, res){
    var file = __dirname + '/upload-folder/file01.txt';
    res.download(file); // Set disposition and send it.
});