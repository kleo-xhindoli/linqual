'use strict';

angular.module('myApp.services', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', {
    templateUrl: 'view-services/services.html',
    controller: 'servicesCtrl'
  });
}])

.controller('servicesCtrl', [function() {
	$('.navbar-nav > li').removeClass('active');
	$('#services-nav').addClass('active');
}]);