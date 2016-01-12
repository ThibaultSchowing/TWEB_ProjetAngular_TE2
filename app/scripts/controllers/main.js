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
      // Graphs are visible
      $scope.graphVisibility = false;
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

      var dateTable = [];

      // Graphs are visible
      $scope.graphVisibility = true;
      // Get stats informations
      console.log('Parameters display stats: ', nameRepo, owner);

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

        if(labelsFrequency.length > 50){
          for(var i = 0; i < labelsFrequency.length; i++){
            if(i%2){
              labelsFrequency[i] = "";
            }
          }
        }

        console.log('LabelFrequency');
        console.log(labelsFrequency);
        // We'll use this table in other graphs.
        dateTable = labelsFrequency;
        $scope.seriesAddition = ['Addition', 'Deletion'];
        $scope.dataAddition = [additions, deletions];
        $scope.labelsAddition = labelsFrequency;

      });

      //Participation weekly commit count 52 last weeks
      statsParticipationFactory.get({owner: owner, repo: nameRepo}, function (participation) {
        $scope.participation = participation;
        console.log('Participation all');
        console.log(participation.all);

        console.log('Participation owner');
        console.log(participation.owner);

        console.log('Participation dates');
        console.log(dateTable);

        // we have to cut the table according to the length of the date table
        var tabAll = participation.all;
        var tabOwner = participation.owner;
        var tabAllLen = tabAll.length;
        var tabOwnerLen = tabOwner.length;
        var tabDateLen = dateTable.length;

        var tabAllReduce = tabAll.slice(tabAllLen - tabDateLen, tabAllLen);
        var tabOwnerReduce = tabOwner.slice(tabOwnerLen - tabDateLen, tabOwnerLen);

        console.log('DateTableLen: ', dateTable.length, ' TabOwnerLen: ', tabOwnerReduce.length, ' tabAllLen: ', tabAllReduce.length);
        console.log('TTabAll truncation indices', tabAllLen - 1 - tabDateLen, tabAllLen);
        console.log('TabOwner trunction indices', tabOwnerLen - 1 - tabDateLen, tabOwnerLen);
        console.log('reduced tables');
        console.log(tabAllReduce);
        console.log(tabOwnerReduce);

        // Let's send this to the view
        $scope.seriesParticipation = ['All', 'Owner'];
        $scope.labelsParticipation = dateTable;
        $scope.dataParticipation = [tabAllReduce, tabOwnerReduce];

      });

      // last week Commit Activity
      statsCommitActivityFactory.query({owner: owner, repo: nameRepo}, function (activity) {
        $scope.commitActivity = activity;
        console.log('Activity ');
        console.log(activity);

        var nbWeeks = activity.length;

        var labels = [];
        var lastWeek = new Date(activity[nbWeeks - 1].week * 1000);

        // Adjusting dates for the last week, including future days
        for (var i = 0; i < 7; i++) {
          var date = new Date();
          date.setDate(lastWeek.getDate() + i);
          labels.push(date.toDateString());
        }

        console.log('labels: ', labels);
        console.log('data: ', activity[nbWeeks - 1].days);
        console.log('');
        $scope.labelsActivity = labels;
        $scope.dataActivity = [];
        $scope.dataActivity.push(activity[nbWeeks - 1].days);
        $scope.seriesActivity = ['Commits'];

      });


    };

  }
  ]);
