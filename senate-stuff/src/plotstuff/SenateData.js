import senData from "../data/senators.json";
import { sumList } from "./CensusData";

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
  { party: "Democrat", population: democratRep, color: "blue" },
  { party: "Republican", population: republicanRep, color: "red" },
];

// split representation into two traces, 1/state
// format: list of objects {x: xdata, y: ydata, color: blue, text: labels}
let trace1 = { x: [], y: [], color: [], text: [] };
let trace2 = { x: [], y: [], color: [], text: [] };

let colordict = {
  Republican: "red",
  Democratic: "blue",
  Vacant: "black",
  Independent: "gray",
};

senData.forEach((sen) => {
  let n = 1;
  if (trace1["x"].includes(sen.state)) {
    n = 2;
  }

  if (n === 1) {
    trace1["x"].push(sen.state); // todo: use state abbrevs
    trace1["y"].push(sen.population / 2);
    trace1["color"].push(colordict[sen.party]);
    trace1["text"].push(sen.senator);
  } else {
    trace2["x"].push(sen.state);
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

export const sexData = [
  {
    name: "male",
    num: uniqueGenders["1"].length,
    color: "purple",
    labels: uniqueGenders["1"].map((sen) => sen.senator),
  },
  {
    name: "female",
    num: uniqueGenders["2"].length,
    color: "salmon",
    labels: uniqueGenders["2"].map((sen) => sen.senator),
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
    num: uniqueRaces["1"].length,
    color: "blue",
    labels: uniqueRaces["1"].map((sen) => sen.senator),
  },
  {
    name: "African American",
    num: uniqueRaces["2"].length,
    color: "red",
    labels: uniqueRaces["2"].map((sen) => sen.senator),
  },
  // {
  //   name: "yellow",
  //   num: uniqueRaces["3"].length,
  //   color: "yellow",
  //   labels: uniqueRaces["3"].map((sen) => sen.senator),
  // },
  {
    name: "Asian American",
    num: uniqueRaces["4"].length,
    color: "green",
    labels: uniqueRaces["4"].map((sen) => sen.senator),
  },
  // {
  //   name: "???",
  //   num: uniqueRaces["5"].length,
  //   color: "purple",
  //   labels: uniqueRaces["5"].map((sen) => sen.senator),
  // },
  // {
  //   name: "???",
  //   num: uniqueRaces["6"].length,
  //   color: "orange",
  //   labels: uniqueRaces["6"].map((sen) => sen.senator),
  // },
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
    labels: uniqueReligions[religion].map((sen) => sen.senator),
  };

  religHolder.push(currDict);
}

export const religData = religHolder;
