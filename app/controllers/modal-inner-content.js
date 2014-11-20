'use strict';

angular.module('myApp.ModalInnerContent',[])
.controller('ModalInnerContent', ['$scope','RoomService',function($scope,RoomService) {
    $scope.submitCriteria = function() {
        RoomService.saveCriteria({
          bathroom: $scope.bathrooms_selected,
          bedroom:  $scope.bedrooms_selected,
          location: $scope.location,
          price:    $scope.price
        }).then(function(data){
          console.log('data',data);
          $scope.resultData = data;
          $scope.$hide();
        });
    }
}]);