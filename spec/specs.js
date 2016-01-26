describe("Todo", function() {
  it("will add a task to the user's to do list", function() {
    var itemList = new Todo("dust");
    expect(itemList.task).to.equal("dust");
  });
});
