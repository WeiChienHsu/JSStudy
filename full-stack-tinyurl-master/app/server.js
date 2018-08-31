var express= require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect.js');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var useragent = require('express-useragent');

mongoose.connect('mongodb://user:user@ds013366.mlab.com:13366/tinyurl');

app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/public', express.static(__dirname + "/public"));

app.use(useragent.express());

app.use('/api/v1',restRouter);

app.use('/', indexRouter);

app.use('/:shortURL',redirectRouter);  // must contain string, only '/' not work here

app.listen(3000);