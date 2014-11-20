'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  // 'ngRoute',
  'ui.router',
  // 'modal.criteria',
  'mgcrea.ngStrap',
  'myApp.directives',
  'myApp.services',
  'myApp.homepage',
  'myApp.ModalInnerContent',
  // 'myApp.view2',
  'myApp.version',
  'underscore',
  'ngSanitize'
])
.constant('APP_SETTINGS', {
    getUrl: function(url, vars) {
        return this.host + this.urls[url];
    },
    host: 'http://localhost:3000/api',
    urls: {
        bathrooms:    '/bathrooms.json',
        bedrooms:     '/bedrooms.json',
        criteria:     '/criteria'
    }
})
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  // $stateProvider.go('home')

}]);

var myDirectives = angular.module('myApp.directives', ['mgcrea.ngStrap','ui.select']);
var myServices = angular.module('myApp.services', []);
