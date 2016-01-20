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
      .otherwise({
        redirectTo: '/'
      });
  })
  .config( [
    '$compileProvider',
    function( $compileProvider )
    {
      // Tentative de résoudre le problème des liens "unsafe" -> it's not very effective
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|http|blob:chrome-extension):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);


angular.module('twebTschApp')
  .run(['$http', function ($http) {
    $http.defaults.headers.common['Authorization'] = 'Token ' + 'cf40de1ef3c96e5e721984e539af707b7daea838';
  }]);


// Token 702be16ed42305525086fa5e9822b65ded188d6a
// Token bis cf40de1ef3c96e5e721984e539af707b7daea838
