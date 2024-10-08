const marksMass = 95;
const marksHeight = 1.88;
const johnsMass = 85;
const johnsHeight = 1.76;

const marksBmi = marksMass / marksHeight ** 2;
const johnsBmi = johnsMass / johnsHeight ** 2;

const markHigherBmi = marksBmi > johnsBmi;
console.log(marksBmi, johnsBmi);
console.log(markHigherBmi);

// if (markHigherBmi) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

if (marksBmi > johnsBmi) {
  console.log("mark's BMI is higher than John's!");
} else if (johnsBmi > marksBmi) {
  console.log("john's BMI is higher than Mark's!");
} else {
  control.log("john's BMI and Mark's BMI are equal");
}

// there are two gymnastics teams, Dolphins and pandels.
// they compete against eachother 3 times
// the winner with the highesst avarage score a trophy
//
// your task
// 1. calculate the avaerage score for each team

// test data
//   Data1: Dolphins score 96, 108 amd 89. pandas score 88, 91 and 110

// const team1 = "dolphins";
// const team2 = "pandels";

let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;

let pandelsScore1 = 88;
let pandelsScore2 = 91;
let pandelsScore3 = 110;

const totalDolphinsScore = dolphinsScore1 + dolphinsScore2 + dolphinsScore3;
const totalPandaScore = pandelsScore1 + pandelsScore2 + pandelsScore3;

const avgDolphin = totalDolphinsScore / 3;
const avgPanda = totalPandaScore / 3;

console.log(`Average dolphin score is ${avgDolphin}`);

console.log(`Average panda score is ${avgPanda}`);

if (avgDolphin > avgPanda) {
  console.log("Dolphins WIns ");
} else if (avgDolphin < avgPanda) {
  console.log("Panda Wins");
} else {
  console.log("This is a tie");
}

// if (avgDolphin > avgPanda && avgDolphin >= 100) {
//   console.log("Dolphins WIns ");
// } else if (avgDolphin < avgPanda && avgPanda >= 100) {
//   console.log("Panda Wins");
// } else {
//   console.log("No Winner");
// }

if (avgDolphin >= 100 && avgDolphin > avgPanda) {
  console.log("Dolphins wins ");
} else if (avgDolphin >= 100 && avgPanda > avgDolphin) {
  console.log("Panda Wins");
} else if (avgDolphin >= 100 && avgPanda >= 100 && avgDolphin === avgPanda) {
  console.log("This Is a Tie");
} else {
  console.log("NO WINNER");
}
