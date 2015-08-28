app.controller("SongCtrl", 
              ["$scope",
              "$firebaseArray", 
               "simple-storage", 
               "song-storage", 
  function($scope, $firebaseArray, simple_storage, song_storage) {

  $scope.songs = [];
  $scope.songSearchText = {name: "", artist: "", album: ""};
  $scope.newSong = {name: "", artist: "", album: ""};

  var ref = new Firebase("https://blazing-heat-5390.firebaseio.com/");
  $scope.songs = $firebaseArray(ref);

  $scope.killSong = function(song) {
    // console.log(song);
    var songIndex = $scope.songs.indexOf(song);
    // console.log($scope.songs);
    if (songIndex >= 0) {
    // console.log(songIndex);
    $scope.songs.splice(songIndex, 1);

    }

    $scope.addSongs = function(song) {
    $scope.song.push({
    name: $scope.newSongs,
    complete: false
  });

    $scope.newSong = "";
  };
};

  simple_storage.addJunk("garbage", { a: 1, b: 2});

  song_storage.then(
    function(promiseResolutionData) {
      console.log("promiseResolutionData", promiseResolutionData);
      $scope.songs = promiseResolutionData;
    },
    function(promiseRejectionError) {
      console.log("error", promiseRejectionError);
    });

  }
]);