angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('NewsIndexCtrl', function($scope, $http) {
    $http({method: 'GET', url: 'http://herochat.com/news/api/list/'})
        .success(function(data, status, headers, config) {
            $scope.news = data.results;
        });
  
})


// A simple controller that shows a tapped item's data
.controller('NewsDetailCtrl', function($scope, $stateParams, $http) {
    $http({method: 'GET', url: 'http://herochat.com/news/api/get/' + $stateParams.newsId + '/'})
        .success(function(data, status, headers, config) {
            return $scope.article = data;
        });
});
