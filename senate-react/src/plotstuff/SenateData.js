import senData from "../data0/senators0.json";
import { sumList } from "./CensusData";
import {
  myRed,
  myBlue,
  MALE,
  FEMALE,
  WHITE,
  AFRICAN_AMERICAN,
  ASIAN_AMERICAN,
} from "../Info";

// [{num: 20, color: blue, labels: [], name: democrats}, ]

// partisan representation divide
// todo: stop relying on specific party names
// and don't automatically loop independents into Dems
let republicanPop = senData
  .filter((sen) => sen.party === "Republican")
  .map((sen) => sen.population);
let democratPop = senData
  .filter((sen) => sen.party !== "Republican") // Ew no
  .map((sen) => sen.population);

let republicanRep = sumList(republicanPop) / 2; // bc senator only represents half a state pop
let democratRep = sumList(democratPop) / 2;

export const representationNums = [
  { party: "Democrat", population: democratRep, color: myBlue },
  { party: "Republican", population: republicanRep, color: myRed },
];

// split representation into two traces, 1/state
// format: list of objects {x: xdata, y: ydata, color: blue, text: labels}
let trace1 = { x: [], y: [], color: [], text: [] };
let trace2 = { x: [], y: [], color: [], text: [] };

let colordict = {
  Republican: myRed,
  Democratic: myBlue,
  Vacant: "black",
  Independent: "gray",
};

senData.forEach((sen) => {
  let n = 1;
  if (trace1["x"].includes(sen.state)) {
    n = 2;
  }

  if (n === 1) {
    trace1["x"].push(sen.abbrev);
    trace1["y"].push(sen.population / 2);
    trace1["color"].push(colordict[sen.party]);
    trace1["text"].push(sen.senator);
  } else {
    trace2["x"].push(sen.abbrev);
    trace2["y"].push(sen.population / 2);
    trace2["color"].push(colordict[sen.party]);
    trace2["text"].push(sen.senator);
  }
});

export const stackedData = [trace1, trace2];

// GENDER--------------------------------------------------------------

let uniqueGenders = {};

// make this bit a function
senData.forEach((sen) => {
  let g = sen.gender;
  if (!(g in uniqueGenders)) {
    uniqueGenders[g] = [sen];
  } else {
    uniqueGenders[g].push(sen);
  }
});

console.log(uniqueGenders);

export const sexData = [
  {
    name: "male",
    num: uniqueGenders["Male"].length,
    color: MALE,
    labels: uniqueGenders["Male"].map((sen) => sen.senator),
  },
  {
    name: "female",
    num: uniqueGenders["Female"].length,
    color: FEMALE,
    labels: uniqueGenders["Female"].map((sen) => sen.senator),
  },
];

// RACE----------------------------------------------------------------

let uniqueRaces = {};

senData.forEach((sen) => {
  let g = sen.race;
  if (!(g in uniqueRaces)) {
    uniqueRaces[g] = [sen];
  } else {
    uniqueRaces[g].push(sen);
  }
});

export const raceData = [
  {
    name: "White",
    num: uniqueRaces["White"].length,
    color: WHITE,
    labels: uniqueRaces["White"].map((sen) => sen.senator),
  },
  {
    name: "African American",
    num: uniqueRaces["Black"].length,
    color: AFRICAN_AMERICAN,
    labels: uniqueRaces["Black"].map((sen) => sen.senator),
  },
  {
    name: "Asian American",
    num: uniqueRaces["Asian American"].length,
    color: ASIAN_AMERICAN,
    labels: uniqueRaces["Asian American"].map((sen) => sen.senator),
  },
  {
    name: "Hispanic or Latino",
    num: uniqueRaces["Hispanic or Latino"].length,
    color: "pink",
    labels: uniqueRaces["Hispanic or Latino"].map((sen) => sen.senator),
  },
];

let protestantList = [
  "Congregationalist",
  "Episcopalian",
  "Presbyterian",
  "Evangelical",
  "Protestant",
  "Baptist",
  "Lutheran",
  "Methodist",
  "Restorationist",
  "Quaker",
  "Holiness",
];

// RELIGION------------------------------------------------------------

let uniqueReligions = { Protestant: [] };

senData.forEach((sen) => {
  let g = sen.religion;

  if (protestantList.includes(g)) {
    uniqueReligions["Protestant"].push(sen);
  } else if (!(g in uniqueReligions)) {
    uniqueReligions[g] = [sen];
  } else {
    uniqueReligions[g].push(sen);
  }
});

let religHolder = [];

for (const religion in uniqueReligions) {
  let currDict = {
    name: religion,
    num: uniqueReligions[religion].length,
    labels: uniqueReligions[religion].map(
      (sen) => `${sen.senator} (${sen.religion})`
    ),
  };

  religHolder.push(currDict);
}

export const religData = religHolder;
