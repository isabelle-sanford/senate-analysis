// Plain bar graph

// Simple Bar 
function bar(x, y, title, colors, div){
    let my_data = [{
        x: x,
        y: y,
        marker: {
            color: colors
        },
        type: 'bar'
    }];

    let my_layout = {
        title: title,
        // xaxis: {title: "Outcome"},
        // yaxis: {title: "Avg. Length (cycles)"},
        hovermode: 'closest'
    };

    Plotly.newPlot(div, my_data, my_layout);
};

// other plots

// idea - have the function be adding a trace so you don't have to specify x1 x2 etc

function bar_pop_stack(vars1, vars2, title1, div) {
    // not convinced this is better but okay
    let x1 = vars1[0];
    let y1 = vars1[1];
    let color1 = vars1[2];
    let text1 = vars1[3];

    let x2 = vars2[0];
    let y2 = vars2[1];
    let color2 = vars2[2];
    let text2 = vars2[3];

    let trace1 = {
        x: x1,
        y: y1,
        marker: {
            color: color1
        },
        type: 'bar',
        text: text1
    };

    let trace2 = {
        x: x2,
        y: y2,
        marker: {
            color: color2
        },
        type: 'bar',
        text: text2
    };

    // REMEMBER TO ADD LINE FOR HALFWAY POINT

    let data = [trace1, trace2];

    console.log(title1);

    let layout = {
        title: title1,
        showlegend: false,
        barmode: 'stack',
        xaxis: {
            categoryorder: 'total descending' // CF
        },
        // showlegend is false
        template: 'plotly_white'  // check formatting

    }


    Plotly.newPlot(div, data, layout);
}


// P O L A R

function chamber_plot(rep_pops, dem_pops, div) {

    // Get coordinate lists - rep is right, dem is left
    let rep_theta = [];
    let dem_theta = [];
    let rads = [];

    for(let a = 0; a < 12; a++) {
        for(let r=0; r < Math.max(5, a - 2); r += 10) {
            let rad = r;
            let theta_R = a * 90 / (r + 2);
            let theta_D = 180 - theta_R;

            rep_theta.push(theta_R);
            dem_theta.pish(theta_D);
            rads.push(rad);

        }
    }

    // Do we even need two subplots? Just shift everything over and make it one plot

    let reps = {
        r: rads,
        theta: rep_theta,
        mode: 'markers',
        name: 'Republican',
        marker: {color: 'red',
                    size: rep_pops,
                    sizemode: 'area',
                    sizeref: 2.0 * Math.max(...size) / (40**2),
                },
        type: 'scatterpolar',
        subplot: 'polar_rep'
    };

    let dems = {
        r: rads,
        theta: dem_theta,
        mode: 'markers',
        name: 'Democrat',
        marker: {
            color: 'blue',
            size: dem_pops,
            sizemode: 'area',
            sizeref: 2.0 * Math.max(...size) / (40**2)
        },
        type: 'scatterpolar',
        subplot: 'polar_dem'
    };

    let data = [reps, dems];


    let layout = {
        title: 'US Senate',
        showlegend: true,
        polar_rep: {
            sector: [0,90],
            // domain: {
            //     x: [0,0.4],
            //     y: [0,1]
            // },
            // radialaxis: {
            //     tickfont: {
            //     size: 8
            //     }
            // },
            // angularaxis: {
            //     tickfont: {
            //     size: 8
            //  }
            //}
        },
        polar_dem: {
            sector: [90, 180]
          }
        }

    Plotly.newPlot(div, data, layout)


}
