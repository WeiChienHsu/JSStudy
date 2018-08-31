var UrlModel = require('../models/urlModel');
var redis = require('redis');
var host = process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1';
var port = process.env.REDIS_PORT_6379_TCP_PORT || '6379';

var redisClient = redis.createClient(port, host);

var encode = [];

var genCharArray = function (charA, charZ) {
    var arr = [];
    var i = charA.charCodeAt(0);
    var j = charZ.charCodeAt(0);

    for (; i <= j; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
};

encode = encode.concat(genCharArray('a', 'z'));
encode = encode.concat(genCharArray('A', 'Z'));
encode = encode.concat(genCharArray('0', '9'));

var getShortUrl = function(longUrl, callback) {
	if ( longUrl.indexOf('http') === -1 ) {
        longUrl = "http://" + longUrl;
    }
	//redis
	redisClient.get(longUrl, function(err, shortUrl){
		if(shortUrl) {
			console.log("byebye mongodb");
			callback({
				longUrl:longUrl,
				shortUrl:shortUrl
			});
		} else {
			//read from database
			//1. from which database(seach from official document)
			// find longurl in database
			UrlModel.findOne({ longUrl: longUrl}, function(err, url){	
				if(url) {
					callback(url);
				} else {	// generate and save to database
					generateShortUrl(function(shortUrl) {
						var url = new UrlModel({longUrl: longUrl, shortUrl: shortUrl});
						url.save();
						redisClient.set(shortUrl, longUrl); // set redis
						redisClient.set(longUrl, shortUrl);
						callback(url);
					});
				}
			});
		}
	});
	
};

var generateShortUrl = function(callback){
	
	UrlModel.find({},function(err, urls){	// empty match all objects
		callback(convertTo62(urls.length));
	});
};

var convertTo62 = function(number) {
	var short = '';

	while(number >= 62) {
		index = number%62;
		short += encode[index];
		number = Math.floor(number/62);
	}
	short += encode[number];
	return short;
};

var getLongUrl = function(shortUrl, callback) {
	redisClient.get(shortUrl, function(err, longUrl) {
		if(longUrl) {
			console.log("byebye mongodb");
			callback({
				longUrl:longUrl, 
				shortUrl:shortUrl
			});
		} else  {
			UrlModel.findOne({shortUrl:shortUrl}, function(err, url) {
				callback(url);
			});
		}
	});	
}

module.exports = {
    getShortUrl: getShortUrl,
    getLongUrl: getLongUrl
};


