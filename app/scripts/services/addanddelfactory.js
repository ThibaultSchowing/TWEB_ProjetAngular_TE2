'use strict';

/**
 * @ngdoc service
 * @name twebTschApp.addAndDelFactory
 * @description
 * # addanddelfactory
 * Factory in the twebTschApp.
 */
angular.module('twebTschApp')
    .factory('addAndDelFactory',['$resource', function ($resource) {
      return $resource('https://api.github.com/repos/:owner/:repo/stats/code_frequency', {owner: '@owner', repo: '@repo'});
    }]);
