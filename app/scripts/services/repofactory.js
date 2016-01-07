'use strict';

/**
 * @ngdoc service
 * @name twebTschApp.repoFactory
 * @description
 * # repoFactory
 * Factory in the twebTschApp.
 */
angular.module('twebTschApp')
  .factory('repoFactory', ['$resource', function ($resource) {
    return $resource('https://api.github.com/users/:userId/repos', {userId:'@id'});
  }]);
