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

    $ionicPlatform.ready(function() {
        if(device.platform === "iOS") {
            window.plugin.notification.local.promptForPermission();
        }
    });

    $scope.notify = function() {
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        $cordovaLocalNotification.add({
            id: "1234",
            date: alarmTime,
            message: "Ouvrez les fenêtres, il y a trop de CO² dans votre chambre !",
            title: "Danger CO²",
            autoCancel: true,
            sound: true
        }).then(function () {
            console.log("The notification has been set");
        });
    };

    $scope.isScheduled = function() {
        $cordovaLocalNotification.isScheduled("1234").then(function(isScheduled) {
            alert("Notification 1234 Scheduled: " + isScheduled);
        });
    }
})
<<<<<<< HEAD

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
=======
    .controller('ChartCtrl', function($scope) {

    });
>>>>>>> b3685c4ac051d8d06705b9d3835cb16fda228c3f

