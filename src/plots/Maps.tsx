import * as React from "react";

import Plot from "react-plotly.js";

import sraData from "./data/sra0.json";

export function SRAMap(): any {
  return (
    <Plot
      data={[
        {
          // x: props.x,
          // y: props.y,
          type: "chloropleth",
          locationmode: "USA-states",
          locations: sraData.map((s) => s.state),
          z: sraData.map((s) => s.sra_number),
          autocolorscale: true,
        },
      ]}
      layout={{
        title: "Senate Seats by SRA, 2020 data",
        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",
        geo: {
          scope: "usa",
        },
      }}
    />
  );
}
