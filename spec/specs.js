
describe("toDoList", function () {
    var firstItem = new toDoList("Clean")
  it("will allow user to add a task to a list of tasks", function (){
    expect(firstItem.task).to.equal("Clean");
    expect(firstItem.newTask("Clean")).to.eql(["","Clean"]);
    expect(firstItem.listTask(["Clean", "Mop"])).to.equal("Clean,Mop")
  });

  it("will move one item from tasks array to doneTasks array", function() {
    expect(firstItem.moveTask("Clean")).to.equal("Clean");
  });

  it("will move one item from doneTasks array to tasks array", function() {
    expect(firstItem.moveBack("Clean")).to.equal("Clean");
  });
});
