'use strict';

/**
 * @ngdoc overview
 * @name prototypesApp
 * @description
 * # prototypesApp
 *
 * Main module of the application.
 */
angular
  .module('prototypesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/classic', {
            templateUrl: 'views/classic.html',
            controller: 'classicCtrl'
        })
        .when('/longScroll', {
            templateUrl: 'views/longScroll.html',
            controller: 'longScrollCtrl'
        })
        .when('/newsy', {
            templateUrl: 'views/newsy.html',
            controller: 'newsyCtrl'
        })
        .when('/brochure', {
            templateUrl: 'views/brochure.html',
            controller: 'brochureCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
