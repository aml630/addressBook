var tasks = []

function toDoList(task) {
  this.task = task
}

toDoList.prototype.newTask = function(task) {
  tasks.push(task)
  console.log(tasks)
  return tasks
}


$(document).ready(function() {

});
