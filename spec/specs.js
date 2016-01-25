describe("toDoList", function() {
  it("will add a task to the user's to do list", function() {
    var itemList = new Todo("vacuum");
    expect(itemList).to.equal("vacuum")
  });
});
