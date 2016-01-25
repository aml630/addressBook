
describe("toDoList", function () {
  it("will allow user to add tasks to a list of tasks", function (){
    var firstItem = new toDoList("Clean")
    expect(firstItem.task).to.equal("Clean");
    expect(firstItem.newTask("Clean")).to.eql(["Clean"])

  });

});
