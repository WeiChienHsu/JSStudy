var app = require("express");
var server = require("http").Server(app);
var io = require("socket.io")(server);

io.on("connection", handleClient);

app.listen(8080);