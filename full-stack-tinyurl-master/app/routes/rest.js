var express = require('express');
var router = express.Router();
var urlService = require('../services/urlService');
var statsService = require('../services/statsService');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.post('/urls',jsonParser,function(req,res){
	var longUrl = req.body.longUrl;
	console.log(longUrl);
	urlService.getShortUrl(longUrl, function(url){
		console.log(longUrl);
		res.json(url);
		console.log(longUrl);
	});
});

router.get('/urls/:shortUrl', function(req,res){
	var shortUrl = req.params.shortUrl;
	urlService.getLongUrl(shortUrl, function(url){
		if(url){
			res.json(url);
		} else {
			res.status(404).send("woooa!!");
		}
	});
});

router.get('/urls/:shortUrl/:info', function(req,res){
	statsService.getUrlInfo(req.params.shortUrl, req.params.info, function(data){
		res.json(data);
	});
});

module.exports = router;