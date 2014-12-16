var myServicedGitHub = angular.module('gitService', []);
  myServicedGitHub.controller('gitServiceController', ['$scope', 'gitServerId', function( $scope, gitServerId ){
    $scope.results = [];

    $scope.dataFetch = function(){
      gitServerId.getAPI($scope.search).success( function( data){

        if(data.items.length > 0){
          angular.forEach(data.items, function(users, index){

            $scope.results.push(users);
            console.log($scope.results);
          });
        }
        else $scope.confirm = "True";
        console.log($scope.results);
      });
    }
  }]);

  myServicedGitHub.factory('gitServerId', ['$http', function($http){
    var url = "https://api.github.com/search/users?";
    var gitItems = {};

    gitItems.getAPI = function(query){
      return $http.get(url, {params: {q: query } });
    };
    return gitItems;

  }]);


// Service Settings...
  // myServicedGitHub.service('gitServerId', ['$http', function($http){
  //   var url = "https://api.github.com/search/users?";

  //   gitItems.getAPI = function(query){
  //     return $http.get(url, {params: {q: query } });
  //   };

  // }]);

