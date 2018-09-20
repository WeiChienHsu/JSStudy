/**
 * Created by hxh on 2017/9/16.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    res.write('serve begin....');
    res.end('server begin ok');
});
server.listen(8000);
