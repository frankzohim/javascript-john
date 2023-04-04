var johnTeamAverage = (100 + 120 + 103) / 3;
var markTeamAverage = (100 + 120 + 103) / 3;
var maryTeamAverage = (100 + 120 + 103) / 3;

if (johnTeamAverage > markTeamAverage) {
  console.log("John is the winner with " + johnTeamAverage + " Score");
} else if (johnTeamAverage < markTeamAverage) {
  console.log("Mark is the winner with " + markTeamAverage + " Score");
} else {
  console.log("There is a draw");
}

if (johnTeamAverage > markTeamAverage && johnTeamAverage > maryTeamAverage)
  console.log("John is the winner with " + johnTeamAverage + " Score");
else if (markTeamAverage > johnTeamAverage && markTeamAverage > maryTeamAverage)
  console.log("Mark is the winner with " + markTeamAverage + " Score");
else if (maryTeamAverage > markTeamAverage && maryTeamAverage > johnTeamAverage)
  console.log("Mary is the winner with " + maryTeamAverage + " Score");
else {
  console.log("There is a draw");
}
