'use strict';

angular.module('myApp.ModalInnerContent',[])
.controller('ModalInnerContent', ['$scope','RoomService',function($scope,RoomService) {
    $scope.submitCriteria = function() {
        RoomService.saveCriteria({
          bathroom: $scope.bathrooms_selected,
          bedroom:  $scope.bedrooms_selected,
          location: $scope.location,
          price:    $scope.price
        }).then(function(response){
          console.log('data',response.data);
          $scope.resultData = response.data;
          $scope.$hide();
        });
    }
}]);