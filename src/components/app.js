angular.module('video-player')

.component('app', {
  controller: function(){
    this.init = function() {
      this.searchYouTube();

    };
    
    this.searchYouTube = () => {
    }

    this.selectVideo = () => {
    }
    
    this.searchResults = () => {
    }

    this.currentVideo = {};

    this.videos = window.exampleVideoData;
    
    this.onClick = function(video){
      this.currentVideo = video;
      console.log(this.currentVideo);
      debugger
      
    }
  },
  
  template: `
    <div id="app container" ng-init="$ctrl.init()">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search><h5><em>search</em> component goes here</h5></search>
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player current="$ctrl.currentVideo"><h5><em>videoPlayer</em> component goes here</h5></video-player>
        </div>
        <div class="col-md-5">
          <video-list on-click="$ctrl.onClick" videos="$ctrl.videos"><h5><em>videoList</em> component goes here</h5></video-list>
        </div>
      <div>
    </div>`
  
});
