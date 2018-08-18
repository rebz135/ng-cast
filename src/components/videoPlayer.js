angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    
    bindings: {
      current: '<'
    },
    
    
    template: `
      <div class="video-player">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1w8Z0UOXVaY" allowFullScreen></iframe>
        </div>
        <div class="video-player-details">
          <h3>{{$ctrl.current.snippet.title}}</h3>
          <div>Video Description</div>
        </div>
      </div>
    `
  });