'use strict';
// token github , {headers: { 'ThibaultSchowing': 'c7850b76538ff72e043c783df8239a2e326615b0' }}
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
    'chart.js',
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


// TO DELETE
angular.module('twebTschApp')
  .run(['$http', function ($http) {
    $http.defaults.headers.common['Authorization'] = 'Token ' + '702be16ed42305525086fa5e9822b65ded188d6a';
  }]);

// Basic 'VGhpYmF1bHRTY2hvd2luZzpUaGliJ3MxNDE0'
// Token 702be16ed42305525086fa5e9822b65ded188d6a
