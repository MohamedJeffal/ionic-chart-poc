angular.module('starter.controllers', ['chart.js'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ChartCtrl', function($scope) {
      $scope.type = 'doughnut';

      $scope.dataset = {
        doughnut: {
          labels:["Download Sales", "In-Store Sales", "Mail-Order Sales"],
          data: [300, 500, 100]
        },
        line: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          series: ['Series A', 'Series B'],
          data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
          ]
        }
      };

      $scope.setType = function(type) {
        $scope.type = type;
      }
})

