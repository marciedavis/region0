"use strict"

$(function() {
	$('#content').append('page content').show();

	// $.ajax('http://localhost:3000/region', 'GET').done(function() {

	// });
});

var calendar = angular.module('region0', []);
calendar.controller('calendarController', ['$scope', '$window', function($scope, $window) {
	$window.alert('oh hi');
}]);