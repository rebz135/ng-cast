angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
      this.init = function() {
        this.searchResults();
      };
      
      this.searchResults = (q) => {
        let changeVideos = function(newVideos) {
          this.videos = newVideos;
          this.currentVideo = this.videos[0]; // refactor???
        }.bind(this);
        
        youTube.search(q, changeVideos);
      };
      
      this.selectVideo = function(video) {
        this.currentVideo = video;
      }.bind(this);
    },
  
    template: `
      <div id="app container" ng-init="$ctrl.init()">
        <nav class="navbar">
          <div class="col-md-6 col-md-offset-3">
            <search result="$ctrl.searchResults"><h5><em>search</em> component goes here</h5></search>
          </div>
        </nav>
        <div class="row">
          <div class="col-md-7">
            <video-player video="$ctrl.currentVideo"><h5><em>videoPlayer</em> component goes here</h5></video-player>
          </div>
          <div class="col-md-5">
            <video-list on-click="$ctrl.selectVideo" videos="$ctrl.videos"><h5><em>videoList</em> component goes here</h5></video-list>
          </div>
        <div>
      </div>`
  });
