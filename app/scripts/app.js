'use strict';

angular
  .module('crudMastaWebApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/basics', {
        templateUrl: 'views/basics.html',
        controller: 'BasicsCtrl'
      })
      .when('/controls', {
        templateUrl: 'views/controls.html',
        controller: 'ControlsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
