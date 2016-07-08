'use strict';

/**
 * @ngdoc function
 * @name tnpsuiteGuideApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tnpsuiteGuideApp
 */
angular.module('tnpsuiteGuideApp')
  .controller('StepCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.isActive = function (routes) {
      angular.forEach(routes, function(route){
        if(route === $location.path())
          return true;
      });
    }

  }]);
