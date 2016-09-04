'use strict';

angular.module('myApp.landingPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'view-about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', [function() {
	$('.navbar-nav > li').removeClass('active');
	$('#about-nav').addClass('active');
}]);