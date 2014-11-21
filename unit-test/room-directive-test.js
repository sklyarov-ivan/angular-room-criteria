describe('directive: rooms',function(){
    var elm, template, $scope,$httpBackend,RoomService, $compile,directive ;
    beforeEach(function(){
        angular.mock.module('myApp');
        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');
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


        $httpBackend
              .whenGET('templates/directives/rooms.html')
              .respond ({
                status: 200
        }); 
        $scope = $rootScope.$new();

        template = angular.element('<div><rooms selected="bedrooms_selected" type="bedroom"></div>');

        $compile(template)($scope);
        elm = template.find('rooms');
        $scope.$digest();

    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('initialisation', function() {
        it('should produce ui-select', function() {
            console.log(elm);
            expect(elm.find('.select2').length).toEqual(1);
            $httpBackend.flush();

        });
        // it('should check validity on init', function() {
        //     expect(scope.form.$valid).toBeTruthy();
        // });
    });
});