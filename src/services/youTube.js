angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(q, callback) {
      // console.log(q)
      let options = {
        key: window.YOUTUBE_API_KEY,
        maxResults: 5,
        part: 'snippet',
        q: q || 'kittens',
        type: 'video',
        videoEmbeddable: true
      };
      
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: options                                                                                                                                                                                                                                                
      }).then(function successCallback(response) {
        callback(response.data.items);
      }, function errorCallback(response) {
        console.log(response);
      });
    };
  });
