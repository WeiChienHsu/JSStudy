var express = require('express');
var router = express.Router();
var urlService = require('../services/urlService.js');
var path = require('path');
var statsService = require('../services/statsService.js');

router.get('*',function(req,res){
	var shortUrl = req.originalUrl.slice(1);	// leave out the slash sign /
	urlService.getLongUrl(shortUrl,function(url){
		if(url){
			res.redirect(url.longUrl);
			statsService.logRequest(shortUrl, req);
		} else {
			res.sendFile('./views/404.html', { root: path.join(__dirname, '../public') });
		}
	});
});

module.exports = router;