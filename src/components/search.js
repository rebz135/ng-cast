angular.module('video-player')
  .component('search', {
    bindings: {
      result: '<'
    },
 
    template: `
    <div class="search-bar form-inline">
      <input class="form-control" type="text" ng-model="$ctrl.query" ng-model-options="{debounce: 500}" ng-change="$ctrl.result($ctrl.query)" />
      <button class="btn" ng-click="$ctrl.result($ctrl.query)" >
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
    `
  });
