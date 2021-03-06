// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'templates'])

.run(['$ionicPlatform', function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}])

.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.button', {
    url: '/button',
    views: {
      'tab-button': {
        templateUrl: 'tab-button.html',
        controller: 'ButtonCtrl'
      }
    }
  })

  .state('tab.trophies', {
      url: '/trophies',
      views: {
        'tab-trophies': {
          templateUrl: 'tab-trophies.html',
          controller: 'TrophiesCtrl'
        }
      }
    })

  .state('tab.statistics', {
    url: '/statistics',
    views: {
      'tab-statistics': {
        templateUrl: 'tab-statistics.html',
        controller: 'StatisticsCtrl'
      }
    }
  })

  .state('tab.rankings', {
    url: '/rankings',
    views: {
      'tab-rankings': {
        templateUrl: 'tab-rankings.html',
        controller: 'RankingsCtrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/button');

  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.scrolling.jsScrolling('false');
}]);

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

angular.module('starter.services', [])

// .factory('Chats', function() {
//   // Might use a resource here that returns a JSON array
// 
//   // Some fake testing data
//   var chats = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     face: 'img/ben.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     face: 'img/max.png'
//   }, {
//     id: 2,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     face: 'img/adam.jpg'
//   }, {
//     id: 3,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     face: 'img/perry.png'
//   }, {
//     id: 4,
//     name: 'Mike Harrington',
//     lastText: 'This is wicked good ice cream.',
//     face: 'img/mike.png'
//   }];
// 
//   return {
//     all: function() {
//       return chats;
//     },
//     remove: function(chat) {
//       chats.splice(chats.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].id === parseInt(chatId)) {
//           return chats[i];
//         }
//       }
//       return null;
//     }
//   };
// })
;

