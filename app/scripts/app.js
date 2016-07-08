'use strict';

/**
 * @ngdoc overview
 * @name tnpsuiteGuideApp
 * @description
 * # tnpsuiteGuideApp
 *
 * Main module of the application.
 */
angular
  .module('tnpsuiteGuideApp', [
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
        templateUrl: 'views/_activate-login.html',
        controller: 'StepCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/main.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/activate-login', {
        templateUrl: 'views/_activate-login.html',
        controller: 'StepCtrl',
        controllerAs: 'about'
      })
      .when('/familiarize-screen', {
        templateUrl: 'views/_familiarize-screen.html',
        controller: 'StepCtrl',
        controllerAs: 'about'
      })
      .when('/initial-configuration', {
      templateUrl: 'views/_initial-configuration.html',
      controller: 'StepCtrl',
      controllerAs: 'about'
      })
      .when('/placement-process', {
        templateUrl: 'views/_placement-process.html',
        controller: 'StepCtrl',
        controllerAs: 'about'
      })
      .when('/student-registration-schema', {
        templateUrl: 'views/_student-registration-schema.html',
        controller: 'StepCtrl',
        controllerAs: 'about'
      })
      .when('/add-students', {
        templateUrl: 'views/_add-students.html',
        controller: 'StepCtrl',
        controllerAs: 'about'
      })
      .when('/add-companies', {
        templateUrl: 'views/_add-companies.html',
        controller: 'StepCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
