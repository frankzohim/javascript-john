var johnBills = {
  bills: [124, 48, 268, 180, 42],
  calculateTips: function () {
    this.tips = [];
    this.billsTips = [];
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 50) {
        this.tips[i] = this.bills[i] * 0.2;
        this.billsTips[i] = this.bills[i] + this.bills[i] * 0.2;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        this.tips[i] = this.bills[i] * 0.15;
        this.billsTips[i] = this.bills[i] + this.bills[i] * 0.15;
      } else {
        this.tips[i] = this.bills[i] * 0.1;
        this.billsTips[i] = this.bills[i] + this.bills[i] * 0.1;
      }
    }
  },
};

johnBills.calculateTips();

console.log(johnBills.tips);
console.log(johnBills.billsTips);

var markBills = {
  bills: [77, 375, 110, 45],
  calculateTips: function () {
    this.tips = [];
    this.billsTips = [];
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 100) {
        this.tips[i] = this.bills[i] * 0.2;
        this.billsTips[i] = this.bills[i] + this.bills[i] * 0.2;
      } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
        this.tips[i] = this.bills[i] * 0.1;
        this.billsTips[i] = this.bills[i] + this.bills[i] * 0.1;
      } else {
        this.tips[i] = this.bills[i] * 0.25;
        this.billsTips[i] = this.bills[i] + this.bills[i] * 0.25;
      }
    }
  },
};

markBills.calculateTips();
console.log(markBills.tips);
console.log(markBills.billsTips);

function tipsAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
}

var markTips = tipsAverage(markBills.tips);
var johnTips = tipsAverage(johnBills.tips);
if (markTips > johnTips) {
  console.log(
    "Marks tips : " + markTips + " is higher than John tips : " + johnTips
  );
} else if (johnTips > markTips) {
  console.log(
    "John tips : " + johnTips + " is higher than Mark tips : " + MarkTips
  );
} else {
  console.log("tips are equal");
}
console.log(markTips, johnTips);
