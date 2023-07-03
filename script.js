/******************************
 * Variable and data types
 */
/*var firstName = "Frank";
var lastName = "Zohim";
var age = 32;
var fullAge = true;
var job;
var $djbv = 125;
console.log(job);
console.log(firstName);
console.log(age);
console.log(fullAge);*/

/******************************
 Variable mutation & type coercion*/

/*var firstName = "Frank Zohim";
var age = 32;

//Type coercion
console.log(firstName + " " + age);
console.log(age);
var numberOne = 12;
var numberTwo = "14";
var numberThree = numberOne - numberTwo;
console.log(numberThree);

var job, isMarried;
job = "Engineer";
isMarried = true;

console.log(
  firstName + " is a " + age + " years old, he is an " + job + " " + isMarried
);

//Variable mutation
age = "thirty two";
console.log(age);
var lastName = prompt("Whats is your last name");

console.log(firstName + " " + lastName);
var spouseName = firstName;
console.log(spouseName);*/

/******************************
 * Basics Operators
 *
 */
var frankYear = 31;
var donaldYear = 38;
console.log(typeof frankYear);
console.log(donaldYear < frankYear);
console.log(donaldYear > frankYear);
console.log(typeof (frankYear == donaldYear));

/******************************
 * Operators precedence
 *
 * */
var now = 2018;
var frankYear = 1991;
var fullAge = 18;
var isFullAge = now - frankYear >= fullAge;
console.log(isFullAge);
console.log(typeof isFullAge);

//Multiple assigements
var x, y;
x = 3 + 5 * 4 - 6;
console.log(x);
y = 1 >= 5 == false;
console.log(y);
var z = ((14 * 12) / 2) % 2;
var k = 14 + 25 / 10;
console.log(k);
x--;
console.log(x);

/******************************
 * Boolean Logic
 *
 * */

/*var firstName = "Frank Zohim";
var age = 36;
if (age < 13) {
  console.log(firstName + "is a boy");
} else if (age > 13 && age < 18) console.log(firstName + "is a teenager");
else if (age >= 18 && age < 30) console.log(firstName + "is a young man");
else console.log(firstName + "is a man");

console.log(typeof firstName);*/

/******************************
 * Functions
 *
 * */

/*function calculteAge(birthYear) {
  return 2023 - birthYear;
}

console.log(calculteAge(2000));

function yearsUntilRetirement(birthYear, firstName) {
  var age = calculteAge(birthYear);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " Retires in " + retirement + " years");
  } else {
    console.log("Already Retires");
  }
}

yearsUntilRetirement(1958, "Frank Zohim", "hello");*/

/******************************
 * Functions Statements and expressions
 *
 * */

//Function statement
/*function whatDoYouDo1(job, firstName) {}

//Function expression
var whatDoYouDo = function (job, firstName) {
  return firstName + " works as " + job;
};

console.log(whatDoYouDo("Engineer", "Frank"));*/

/******************************
 * FArrays
 *
 * */

/*var names = ["Frank", "Camille", "Mael", "Emerick"];
console.log(names);
names.push("Merlin");
names.unshift("Leo");
names.pop();
names.shift();
console.log(names);

var years = new Array(2013, 2023, 2042);
console.log(years);
var calculteAge = function (birthYear) {
  return 2023 - birthYear;
};
var randomData = [true, "Hello World", 14, null, undefined, calculteAge(2005)];
console.log(randomData);*/

/******************************
 * Objects & properties
 *
 * */
/*var person = {
  firstName: "Frank",
  birthYear: 1991,
  job: "Engineer",
  isMarried: true,
  childreen: ["Melkisedek", "Michael"],
  calculateAge: function (birthYear) {
    return 2023 - birthYear;
  },
};

person.job = "CEO";
//console.log(person);
console.log(person.calculateAge(1991));*/
/******************************
 * Loops & Iterationss
 *
 * */

/******************************
 * this keyword
 *
 * */
//console.log(this);

var frank = {
  fullName: "Fofe Zohim Franklin",
  birthYear: 1991,
  calculateAge: function () {
    console.log(this);
    console.log(2016 - this.birthYear);
    /*function innerFunction() {
      console.log(this);
    }
    innerFunction();*/
  },
};
frank.calculateAge();

var mike = {
  name: "Mike",
  birthYear: 1984,
};

mike.calculateAge = frank.calculateAge;
mike.calculateAge();

var age = 140;

 
console.log(typeof aVariable);
