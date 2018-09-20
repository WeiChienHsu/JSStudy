"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var path = require("path");
var server = express();
server.listen(8002);
// 单个产品类
var Product = (function () {
    function Product(id, title, price, rating, desc, categories // 产品分类
    ) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories; // 产品分类
    }
    return Product;
}());
exports.Product = Product;
// 评论类
var Comment = (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
// 产品信息
var products = [
    new Product(1, '第一个商品', 1.93, 3.4, '这是一个商品描述，测试。这是一个商品描述，测试。这是一个商品描述，测试。', ['电子产品', '硬件产品']),
    new Product(2, '第二个商品', 2.95, 4.3, '这是一个商品描述，测试。这是一个商品描述，测试。这是一个商品描述，测试。', ['电子产品', '软件产品']),
    new Product(3, '第三个商品', 3.93, 2.6, '这是一个商品描述，测试。这是一个商品描述，测试。这是一个商品描述，测试。', ['电子产品', '软件产品']),
    new Product(4, '第一个商品', 1.93, 1.5, '这是一个商品描述，测试。这是一个商品描述，测试。这是一个商品描述，测试。', ['软件产品', '硬件产品']),
    new Product(5, '第二个商品', 3.90, 2.4, '这是一个商品描述，测试。这是一个商品描述，测试。这是一个商品描述，测试。', ['电子产品', '软件产品']),
    new Product(6, '第三个商品', 1.93, 3.1, '这是一个商品描述，测试。这是一个商品描述，测试。这是一个商品描述，测试。', ['软件产品', '硬件产品']),
];
var comments = [
    new Comment(1, 1, '2017-09-22 10：15：50', '张三', 3, '东西不错'),
    new Comment(2, 1, '2017-03-12 80：15：20', '李四', 4, '东西还行'),
    new Comment(3, 2, '2017-07-10 70：15：10', '张三', 2, '东西不错'),
    new Comment(4, 1, '2017-09-12 20：19：21', '王五', 5, '东西还可以'),
    new Comment(5, 2, '2017-08-15 10：05：20', '赵六', 3, '东西不错'),
    new Comment(6, 3, '2017-08-15 18：15：26', '赵六', 3, '东西非常好'),
];
server.use('/', express.static(path.join(__dirname, '..', 'client')));
server.get('/api/products', function (req, res) {
    var result = products;
    var params = req.query;
    // console.log(!params, params);
    if (params.category) {
        // 过滤数据
        if (params.title) {
            result = result.filter(function (p) { return p.title.indexOf(params.title) !== -1; });
        }
        if (params.price && result.length > 0) {
            // 返回商品价格小于或等于搜索价格的 商品
            result = result.filter(function (p) { return p.price <= parseInt(params.price); });
        }
        // '-1' 表示全部产品
        if (params.category !== '-1' && result.length > 0) {
            // 返回商品价格小于或等于搜索价格的 商品
            result = result.filter(function (p) { return p.categories.indexOf(params.category) !== -1; });
        }
    }
    res.json(result);
});
server.get('/api/products/:id', function (req, res) {
    // 不能用 === 因为这里一个是number一个是string
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
// 处理comment的get请求
server.get('/api/products/:id/comments', function (req, res) {
    res.json(comments.filter(function (comment) { return comment.productId == req.params.id; }));
});
var subScription = new Map();
// 在8085端口创建一个服务器，当有客户端通过ws连接这个端口时，给客户端发送消息
var wsServer = new ws_1.Server({
    port: 8086
});
wsServer.on('connection', function (websocket) {
    // websocket.send('这个消息是服务器主动发送的');
    websocket.on('message', function (value) {
        var messageObj;
        messageObj = JSON.parse(value);
        var productIds = subScription.get(websocket) || [];
        subScription.set(websocket, productIds.concat([messageObj.productId]));
    });
});
var currentBids = new Map();
setInterval(function () {
    // console.log( '----->');
    products.forEach(function (p) {
        var currentBid = currentBids.get(p.id) || p.price;
        // 价格每次加5左右
        var newBid = currentBid + Math.random() * 5;
        // console.log("--->" + newBid);
        currentBids.set(p.id, newBid);
    });
    subScription.forEach(function (productIds, ws) {
        if (ws.readyState === 1) {
            var newBids = productIds.map(function (pid) { return ({
                productId: pid,
                bid: currentBids.get(pid)
            }); });
            ws.send(JSON.stringify(newBids));
        }
        else {
            subScription.delete(ws);
        }
    });
}, 2000);
