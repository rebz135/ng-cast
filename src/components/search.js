angular.module('video-player')
  .component('search', {
    bindings: {
      result: '<'
    },
 
    // controller: function() {
    //   this.result = function() {};
    // },
    
    template: `
    <div class="search-bar form-inline">
      <input class="form-control" type="text" ng-model="$ctrl.query" />
      <button class="btn" ng-click="$ctrl.result($ctrl.query)">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
    `
  });
