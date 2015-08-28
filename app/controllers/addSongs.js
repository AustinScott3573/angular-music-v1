// app.controller("SongCtrl", "$firebaseArray",  function($scope, $q, $firebaseArray) {
//     $scope.title = "Song List";
//     $scope.theSong = "";
//     $scope.artist = "";
//     $scope.album = "";
//     $scope.songs = [];

// simple_storage.addJunk("garbage", { a: 1, b: 2});

// song_storage.then(
//     function(promiseResolutionData) {
//         console.log("promiseResolutionData", promiseResolutionData);
//         $scope.songs = promiseResolutionData;
//     },
//         function(promiseRejectionError) {
//         console.log("error", promiseRejectionError);
//     });

// var ref = new Firebase("https://music-history-v1.firebaseio.com/");
// $scope.songs = $firebaseArray(ref);

// $scope.killSong = function(song) {
//     // console.log(song);
//     var songIndex = $scope.songs.indexOf(song);
//     // console.log($scope.songs);
//     if (songIndex >= 0) {
//     // console.log(songIndex);
//     $scope.songs.splice(songIndex, 1);

//     }
// };

//     $scope.addSongs = function(song) {
//     $scope.song.push({
//     name: $scope.newSongs,
//     complete: false
// });

//     $scope.newSong = "";
// };

// // function getSongList() {
// // // perform some asynchronous operation, resolve or reject the promise when appropriate.
// // return $q(function(resolve, reject) {

// //     $.ajax({
// //         url: "../data/songs.json"
// //     })
// //     .done(function(response) {
// //         resolve(response.songs);
// //     })
// //     .fail(function(xhr, status, error) {
// //         reject(error);
// //     });

// // });
// // }


// // getSongList()
// // .then(
// //     function(promiseResolutionData) {
// //         $scope.songs = promiseResolutionData;
// //     },
// //     function(error) {
// //         console.log("error", error);
// //     });

// // function getMoreSongList() {
// // // perform some asynchronous operation, resolve or reject the promise when appropriate.
// // return $q(function(resolve, reject) {

// //     $.ajax({
// //         url: "../data/moresongs.json"
// //     })
// //         .done(function(response) {
// //             resolve(response.songs);
// //         })
// //         .fail(function(xhr, status, error) {
// //             reject(error);
// //         });

// // });
// // }
// // getMoreSongList()
// // .then(
// //     function(promiseResolutionData) {
// //         console.log($scope.songs);
// //         console.log(promiseResolutionData)
// //         $scope.songs = $scope.songs.concat(promiseResolutionData);
// //         console.log($scope.songs)
// //     },
// //     function(error) {
// //         console.log("error", error);
// //     });

// // }); //END OF APP CONTROLLER. WARNING. WARNING. UNEXPECTED END OF INPUT