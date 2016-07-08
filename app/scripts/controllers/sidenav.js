'use strict';

/**
 * @ngdoc function
 * @name tnpsuiteGuideApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tnpsuiteGuideApp
 */
angular.module('tnpsuiteGuideApp')
  .controller('SideNavCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.isActive = function (route) {
        if(route === $location.path()) {
          return true;
        }
    }

}]);
