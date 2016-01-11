'use strict';

/**
 * @ngdoc function
 * @name twebTschApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twebTschApp
 */
angular.module('twebTschApp')
  .controller('MainCtrl', ['$scope', 'userFactory', 'repoFactory', 'statsParticipationFactory', 'statsCommitActivityFactory', 'addAndDelFactory', function ($scope, userFactory, repoFactory, statsParticipationFactory, statsCommitActivityFactory, addAndDelFactory) {
    $scope.submit = function () {
      if ($scope.text) {
        // On reçoit un objet, on peut utiliser get
        userFactory.get({userId: $scope.text}, function (user) {
          // Si user existe, on peut chercher ses repos
          if (user) {
            console.log('Utilisateur', user);
            $scope.user = user;
            // étant donné qu'on reçoit un tableau d'objet, il faut utiliser query au lieu de get.
            repoFactory.query({userId: $scope.text}, function (repos) {
              console.log('Liste des repos', repos);
              $scope.repos = repos;
            });
          }
        }, function (error) {
          console.log('Erreur get users !!! User dont existe !!');

          $scope.user = null;
          $scope.repos = null;

        });
      }
    };

    // Function when "stats" button is pushed
    $scope.displayStats = function (nameRepo, owner) {

      var listSunday = [];
      for (var httpBruteForce = 0; httpBruteForce < 4; httpBruteForce++) {
        console.log('Brute-Force loop: ' + httpBruteForce);

        // Get stats informations
        console.log('Parameters display stats: ', nameRepo, owner);

        /*//Commit Activity TO DELETE
        statsCommitActivityFactory.query({owner: owner, repo: nameRepo}, function (activity) {
          $scope.commitActivity = activity;
          console.log('Activity');
          console.log(activity);

        });*/

        //Addition and deletion per week
        addAndDelFactory.query({owner: owner, repo: nameRepo}, function (frequency) {
          $scope.frequency = frequency;
          console.log('Frequency');
          console.log(frequency);

          var additions = [];
          var deletions = [];
          var labelsFrequency = [];
          angular.forEach(frequency, function (data) {
            //timestamp
            var date = new Date(data[0] * 1000);
            var n = date.toDateString();

            labelsFrequency.push(n);
            additions.push(data[1]);
            deletions.push(data[2]);
          });

          // We'll use this table in other graphs.
          listSunday = labelsFrequency;
          $scope.seriesAddition = ['Addition', 'Deletion'];
          $scope.dataAddition = [additions, deletions];
          $scope.labelsAddition = labelsFrequency;

        });

        //Participation weekly commit count 52 last weeks
        statsParticipationFactory.get({owner: owner, repo: nameRepo}, function (participation) {
          $scope.participation = participation;
          console.log('Participation');
          console.log(participation);

          var tabAll = participation.all;
          var tabOwner = participation.owner;


          $scope.seriesParticipation = ['All', 'Owner'];
          $scope.labelsParticipation = listSunday;
          $scope.dataParticipation = [tabAll, tabOwner];
        });


        //


      }
    }

  }
  ]);
