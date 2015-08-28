app.factory("song-storage", function($q, $http) {

  function getSongList() {

    return $q(function(resolve, reject) {
      $http.get('./data/songs.json').success(function(objectFromJSONFile) {
        resolve(objectFromJSONFile.songs);
    }, function(error) {
      reject(error);
    }
  );

});
}

return getSongList();
});