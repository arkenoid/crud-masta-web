'use strict';

angular
  .module('crudMastaWebApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
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
      .when('/person/list', {
        templateUrl: 'views/person/list.html',
        controller: 'PersonListCtrl'
      })
      .when('/person/add', {
        templateUrl: '../views/person/add.html',
        controller: 'PersonAddCtrl'
      })
      .when('/person/del', {
        templateUrl: 'views/person/del.html',
        controller: 'PersonDelCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
