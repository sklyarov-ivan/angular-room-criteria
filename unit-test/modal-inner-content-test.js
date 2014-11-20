describe('Controller: modal-inner-content', function () {
    var module,$controller,ModalInnerContent,$scope,$rootScope,$state,RoomService,createController,$httpBackend;
    beforeEach(function() {
        module = angular.mock.module('myApp');

        inject(function ($injector) {
            $state = $injector.get('$state');
            $controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            RoomService = $injector.get('RoomService');
            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');
            var data = 'response'
            createController = function () {
                ModalInnerContent = $controller('ModalInnerContent',{
                    $scope:         $scope,
                    RoomService:    RoomService
                  });
                return ModalInnerContent;
            };
            $httpBackend
              .whenGET('templates/homepage.html')
              .respond ({
                status: 200
              }); 
        });
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('submitCriteria', function(){
        it('should be a function', function(){
            createController();
            expect(angular.isFunction($scope.submitCriteria)).toBe(true);
            $httpBackend.flush();
        });

    });
});