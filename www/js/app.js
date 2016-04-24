
angular
  
.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.TaskList', {
    url: '/TaskList',
    views: {
      'tab-TaskList': {
        templateUrl: 'templates/tab-TaskList.html',
        controller: 'TasksCtrl'
      }
    }
  })

  .state('tab.createTask', {
    url: '/createTask',
    views: {
      'tab-createTask': {
        templateUrl: 'templates/tab-createTask.html',
        controller: 'AddTaskCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/TaskList');

});

