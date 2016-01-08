'use strict';

/**
 * @ngdoc service
 * @name twebTschApp.statsparticipationfactory
 * @description
 * # statsparticipationfactory
 * Factory in the twebTschApp.
 */
angular.module('twebTschApp')
  .factory('statsParticipationFactory',['$resource', function ($resource) {
    return $resource('https://api.github.com/repos/:owner/:repo/stats/participation', {owner: '@owner', repo: '@repo'});
  }]);

