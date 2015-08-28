var app = angular.module("SongsApp", ['ngRoute', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongCtrl'
    }).
      when('/songs/new', {
      templateUrl: 'partials/song-form.html',
      controller: 'SongFormCtrl'
    }).
      when('/songs/:songId', {
      templateUrl: 'partials/song-detail.html',
      controller: 'SongDetailCtrl'
    }).
    otherwise({
      redirectTo: '/songs'
  });
}]);