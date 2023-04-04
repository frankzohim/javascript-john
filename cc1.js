var markMass = 15;
var markHeight = 50;

var johnMass = 20;
var johnHeight = 45;

var markBMI = markMass / Math.pow(markHeight, 2);

var johnBMI = johnMass / Math.pow(johnHeight, 2);

if (johnBMI > markBMI) console.log("John's BMI higher than mark's BMI");
else console.log("Mark's BMI is higher than John BMI");
