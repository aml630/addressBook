function Slimeball(firstName, lastName, favoriteColours, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColours = favoriteColours;
  this.age = age;
}

Slimeball.prototype.fullName = function() {
  return  "<span class = 'link'>" + this.firstName + " " + this.lastName + "</span>";
}

Slimeball.prototype.isAge = function() {
  return this.fullName() + " is " + this.age + " years old and their favorite colors are" + this.favoriteColours;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var input1 = $("#firstNameInput").val();
    var input2 = $("#lastNameInput").val();
    var input3 = $("#favoriteColoursInput").val();
    var input4 = $("#ageInput").val();
    var newPerson = new Slimeball(input1, input2, input3, input4);

    $(".firstNameSpan").append(newPerson.fullName());
    $(".lastNameSpan").append(newPerson.isAge());
    $(".firstNameSpan").click(function () {
      $(".lastNameSpan").show();
    })
    console.log(newPerson.firstName);
    event.preventDefault();

  });


});
