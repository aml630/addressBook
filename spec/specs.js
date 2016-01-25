
describe("addressBook", function () {

  it("will list first name, last name, favorite colors, and age", function (){

    var contact1 = new Slimeball("Alex", "Larson", ["blue", "periwinkle"], 18);

    expect(contact1.firstName).to.equal("Alex");
    expect(contact1.lastName).to.equal("Larson");
    expect(contact1.favoriteColours).to.eql(["blue", "periwinkle"]);
    expect(contact1.age).to.equal(18);
  });

  it("will print out the full name", function () {
      var contact1 = new Slimeball("John", "Johnson", ["red", "pink"], 19);
    expect(contact1.fullName()).to.equal("John Johnson");
  });



});
