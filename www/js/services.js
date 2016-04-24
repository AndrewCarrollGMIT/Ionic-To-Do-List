// Template on Moodle and Github Helped for Structure - Link : https://github.com/ianmcloughlin?tab=repositories
angular.module('starter.services', [])
// Factory Used to provide data to controller
.factory('Task', function() {
  
  var data = {
    tasks: [
     
    ]
  };
  // Function to call Work Task
  function addWorkItem(title) {
    data.tasks.push({title: title});
 }
    // Function to call Home Task
  function addHomeItem(title2) {
    data.tasks.push({title2: title2});
 }

    // Function to call Extra Task
    function addExtraItem(title3) {
    data.tasks.push({title3: title3});
 }
  
  return {
    data: data
    , addWorkItem: addWorkItem
      , addHomeItem: addHomeItem
      , addExtraItem: addExtraItem
  };
});
