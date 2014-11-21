describe('Service: room-service', function () {
      var RoomService,$httpBackend;
        beforeEach(function(){
            angular.mock.module('myApp');

            inject(function($injector) {
                $httpBackend = $injector.get('$httpBackend');

                RoomService = $injector.get('RoomService');
            });
            $httpBackend
              .whenGET('/app/page_home/home.html')
              .respond ({
                status: 200
            }); 

        });
        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('bathroom', function(){
            it('should have an bathroom function', function () { 
                expect(angular.isFunction(RoomService.bathroom)).toBe(true);
            });

            it('should return data from the server', function () {
                var testData = [  {
                            value: 'None',
                            index: 0
                          },
                          {
                            value: '1',
                            index: 1
                          }];
                $httpBackend
                  .expectGET('http://localhost:3000/api/bathrooms.json')
                  .respond(function (method, url, data, headers) {
                    return [200, testData];
                  });
                var res = RoomService.bathroom();
                $httpBackend.flush();
                res.then(function(data){
                    expect(JSON.stringify(testData)).toEqual(JSON.stringify(data.data));
                });
            });

            it('should return error from the server', function () {
                var testData = 'error'
                $httpBackend
                  .expectGET('http://localhost:3000/api/bathrooms.json')
                  .respond(function (method, url, data, headers) {
                    return [404,testData];
                  });
                var res = RoomService.bathroom();
                $httpBackend.flush();
                res.catch(function(data){
                    expect(testData).toEqual(data.data);
                });
            });

        });

        describe('bedroom', function(){
            it('should have an bedroom function', function () { 
                expect(angular.isFunction(RoomService.bedroom)).toBe(true);
            });

            it('should return data from the server', function () {
                var testData = [  {
                            value: 'None',
                            index: 0
                          },
                          {
                            value: '1',
                            index: 1
                          }];
                $httpBackend
                  .expectGET('http://localhost:3000/api/bedrooms.json')
                  .respond(function (method, url, data, headers) {
                    return [200, testData];
                  });
                var res = RoomService.bedroom();
                $httpBackend.flush();
                res.then(function(data){
                    expect(JSON.stringify(testData)).toEqual(JSON.stringify(data.data));
                });
            });

            it('should return error from the server', function () {
                var testData = 'error';
                $httpBackend
                  .expectGET('http://localhost:3000/api/bedrooms.json')
                  .respond(function (method, url, data, headers) {
                    return [404,testData];
                  });
                var res = RoomService.bedroom();
                $httpBackend.flush();
                res.catch(function(data){
                    expect(testData).toEqual(data.data);
                });
            });

        });

        describe('bathroom', function(){
            it('should have an saveCriteria function', function () { 
                expect(angular.isFunction(RoomService.saveCriteria)).toBe(true);
            });

            it('should send data to the server and return success response', function () {
                var testData = {
                        price : 'price',
                        location: 'there',
                        criteria: [{
                            type : "bathrooms",
                            values: [0,1]
                        },
                        {
                            type : "bedrooms",
                            values: [1]
                        }]
                    };

                var data = {
                        price : 'price',
                        location: 'there',
                        bedroom: [
                              {
                                value: '1',
                                index: 1
                              }],
                        bathroom: [{
                                value: 'None',
                                index: 0
                              },
                              {
                                value: '1',
                                index: 1
                              }]
                    };
                $httpBackend
                  .expectPOST('http://localhost:3000/api/criteria')
                  .respond(function (method, url, data, headers) {
                    return [200, testData];
                  });
                var res = RoomService.saveCriteria(data);
                $httpBackend.flush();
                res.then(function(data){
                    expect(JSON.stringify(testData)).toEqual(JSON.stringify(data.data));
                });
            });

            it('should send data to the server and return fail response', function () {
                var testData = 'error';

                var data = {
                        price : 'price',
                        location: 'there',
                        bedroom: [
                              {
                                value: '1',
                                index: 1
                              }],
                        bathroom: [{
                                value: 'None',
                                index: 0
                              },
                              {
                                value: '1',
                                index: 1
                              }]
                    };
                $httpBackend
                  .expectPOST('http://localhost:3000/api/criteria')
                  .respond(function (method, url, data, headers) {
                    return [403, testData];
                  });
                var res = RoomService.saveCriteria(data);
                $httpBackend.flush();
                res.catch(function(data){
                    expect(testData).toEqual(data.data);
                });
            });
        });

});