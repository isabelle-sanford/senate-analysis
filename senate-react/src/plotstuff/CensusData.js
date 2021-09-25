import sexData from "../data0/sex0.json";
import raceData from "../data0/race0.json";
import {
  MALE,
  FEMALE,
  WHITE,
  AFRICAN_AMERICAN,
  ASIAN_AMERICAN,
  NATIVE_AMERICAN,
  PACIFIC_ISLANDER,
  MULITPLE_RACES,
} from "../Info";

let seats = 100;

// GENDER
// let guys = censusData.filter((a) => a.SEX === 1);
// let gals = censusData.filter((a) => a.SEX === 2);

// let guys_pop = sumList(guys.map((g) => parseInt(g.POPESTIMATE2019)));
// let gals_pop = sumList(gals.map((g) => parseInt(g.POPESTIMATE2019)));

// [{num: 20, color: blue, labels: [], name: democrats}, ]

// let sum = gals_pop + guys_pop;
let guys_perc = sexData.perc_men / 100;
let gals_perc = sexData.perc_women / 100; // hmm. best to just output fraction of 1, not 100?

let guyPopNormal = Math.round(guys_perc * seats);
let galPopNormal = Math.round(gals_perc * seats);

while (galPopNormal + guyPopNormal > seats) {
  console.log(guyPopNormal);
  guyPopNormal--;
}

export const sexDataUS = [
  {
    num: guyPopNormal,
    color: MALE, // pull this from same place as in sen data
    name: "male",
  },
  {
    num: galPopNormal,
    color: FEMALE,
    name: "female",
  },
];

// sum list
export function sumList(nums) {
  return nums.reduce(function (tot, next) {
    return tot + parseInt(next);
  }, 0);
}

//let uniqueRaces = {};

// // make this bit a function
// censusData.forEach((state) => {
//   let g = state.RACE;
//   if (!(g in uniqueRaces)) {
//     uniqueRaces[g] = parseInt(state.POPESTIMATE2019);
//   } else {
//     uniqueRaces[g] += parseInt(state.POPESTIMATE2019);
//   }
// });

// let raceSum = sumList(Object.values(uniqueRaces));

// console.log(uniqueRaces);

export const raceDataUS = [
  {
    name: "White",
    num: Math.round((raceData["white"] / 100) * seats),
    color: WHITE,
  },
  {
    name: "African American",
    num: Math.round((raceData["black"] / 100) * seats),
    color: AFRICAN_AMERICAN,
  },
  {
    name: "Hispanic or Latino",
    num: Math.round((raceData["hispanic"] / 100) * seats),
    color: "pink", // set color!!
  },
  {
    name: "Native American",
    num: Math.round((raceData["indigenous"] / 100) * seats),
    color: NATIVE_AMERICAN,
  },
  {
    name: "Asian American",
    num: Math.round((raceData["asian"] / 100) * seats),
    color: ASIAN_AMERICAN,
  },
  {
    name: "Hawaiian/Pacific Islander",
    num: Math.round((raceData["hawaiian"] / 100) * seats),
    color: PACIFIC_ISLANDER,
  },
  {
    name: "Other Race",
    num: Math.round((raceData["other"] / 100) * seats),
    color: "bluegreen",
  },
  {
    name: "Multiple Races",
    num: Math.round((raceData["multiple"] / 100) * seats),
    color: MULITPLE_RACES,
  },
];

// 1790 CENSUS-----------------------------
// ORIGINAL COLONIES
let colonies_data = [
  //{state: "Vermont", pop: 22435},
  { state: "New Hampshire", pop: 36086 },
  //{state: "Maine", pop: 24384},
  { state: "Massachusetts", pop: 95453 },
  { state: "Rhode Island", pop: 16019 },
  { state: "Connecticut", pop: 60523 },
  { state: "New York", pop: 83700 },
  { state: "New Jersey", pop: 45251 },
  { state: "Pennsylvania", pop: 110788 },
  { state: "Delaware", pop: 11783 },
  { state: "Maryland", pop: 55915 },
  { state: "Virginia", pop: 110936 },
  //{state: "Kentucky", pop: 15154},
  { state: "N. Carolina", pop: 69988 },
  { state: "S. Carolina", pop: 35576 },
  { state: "Georgia", pop: 13103 },
];

export const colonyData = colonies_data.sort((a, b) => b.pop - a.pop);
