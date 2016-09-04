'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view-landing/landing-page.html',
    controller: 'landingPageCtrl'
  });
}])

.controller('landingPageCtrl', [function() {
	$('.navbar-nav > li').removeClass('active');
	$('#home-nav').addClass('active');
}]);