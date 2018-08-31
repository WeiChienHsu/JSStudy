var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req,res){
	res.sendFile('./views/index.html', { root: path.join(__dirname, '../public')} );
});

module.exports = router;