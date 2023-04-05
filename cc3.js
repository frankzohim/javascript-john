var billOne = 124;
var billTow = 48;
var billthree = 268;
var bills = [billOne, billTow, billthree];
var billsTips = [];
bills.push(50);
bills.pop();
bills.unshift(41);
bills.shift();
console.log(bills);

function tipCalculator(bills, billsTips) {
  bills.forEach((element) => {
    if (element < 50) {
      billsTips.push(element + element * 0.2);
    } else if (element >= 50 && element < 200) {
      billsTips.push(element + element * 0.15);
    } else {
      billsTips.push(element + element * 0.1);
    }
  });
  console.log(billsTips);
}

console.log(tipCalculator(bills, billsTips));
