'use strict';

/**
 * @ngdoc function
 * @name prototypesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototypesApp
 */
angular.module('slateSiteDesignPrototypesApp')
    .controller('MainCtrl', function ($scope) {


        $scope.siteTemplates = [
            'classic',
            'longScroll',
            'newsy',
            'brochure'
        ]




    });
