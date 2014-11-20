'use strict';

angular.module('myApp.homepage', ['ui.router','mgcrea.ngStrap.modal'])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "templates/homepage.html",
      controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', ['$scope',function($scope) {
    $scope.modal = {
      "title": "Update Criteria",
      'content': true
    };
}]);