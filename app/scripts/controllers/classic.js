'use strict';

/**
 * @ngdoc function
 * @name prototypesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prototypesApp
 */
angular.module('slateSiteDesignPrototypesApp')
  .controller('classicCtrl', function ($scope) {
    $scope.schoolData = pelhamData;

  });
