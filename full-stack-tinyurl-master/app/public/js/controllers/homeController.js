var app = angular.module("tinyUrlApp");

app.controller('homeController',
	["$scope", "$http", "$location", function($scope,$http,$location){
	$scope.submit = function() {
		$http.post("/api/v1/urls", {		// post api call, and send json data
			longUrl: $scope.longUrl
		})
		.success(function (data) {		// data is get from post result json
			$location.path("/urls/" + data.shortUrl);	// location is redirect, shortUrl is in data json
		});
	}

}]);