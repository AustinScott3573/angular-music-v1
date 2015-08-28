app.controller("SongFormCtrl", ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {

        var ref = new Firebase("https://blazing-heat-5390.firebaseio.com/");
        $scope.songs = $firebaseArray(ref);
        $scope.newScope = {};

        $scope.addSong = function() {
            $scope.songs.$add({
                artist: $scope.newSong.artist,
                name: $scope.newSong.name,
                album: {
                name: $scope.newSong.albumName,

          }
        })
      };
    }
 ]);
