'use strict';

/**
 * @ngdoc function
 * @name prototypesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototypesApp
 */
angular.module('prototypesApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.siteTemplates = [
            'classic',
            'longScroll',
            'newsy',
            'brochure'
        ]




    });
