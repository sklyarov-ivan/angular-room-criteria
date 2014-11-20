'use strict';

myServices.factory('RoomService',['$http','$q','APP_SETTINGS','_',
    function($http,$q,APP_SETTINGS,_){
        return {
            bathroom : function() {
                var deferred = $q.defer();
                $http
                .get(APP_SETTINGS.getUrl('bathrooms'))
                .success(function(data){
                    deferred.resolve(data);
                })
                .error(function(err){
                    deferred.reject(err);
                });

                return deferred.promise;

            },
            bedroom : function() {
                var deferred = $q.defer();
                $http
                .get(APP_SETTINGS.getUrl('bedrooms'))
                .success(function(data){
                    deferred.resolve(data);
                })
                .error(function(err){
                    deferred.reject(err);
                });
                return deferred.promise;
            },
            saveCriteria: function(data) {
                var bathroom = _.map(data.bathroom,function(i,n){
                    return i.index;
                });
                var bedroom = _.map(data.bedroom,function(i,n){
                    return i.index;
                });
                var res = {
                    criteria: [
                        {
                            type : "bathrooms",
                            values: bathroom
                        },
                        {
                            type : "bedrooms",
                            values: bedroom
                        }
                    ],
                    price: data.price,
                    location: data.location
                };
                var deferred = $q.defer();
                $http
                .post(APP_SETTINGS.getUrl('criteria'),res)
                .success(function(data){
                    deferred.resolve(data);
                })
                .error(function(err){
                    deferred.reject(err);
                });
                return deferred.promise;
            }
        }
    }]);