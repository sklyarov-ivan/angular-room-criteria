'use strict'

myDirectives.directive('rooms', function(RoomService, _) {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/rooms.html',
        scope : {
            selectedVal: '=selected',
            type:'@'
        },
        controller: function($scope) {
            $scope.availableParams = [];
            $scope.multipleParams = {};
            $scope.multipleParams.selected = [];
            RoomService[$scope.type]().then(function(response){
                $scope.availableParams = response.data;
            });

            $scope.$watch('availableParams.selected',function(newVal,oldVal){
                $scope.selectedVal = newVal;
            });
        }
    }
});