import censusData from "../data/uspop.json";

// todo: have a dataset that just contains the summary
// the census data does not change very often
// and you should not have to calculate it every time

let seats = 100;

// GENDER
let guys = censusData.filter((a) => a.SEX === 1);
let gals = censusData.filter((a) => a.SEX === 2);

let guys_pop = sumList(guys.map((g) => parseInt(g.POPESTIMATE2019)));
let gals_pop = sumList(gals.map((g) => parseInt(g.POPESTIMATE2019)));

// [{num: 20, color: blue, labels: [], name: democrats}, ]

let sum = gals_pop + guys_pop;

let guyPopNormal = Math.round((guys_pop / sum) * seats);
let galPopNormal = Math.round((gals_pop / sum) * seats);

while (galPopNormal + guyPopNormal > seats) {
  console.log(guyPopNormal);
  guyPopNormal--;
}

export const sexDataUS = [
  {
    num: guyPopNormal,
    color: "purple", // pull this from same place as in sen data
    name: "male",
  },
  {
    num: galPopNormal,
    color: "pink",
    name: "female",
  },
];

// sum list
function sumList(nums) {
  return nums.reduce(function (tot, next) {
    return tot + parseInt(next);
  }, 0);
}

let uniqueRaces = {};

// make this bit a function
censusData.forEach((state) => {
  let g = state.RACE;
  if (!(g in uniqueRaces)) {
    uniqueRaces[g] = parseInt(state.POPESTIMATE2019);
  } else {
    uniqueRaces[g] += parseInt(state.POPESTIMATE2019);
  }
});

let raceSum = sumList(Object.values(uniqueRaces));

console.log(uniqueRaces);

export const raceDataUS = [
  {
    name: "White",
    num: Math.round((uniqueRaces["1"] / raceSum) * seats),
    color: "blue",
  },
  {
    name: "African American",
    num: Math.round((uniqueRaces["2"] / raceSum) * seats),
    color: "red",
  },
  {
    name: "Native American",
    num: Math.round((uniqueRaces["3"] / raceSum) * seats),
    color: "yellow",
  },
  {
    name: "Asian American",
    num: Math.round((uniqueRaces["4"] / raceSum) * seats),
    color: "green",
  },
  {
    name: "Pacific Islander",
    num: Math.round((uniqueRaces["5"] / raceSum) * seats),
    color: "purple",
  },
  {
    name: "Multiple Races",
    num: Math.round((uniqueRaces["6"] / raceSum) * seats),
    color: "orange",
  },
];
