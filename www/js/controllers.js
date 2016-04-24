//Controller Template on Moodle and Github Helped for Structure - Link : https://github.com/ianmcloughlin?tab=repositories
angular.module('starter.controllers', [])
// Task Controller
.controller('TasksCtrl', function($scope, Task) {
  $scope.data = Task.data;

})
// Controller For New Task
.controller('AddTaskCtrl', function($scope, Task) {
  var data= {
    newTask: ""
  };
	
	 
	
	 
 // add Tasks to Work Category
  function addWorkItem() {
    Task.addWorkItem(data.newTask);
    data.newTask = "";
  }
    //add Tasks to Home Category
   function addHomeItem() {
    Task.addHomeItem(data.newTask);
    data.newTask = "";
 }
     //add Tasks to Extra Category
    function addExtraItem() {
    Task.addExtraItem(data.newTask);
    data.newTask = "";
  }
  
  $scope.data = data;
	
  $scope.addWorkItem = addWorkItem;
    $scope.addHomeItem = addHomeItem;
    $scope.addExtraItem = addExtraItem;
})

;