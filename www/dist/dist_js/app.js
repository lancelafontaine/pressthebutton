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

angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("tab-button.html","<ion-view view-title=\"Button\">\n  <ion-content class=\"padding\" scroll=\"false\">\n    <div id=\"thebutton_row\" class=\"row row-bottom\">\n      <div id=\"thebutton_div\" class=\"col-center\">\n        <button id=\"thebutton\" class=\"button button-block \" ng-click=\"coin_drop()\">Press the Button</button>\n      </div>\n    </div>\n    <div id=\"coin_xp_row\" class=\"row\">\n      <div class=\"col col-20\">\n        <div id=\"coins_div \">\n          <i id=\"coins_icon\" class=\"icon ion-cube\"></i><span id=\"coins\">{{num_coins}}</span>\n        </div>\n        <div id=\"lvl_div\">\n          <span id=\'lvl\'>LVL: 1</span>\n        </div>\n      </div>\n      <div class=\"col col-80\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width: 25%\">\n            <span id=\"xp\">XP: 345</span>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-rankings.html","<ion-view view-title=\"Rankings\">\n  <ion-content id=\"rankings-page\" class=\"padding\">\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <button\n          class=\"button button-clear\"\n          ng-click=\"most_presses()\"\n          ng-class=\"is_most_presses ? \'trophy-button-active\' : \'trophy-button\'\">\n            Most Button Presses\n        </button>\n      </div>\n      <div class=\"col\">\n        <button\n          class=\"button button-clear\"\n          ng-click=\"most_trophies()\"\n          ng-class=\"!is_most_presses ? \'trophy-button-active\' : \'trophy-button\'\">\n          Most Trophies\n        </button>\n      </div>\n    </div>\n\n    <div class=\"list card\" ng-show=\"is_most_presses\">\n      <div class=\"item item-divider\">Most Button Presses</div>\n      <div class=\"item item-body\">\n        <div class=\"ranking\">\n          <span class=\"ranking-left\">1.</span>\n          <span class=\"ranking-center\">username1</span>\n          <span class=\"ranking-right\">9765896754</span>\n        </div>\n      </div>\n      </div>\n    </div>\n\n    <div class=\"list card\" ng-show=\"!is_most_presses\">\n      <div class=\"item item-divider\">Most Trophies</div>\n      <div class=\"item item-body\">\n        <div class=\"ranking\">\n          <span class=\"ranking-left\">1.</span>\n          <span>username2</span>\n          <span class=\"ranking-right\">7754</span>\n        </div>\n      </div>\n    </div>\n\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-settings.html","<ion-view view-title=\"Settings\">\n  <ion-content class=\"padding\">\n    <div class=\"list card\">\n      <div class=\"item item-divider\">Your info</div>\n      <div class=\"item item-body\">\n        <div>\n          <span class=\"account-left\">Name</span>\n          <span class=\"account-right\">Harifurifa Bubblegum</span>\n        </div>\n      </div>\n      <div class=\"item item-body\">\n        <div>\n          <span class=\"account-left\">Email</span>\n          <span class=\"account-right\">hahaha@test.com</span>\n        </div>\n      </div>\n    <div class=\"item item-body\">\n      <div>\n        <span class=\"account-left\">Change Password</span>\n        <span class=\"account-right\"><i class=\"icon ion-chevron-right\"></i></span>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"settings-toggles\"class=\"list card\">\n    <div class=\"item item-divider\">Settings</div>\n    <div class=\"item item-body\">\n      <div>\n        <span class=\"account-left\">Setting 1</span>\n        <span class=\"account-right\"><ion-toggle toggle-class=\"toggle-positive\"></ion-toggle></span>\n      </div>\n    </div>\n    <div class=\"item item-body\">\n      <div>\n        <span class=\"account-left\">Setting 2</span>\n        <span class=\"account-right\"><ion-toggle toggle-class=\"toggle-positive\"></ion-toggle></span>\n      </div>\n    </div>\n  <div class=\"item item-body\">\n    <div>\n      <span class=\"account-left\">Setting 3</span>\n      <span class=\"account-right\"><ion-toggle toggle-class=\"toggle-positive\"></ion-toggle></span>\n    </div>\n  </div>\n</div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-statistics.html","<ion-view view-title=\"Account\">\n  <ion-content id=\"account-page\" class=\"padding\">\n\n    <div class=\"list card\">\n      <div class=\"item item-divider\">Statistics</div>\n      <div class=\"item item-body\">\n        <div>\n          <span class=\"account-left\">Number of Button Presses</span>\n          <span class=\"account-right\">8764</span>\n        </div>\n      </div>\n      <div class=\"item item-body\">\n        <div>\n          <span class=\"account-left\">Average Button Presses per Day</span>\n          <span class=\"account-right\">72</span>\n        </div>\n      </div>\n      <div class=\"item item-body\">\n        <div>\n          <span class=\"account-left\">Number of Trophies</span>\n          <span class=\"account-right\">14</span>\n        </div>\n      </div>\n      <div class=\"item item-body\">\n        <div>\n          <span class=\"account-left\">Distribution of Trophies</span>\n          <span class=\"account-right\">1<i class=\"icon ion-trophy gold\"></i> 3<i class=\"icon ion-trophy silver\"></i> 10 <i class=\"icon ion-trophy bronze\"></i></span>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-trophies.html","<ion-view view-title=\"Trophies\">\n  <ion-content id=\"trophy-page\" class=\"padding\">\n    <!-- <ion-refresher pulling-text=\"Pull to refresh...\" on-refresh=\"doRefresh()\"></ion-refresher> -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <button\n          class=\"button button-clear\"\n          ng-click=\"present_trophies()\"\n          ng-class=\"is_present_trophies ? \'trophy-button-active\' : \'trophy-button\'\">\n            Your Trophies\n        </button>\n      </div>\n      <div class=\"col\">\n        <button\n          class=\"button button-clear\"\n          ng-click=\"future_trophies()\"\n          ng-class=\"!is_present_trophies ? \'trophy-button-active\' : \'trophy-button\'\">\n          Trophies to acquire\n        </button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col col-100\">\n        <div ng-repeat=\"trophy in trophies\" ng-show=\"is_present_trophies\">\n          <div\n            class=\"list card\"\n            ng-show=\"trophy.acquired\">\n            <div class=\"item item-divider\">{{trophy.title}}</div>\n            <div class=\"item item-body\">\n              <div class=\"num_trophies\"ng-if=\"is_present_trophies\">\n                {{trophy.number}}x\n              </div>\n              <div class=\"ion-trophy-div\">\n                <i class=\"icon ion-trophy {{trophy.color}}\"></i>\n              </div>\n              <div>\n                {{trophy.description}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col col-100\">\n        <div ng-repeat=\"trophy in trophies\" ng-show=\"!is_present_trophies\">\n          <div class=\"list card\" ng-hide=\"trophy.acquired\">\n            <div class=\"item item-divider\">{{trophy.title}}</div>\n            <div class=\"item item-body\">\n              <div class=\"num_trophies\"ng-if=\"is_present_trophies\">\n                {{trophy.number}}x\n              </div>\n              <div class=\"ion-trophy-div\">\n                <i class=\"icon ion-trophy {{trophy.color}}\"></i>\n              </div>\n              <div>\n                {{trophy.description}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tabs.html","\n<ion-tabs class=\"tabs-icon-top tabs-color-active-positive\">\n\n  <ion-tab title=\"Button\" icon-off=\"ion-android-radio-button-on\" icon-on=\"ion-android-radio-button-on\" href=\"#/tab/button\">\n    <ion-nav-view name=\"tab-button\"></ion-nav-view>\n  </ion-tab>\n\n  <ion-tab title=\"Trophies\" icon-off=\"ion-trophy\" icon-on=\"ion-trophy\" href=\"#/tab/trophies\">\n    <ion-nav-view name=\"tab-trophies\"></ion-nav-view>\n  </ion-tab>\n\n  <ion-tab title=\"Statistics\" icon-off=\"ion-stats-bars\" icon-on=\"ion-stats-bars\" href=\"#/tab/statistics\">\n    <ion-nav-view name=\"tab-statistics\"></ion-nav-view>\n  </ion-tab>\n\n  <ion-tab title=\"Rankings\" icon-off=\"ion-arrow-graph-up-right\" icon-on=\"ion-arrow-graph-up-right\" href=\"#/tab/rankings\">\n    <ion-nav-view name=\"tab-rankings\"></ion-nav-view>\n  </ion-tab>\n\n  <ion-tab title=\"Settings\" icon-off=\"ion-android-settings\" icon-on=\"ion-android-settings\" href=\"#/tab/settings\">\n    <ion-nav-view name=\"tab-settings\"></ion-nav-view>\n  </ion-tab>\n\n</ion-tabs>\n");}]);