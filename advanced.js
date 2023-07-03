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

//Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2023-this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 2000;
john.job   = "teacher";

var jane = Object.create(personProto, {
    name : { value: "John"},
    yearOfBirth: {value: 2000},
    job: {value: "teacher"}
});*/

// Primitives Vs Objects

//Primitives
var a = 15;
var b = a;
a = 26;
console.log(a, b);

var john = {
  name: "John",
  yearOfBirth: 1991,
  job: "Engineer",
};

//Objects
var jane = john;
jane.name = "Jane";
console.log(john);

//functions
var age = 27;

function change(a, b) {
  a = 30;
  b.job = "CEO";
}
change(age, john);
console.log(age, john);

//Passing functions as arguments

var years = [1991, 2002, 1998, 2011];

function arrCalc(arr, fn) {
  var arrResult = [];
  for (var i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]));
  }
  return arrResult;
}

function calculateAge(year) {
  return 2023 - year;
}

function isFullAge(age) {
  return age >= 18;
}

function maxHeartRate(age) {
  return Math.round(206.9 - 0.67 * age);
}

var ages = arrCalc(years, calculateAge);
var fullAges = arrCalc(ages, isFullAge);
console.log(ages, fullAges);
var heartRates = arrCalc(fullAges, maxHeartRate);
console.log(heartRates);
console.log(window.jane);
window.open("google.com");
