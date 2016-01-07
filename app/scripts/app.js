'use strict';

/**
 * @ngdoc overview
 * @name twebTschApp
 * @description
 * # twebTschApp
 *
 * Main module of the application.
 */
angular
  .module('twebTschApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/repo', {
        templateUrl: 'views/repo.html',
        controller: 'RepoCtrl',
        controllerAs: 'repo'
      })
      .when('/stats', {
        templateUrl: 'views/stats.html',
        controller: 'StatsCtrl',
        controllerAs: 'stats'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
