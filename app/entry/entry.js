'use strict';

angular.module('myApp.entry', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/entry', {
    templateUrl: 'entry/entry.html',
    controller: 'EntryCtrl'
  });
}])

.controller('EntryCtrl', [function() {

}]);
