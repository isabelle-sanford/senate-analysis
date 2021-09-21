import * as React from "react";
// import {
//   Nav,
//   Navbar,
//   Row,
//   Col,
//   ListGroup,
//   Tabs,
//   Tab,
//   Image,
// } from "react-bootstrap";
import Plot from "react-plotly.js";

export function BarPlot(
  x: number[],
  y: number[],
  title: any,
  colors: string[]
): any {
  return (
    <Plot
      data={[
        {
          x: x,
          y: y,
          type: "bar",
          marker: { color: colors },
        },
        { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
      ]}
      layout={{
        title: title,
        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",
      }}
    />
  );
}

// todo: take a senate and a US dataset so in same plot?

// note: consider adding 'size' variable if we can get coords for diff sizes
// Input should be list [{num: 20, color: blue, labels: [], name: democrats}, ]
export function ChamberPlot(data: any, title: string) {
  let [r, theta] = coords(false);

  let i: number = 0;

  let someData = data.data;

  let dataList: any[] = someData.map((d: any) => {
    let r_part = r.slice(i, i + d.num);
    let theta_part = theta.slice(i, i + d.num);

    i += d.num;

    return {
      r: r_part,
      theta: theta_part,
      mode: "markers",
      hoverinfo: "text",
      text: d.labels,
      type: "scatterpolar",

      name: d.name,
      marker: {
        color: d.color,
        size: 10,
      },
    };
  });
  //console.log(dataList);

  return (
    <Plot
      data={dataList}
      layout={{
        showlegend: true,
        title: data.title, // >:(
        polar: {
          sector: [-10, 190],
          hole: 0.2,
          radialaxis: {
            visible: false,
          },
          angularaxis: {
            visible: false,
          },
          bgcolor: "transparent",
        },
        paper_bgcolor: "transparent",
        margin: {
          l: 0,
          r: 0,
        },
      }}
    />
  );
}

// yeah I just copied this from the old version sorry
// ONLY works for exactly 100 seats
function coords(bool: boolean) {
  // Get coordinate lists - rep is right, dem is left
  let rep_theta = [];
  let dem_theta = [];
  let rads = [];

  // I'm sorry
  for (let a = 0; a < 13; a++) {
    for (let r = Math.max(10, 2 * (a - 2)); r < 20; r += 2) {
      let rad = r + 1;
      let theta_R = (a * 90) / (r / 2 + 2) - 5;
      let theta_D = 180 - theta_R;

      rep_theta.push(theta_R);
      dem_theta.push(theta_D);
      rads.push(rad);
    }
  }

  let theta = rep_theta.concat(dem_theta.reverse());

  let rads2 = [...rads];
  rads2.reverse();
  let all_rads = rads.concat(rads2);

  if (bool) {
    return [rads, rep_theta, dem_theta.reverse()];
  } else {
    return [all_rads, theta.reverse()];
  }
}
