var mark = {
  fullName: "Mark",
  mass: 92,
  height: 1.6,
  calculateBMI: function () {
    this.BMI = this.mass / Math.pow(this.height, 2);
    return this.BMI;
  },
};

console.log("Mark BMI is " + mark.calculateBMI());

var john = {
  fullName: "john",
  mass: 140,
  height: 1.6,
  calculateBMI: function () {
    this.BMI = this.mass / Math.pow(this.height, 2);
    return this.BMI;
  },
};

console.log("John BMI is " + john.calculateBMI());

if (mark.BMI > john.BMI) {
  console.log(mark.fullName + " BMI is highest than " + john.fullName);
} else if (mark.BMI < john.BMI) {
  console.log(john.fullName + " BMI is highest than " + mark.fullName + " BMI");
} else console.log("They both have the same BMI");
