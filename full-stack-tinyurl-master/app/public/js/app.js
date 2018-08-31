var app = angular.module('tinyUrlApp', ['chart.js', 'ngRoute', 'ngResource' ]);

app.config(function($routeProvider){
	$routeProvider
		.when("/", {
			controller: "homeController",
			templateUrl: "./public/views/home.html"
		})
		.when("/urls/:shortUrl", {
			controller: "urlController",
			templateUrl: "./public/views/url.html"
		});
});