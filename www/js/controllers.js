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
  function addTask() {
    Task.addTask(data.newTask);
    data.newTask = "";
  }
    //add Tasks to Home Category
   function addTask2() {
    Task.addTask2(data.newTask);
    data.newTask = "";
 }
     //add Tasks to Extra Category
    function addTask3() {
    Task.addTask3(data.newTask);
    data.newTask = "";
  }
  
  $scope.data = data;
	
  $scope.addTask = addTask;
    $scope.addTask2 = addTask2;
    $scope.addTask3 = addTask3;
})

;