function Slimeball(firstName, lastName, favoriteColours, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColours = favoriteColours;
  this.age = age;
}

Slimeball.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Slimeball.prototype.isAge = function() {
  return this.fullName() + " is " + this.age + " years old";
}

$(document).ready(function() {


});
