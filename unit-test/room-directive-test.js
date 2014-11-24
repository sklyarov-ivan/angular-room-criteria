describe('directive: rooms',function(){
    var elm, template, $scope,$httpBackend,RoomService, $compile,directive ;
    // beforeEach(module('app/templates/directives/rooms.html'));
    beforeEach(function(){
        angular.mock.module('myApp');
        angular.mock.module('templates/directives/rooms.html');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            RoomService = $injector.get('RoomService');
            $compile = $injector.get('$compile');
        });
        RoomService.bedroom = function () {
            var result = {
                data : [{
                  "value": "None",
                  "index": 0
                },
                {
                  "value": "1",
                  "index": 1
                },
                {
                  "value": "2",
                  "index": 2
                },
                {
                  "value": "3",
                  "index": 3
                },
                {
                  "value": "4+",
                  "index": 4
                }]
            };
            return {
                then: function(result){
                    return result;
                }
            };
        };

        $scope = $rootScope.$new();

        template = angular.element('<div><rooms selected="bedrooms_selected" type="bedroom"></div>');

        $compile(template)($scope);
        elm = template.find('rooms');
        $scope.$digest();

    });

    afterEach(function() {
    });

    describe('initialisation', function() {
        it('should produce ui-select-multiple', function() {
            expect(elm.find('div').eq(0).hasClass('ui-select-multiple')).toEqual(true);
        });
    });
});