import * as React from "react";

import Plot from "react-plotly.js";

export function BarPlot(props: any): any {
  return (
    <Plot
      data={[
        {
          x: props.x,
          y: props.y,
          type: "bar",
          marker: { color: props.colors },
        },
      ]}
      layout={{
        title: props.title,
        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",
        autosize: false,
        width: props.width,
      }}
    />
  );
}

// todo: take a senate and a US dataset so in same plot?

// note: consider adding 'size' variable if we can get coords for diff sizes
// Input should be list [[{num: 20, color: blue, labels: [], name: democrats}, ], [trace 2]]
// todo: have input an object with key as title (maybe put title in middle of chamber?)
export function ChamberPlot(props: any) {
  let [r, theta] = coords(false);

  let fullData: any[] = [];

  for (let j = 0; j < props.data.length; j++) {
    let i: number = 0;

    let someData = props.data[j];

    someData.forEach((d: any) => {
      let r_part = r.slice(i, i + d.num);
      let theta_part = theta.slice(i, i + d.num);

      i += d.num;

      let currdata = {
        r: r_part,
        theta: theta_part,
        mode: "markers",
        hoverinfo: "text",
        text: d.labels,
        type: "scatterpolar",

        name: d.name,
        legendgroup: d.name,
        showlegend: j > 0 ? false : true,
        marker: {
          color: d.color,
          size: 12,
        },

        subplot: "polar" + (j > 0 ? j + 1 : ""),
      };
      fullData.push(currdata);
    });
  }

  //console.log(dataList);

  return (
    <Plot
      data={fullData}
      layout={{
        showlegend: true,
        title: props.title, // >:(
        paper_bgcolor: "white",
        width: props.width || 1300,
        margin: {
          l: 0,
          r: 150,
        },
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

        polar2: {
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

// format: list of objects {x: xdata, y: ydata, color: blue, text: labels}
export function StackedBarPlot(data: any, title: string) {
  let traces: any[] = data.data.map((d: any) => {
    // whyyy
    return {
      x: d.x,
      y: d.y,
      marker: {
        color: d.color,
      },
      type: "bar",
      hovertext: d.text,
    };
  });

  return (
    <Plot
      data={traces}
      layout={{
        title: title,
        showlegend: false,
        barmode: "stack",
        xaxis: {
          categoryorder: "total descending", // CF
        },
        // TODO: add hovertext to dividing line
        shapes: [
          {
            type: "line",
            x0: 8.5,
            y0: 0,
            x1: 8.5,
            y1: Math.max(...data.data[0].y) * 2, // ehhhh
            line: {
              width: 1.5,
              dash: "dot",
            },
          },
        ],
        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",
        // template: "plotly_white",
      }}
    />
  );
}
