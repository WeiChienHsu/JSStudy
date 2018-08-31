var http = require('http');
var fs = require('fs');
function onRequest(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    })
}

var app = http.createServer(onRequest);
var io = require('socket.io')(app);
io.on('connection', function(socket) {
    socket.emit('news', 'Hello world');
    socket.on('my other event', function(data) {
        console.log(data);
    })
})

app.listen(8001, function() {
    console.log('listen on 8001')
})