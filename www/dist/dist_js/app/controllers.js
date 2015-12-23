angular.module('starter.controllers', [])

.controller('ButtonCtrl', ['$scope', function($scope) {
  $scope.num_coins = 20;

  $scope.coin_drop = function () {
    $scope.num_coins -= 1;
  };
}])

.controller('TrophiesCtrl', ['$scope', function($scope) {

  //$scope.$on('$ionicView.enter', function(e) {
  // query for trophies
  //});
  $scope.trophies = {
    'every_day': {
      'acquired': true,
      'number': 1,
      'color': 'bronze',
      'title': "All day, Err'day",
      'description': 'Hit the button every day for 17 years.'
    },
    'clicked_1000_times': {
      'acquired': false,
      'number': 0,
      'color': 'silver',
      'title': 'So... Many... Clicks...',
      'description': 'Hit the button 1000 times.'
    },
    'super_smart': {
      'acquired': true,
      'number': 2,
      'color': 'gold',
      'title': 'Look at dat IQ',
      'description': 'Obtain this trophy if you are crazy smart.'
    },
  };

  $scope.is_present_trophies = true;

  $scope.present_trophies = function () {
    $scope.is_present_trophies = true;
  };

  $scope.future_trophies = function () {
    $scope.is_present_trophies = false;
  };
}])
.controller('StatisticsCtrl', ['$scope', function($scope) {

  // $scope.settings = {
  //   enableFriends: true
  // };
}])

.controller('RankingsCtrl', ['$scope', function($scope) {

  $scope.is_most_presses = true;

  $scope.most_presses = function () {
    $scope.is_most_presses = true;
  };

  $scope.most_trophies = function () {
    $scope.is_most_presses = false;
  };


}])

.controller('SettingsCtrl', ['$scope', function($scope) {}])

;
