'use strict';

/**
 * @ngdoc function
 * @name twebTschApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twebTschApp
 */
angular.module('twebTschApp')
  .controller('MainCtrl', ['$scope', 'userFactory','repoFactory', function ($scope, userFactory, repoFactory) {
    $scope.submit = function(){
      if($scope.text){
        userFactory.get({userId: $scope.text}, function(user){

          console.log('Utilisateur' , user);
          $scope.user = user;

          repoFactory.query({userId: $scope.text}, function(repos){
            console.log('Liste des repos', repos);
            $scope.repos = repos;
          });

        });
      }
    };
  }]);
