'use strict';

myServices.factory('RoomService',['$http','$q','APP_SETTINGS','_',
    function($http,$q,APP_SETTINGS,_){
        return {
            bathroom : function() {
                return $http
                .get(APP_SETTINGS.getUrl('bathrooms'))
            },
            bedroom : function() {
                return $http
                .get(APP_SETTINGS.getUrl('bedrooms'))

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
                return $http
                .post(APP_SETTINGS.getUrl('criteria'),res)
            }
        }
    }]);