angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    
    bindings: {
      video: '<'
    },
    
    
    template: `
      <div class="video-player">
        <div class="embed-responsive embed-responsive-16by9" ng-switch="$ctrl.video">
          <iframe class="embed-responsive-item" ng-switch-default ng-src="{{'https://www.youtube.com/embed/'+$ctrl.video.id.videoId}}" allowFullScreen></iframe>
          <div ng-switch-when="undefined">Please wait</div>
        </div>
        <div class="video-player-details">
          <h3>{{$ctrl.video.snippet.title}}</h3>
          <div>{{$ctrl.video.snippet.description}}</div>
        </div>
      </div>
    `
  });