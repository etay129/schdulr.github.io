"use strict";

var app = angular.module('schdulrApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'page-home.html',
            controller: 'MainCtrl'
        })

        // about page
        .when('/events', {
            templateUrl: 'page-events.html',
            controller: 'EventsCtrl'
        })

        .otherwise('/', {
            templateUrl: 'page-home.html',
            controller: 'MainCtrl'
        });
});
