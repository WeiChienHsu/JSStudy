var geoip= require('geoip-lite');
var RequestModel = require('../models/requestModel');

var logRequest = function(shortUrl, req) {
	var reqInfo = {};
	reqInfo.shortUrl = shortUrl;
	reqInfo.referer = req.header.referer || 'Unknown';
	reqInfo.platform = req.useragent.platform || 'Unknown';
	reqInfo.browser = req.useragent.browser || 'Unknown';
	var ip = req.header['x-forward-for'] ||
			req.connection.remoteAddress ||
			req.socket.remoteAddress ||
			req.connection.socket.remoteAddress;
	var geo = geoip.lookup(ip);
	if(geo) {
		reqInfo.country = geo.country;
	} else {
		reqInfo.country = 'Unknown';
	}
	reqInfo.timestamp = new Date();
	var request = new RequestModel(reqInfo);
	request.save();
};

var getUrlInfo = function(shortUrl, info, callback) {
	if(info === 'totalClicks') {		// mongo return the data, first will be err
		RequestModel.count({shortUrl:shortUrl}, function(err,data){
			callback(data);
		});
		return;
	}

	var groupId = "";

	if(info === 'hour'){
		groupId = {
			year:{$year: "$timestamp"},
			month:{$month: "$timestamp"},
			day:{$dayOfMonth: "$timestamp"},
			hour:{$hour: "$timestamp"},
			minutes:{$minute: "$timestamp"}  // base on very minute
		}
	} else if(info === 'day'){
		groupId = {
			year:{$year: "$timestamp"},
			month:{$month: "$timestamp"},
			day:{$dayOfMonth: "$timestamp"},
			hour:{$hour: "$timestamp"}  // base on very hour
		}
	} else if(info === 'month'){
		groupId = {
			year:{$year: "$timestamp"},
			month:{$month: "$timestamp"},
			day:{$dayOfMonth: "$timestamp"} // base on very day
		}
	} else {
		groupId = "$" + info;
	}

	RequestModel.aggregate([
		{
			$match: {
				shortUrl: shortUrl
			}
		},
		{
			$sort: {
				timestamp: -1
			}
		},
		{
			$group: {
				_id: groupId,
				count: {
					$sum: 1
				}
			}
		}
	], function(err,data){
		callback(data);
	});

};

module.exports = {
	logRequest : logRequest,
	getUrlInfo: getUrlInfo
}