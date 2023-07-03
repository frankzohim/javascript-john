/*var john = {
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
console.log(aicha.lastName);*/
//IIFE

/*function games() {
  var score = Math.floor(Math.random() * 10);
  console.log(score > 5);
}

(function (goodLuck) {
  var score = Math.floor(Math.random() * 10);
  console.log(score > 5 - goodLuck);
})(10);*/

//Bind, call & apply methods
var john = {
  name: "John",
  age: 28,
  job: "Engineer",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          " My name is " +
          this.name +
          " I'm a " +
          this.job +
          " and i'm " +
          this.age
      );
    } else if (style === "friendly") {
      console.log(
        "Hey what's up? " +
          " I'm " +
          this.name +
          " I'm a " +
          this.job +
          " I'am " +
          this.age +
          " have a nice " +
          timeOfDay
      );
    }
  },
};

var emily = {
  name: "Emily",
  age: 25,
  job: "Designer",
};
/*emily.presentation = john.presentation;
emily.presentation("friendly", "evening");*/

john.presentation("friendly", "Morning");
john.presentation.call(emily, "formal", "afternoon");

//Apply use array
john.presentation.apply(emily, ["formal", "afternoon"]);

//Bind
var johnComplete = john.presentation.bind(john, "friendly", "afternoon");
johnComplete();

var johnFormal = john.presentation.bind(john, "formal");
johnFormal("morning");
