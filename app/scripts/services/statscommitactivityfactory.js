'use strict';

/**
 * @ngdoc service
 * @name twebTschApp.statsCommitActivityFactory
 * @description
 * # statsFactory
 * Factory in the twebTschApp.
 */
angular.module('twebTschApp')
  .factory('statsCommitActivityFactory',['$resource', function ($resource) {
    return $resource('https://api.github.com/repos/:owner/:repo/stats/commit_activity', {owner: '@owner', repo: '@repo'});
  }]);
