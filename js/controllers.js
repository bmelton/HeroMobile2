angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, $http) {
    $http({method: 'GET', url: 'http://herochat.com/news/preview/'})
        .success(function(data, status, headers, config) {
            $scope.pets = data;
        });
  
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, $http) {
    $http({method: 'GET', url: 'http://herochat.com/news/preview/' + $stateParams.petId + '/'})
        .success(function(data, status, headers, config) {
            return $scope.article = data;
        });
});
