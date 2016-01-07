'use strict';

/**
 * @ngdoc service
 * @name twebTschApp.userFactory
 * @description
 * # userFactory
 * Factory in the twebTschApp.
 */
angular.module('twebTschApp')
  .factory('userFactory', ['$resource', function ($resource) {
    return $resource('https://api.github.com/users/:userId', {userId:'@id'});
  }]);
