
angular
  
.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.toDoList', {
    url: '/toDoList',
    views: {
      'tab-toDoList': {
        templateUrl: 'templates/tab-toDoList.html',
        controller: 'TasksCtrl'
      }
    }
  })

  .state('tab.addedTasks', {
    url: '/addedTasks',
    views: {
      'tab-addedTasks': {
        templateUrl: 'templates/tab-addedTasks.html',
        controller: 'AddTaskCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/toDoList');

});

