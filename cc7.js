var Question = function (question, options, answer) {
  this.question = question;
  this.options = options;
  this.answer = answer;
};

var questionOne = new Question(
  "JavaScript is the coolest language in the web",
  ["Yes", "No"],
  "Yes"
);
console.log(questionOne);
