var tasks = [""];
var doneTasks = [];

function toDoList(task) {
  this.task = task;
}

toDoList.prototype.newTask = function(task1) {
  tasks.push(task1);
  return tasks;
}

toDoList.prototype.moveTask = function(task) {
  var index = tasks.indexOf(task);
  var removedItem = tasks.splice(index, index);
  removedItem = removedItem.join("")
  doneTasks.push(removedItem);
  return removedItem;
};

toDoList.prototype.moveBack = function(task) {
  var index = doneTasks.indexOf(task);
  var removedItem = doneTasks.splice(index, index);
  removedItem = removedItem.join("")
  tasks.push(removedItem);
  return removedItem;
};


toDoList.prototype.listTask = function(task) {
  var example = new toDoList(task)
  var newTasks = example.newTask(task)
  var text = "";
  for(var i = 1; i<=newTasks.length; i++){
    text += task;
    console.log(text)
    return text;
  };
};

$(document).ready(function() {
  $("form").submit(function (event) {
    var inputTask = $("input").val();
    var toDo = new toDoList(inputTask);
    $(".uncompleted").append("<li class='click'>" + toDo.listTask(inputTask) + "</li>");

    $(".click").last().click(function () {
          $(".completed").append("<li class='click2'>" + toDo.moveTask(inputTask) + "</li>");
          $(this).hide();
    });

    $(".click2").last().click(function () {
          $(".completed").append("<li class='click'>" + toDo.moveBack(inputTask) + "</li>");
          $(this).hide();
    });
    event.preventDefault();
  });

});
