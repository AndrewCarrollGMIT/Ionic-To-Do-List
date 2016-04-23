// Template on Moodle and Github Helped for Structure - Link : https://github.com/ianmcloughlin?tab=repositories
angular.module('starter.services', [])
// Factory Used to provide data to controller
.factory('Task', function() {
  
  var data = {
    tasks: [
     
    ]
  };
  // Function to call Work Task
  function addTask(title) {
    data.tasks.push({title: title});
 }
    // Function to call Home Task
  function addTask2(title2) {
    data.tasks.push({title2: title2});
 }

    // Function to call Extra Task
    function addTask3(title3) {
    data.tasks.push({title3: title3});
 }
  
  return {
    data: data
    , addTask: addTask
      , addTask2: addTask2
      , addTask3: addTask3
  };
});
