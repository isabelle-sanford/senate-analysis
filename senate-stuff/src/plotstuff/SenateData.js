import senData from "../data/senators.json";

// [{num: 20, color: blue, labels: [], name: democrats}, ]

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
