var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
    socket.emit('news', 'Hello world');
    socket.on('my other event', function(data) {
        console.log(data);
    })
})

http.listen(8001, function() {
    console.log('listen on 8001')
})

