'use strict';

/**
 * @ngdoc function
 * @name prototypesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prototypesApp
 */
angular.module('slateSiteDesignPrototypesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
