var john = {
  name: "John",
  yearOfBirth: 1991,
  job: "Engineer",
};

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  console.log(2023 - this.yearOfBirth);
};

Person.prototype.lastName = "Fofe";

var mike = new Person("Mike", 1992, "Pilote");
var jane = new Person("Jane", 1985, "Retire");
var aicha = new Person("Aicha", 1974, "CEO");

mike.calculateAge();
aicha.calculateAge();
jane.calculateAge();

console.log(mike.lastName);
console.log(jane.lastName);
console.log(aicha.lastName);
