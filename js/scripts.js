function Slimeball(firstName, lastName, favoriteColours, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColours = favoriteColours;
  this.age = age;
}

Slimeball.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

console.log(Slimeball)
$(document).ready(function() {


})
