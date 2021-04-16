// Plain bar graph

// Simple Bar--------------------------------------------
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
        hovermode: 'closest',
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'rgb(247,226,202)'
    };

    Plotly.newPlot(div, my_data, my_layout);
};

// other plots

// idea - have the function be adding a trace so you don't have to specify x1 x2 etc

//bar pop stack-----------------------------------
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


    let data = [trace1, trace2];

    //console.log(title1);

    let layout = {
        title: title1,
        showlegend: false,
        barmode: 'stack',
        xaxis: {
            categoryorder: 'total descending' // CF
        },
        shapes: [
            {
                type: 'line',
                x0: 9.5,
                y0: 0,
                x1: 9.5,
                y1: Math.max(...y1)*2,
                line: {
                    width: 1.5,
                    dash: 'dot'
                }
            }
        ],
        // showlegend is false
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'rgb(247,226,202)',
        template: 'plotly_white'  // check formatting - why does this work and chamber plot not???

    }


    Plotly.newPlot(div, data, layout);
}



// P O L A R-----------------------------------------

// note: eventually have size be a single input, and plot parties
// if size is a list, else plot just one chamber
function chamber_plot(sizeR, sizeD, colorR, colorD, textR, textD, div) {
    // defaults: size = 10
    // color = red, blue

    
    let coord = coords(true);
    // Do we even need two subplots? Just shift everything over and make it one plot
    // todo: add mouseover for sen/state name & remove coords on hover

    let reps = {
        r: coord[0],
        theta: coord[1],
        mode: 'markers',
        name: 'Republican',
        text: textR,
        hoverinfo: 'text',
        marker: {
            color: colorR,
            size: sizeR,
        },
        type: 'scatterpolar',
        subplot: 'polar2'
    };

    if (sizeR.length > 1) {
        reps.marker.sizemode = 'area';
        reps.marker.sizeref = 2.0 * Math.max(...sizeR) / (30**2);
        reps.marker.sizemin = 2;
    }

    let dems = {
        r: coord[0],
        theta: coord[2],
        mode: 'markers',
        name: 'Democrat',
        text: textD,
        hoverinfo: 'text',
        marker: {
            color: colorD,
            size: sizeD
        },
        type: 'scatterpolar',
        subplot: 'polar'
    };

    if (sizeD.length > 1) {
        dems.marker.sizemode = 'area';
        dems.marker.sizeref = 2.0 * Math.max(...sizeD) / (30**2);
        dems.marker.sizemin = 2;
    }

    let data = [reps, dems];


    let layout = {
        title: 'US Senate by Population',
        showlegend: false,
        polar: {
            sector: [90,180],
            domain: {
                x: [0, 0.5],
                y: [0,1]
            },
            hole: .2,
            radialaxis: {
                visible: false
            },
            angularaxis: {
                visible: false
            },
            bgcolor: 'rgb(247,226,202)'
        },
        polar2: {
            sector: [0, 90],
            domain: {
                x: [0.5, 1],
                y: [0, 1]
            },
            hole: .2,
            radialaxis: {
                visible: false
            },
            angularaxis: {
                visible: false
            },
            bgcolor: 'rgb(247,226,202)'

          },
          paper_bgcolor: 'transparent',
          margin: {
              l: 0,
              r: 0
          }
        }

    Plotly.newPlot(div, data, layout)


}

function nonpartychamber_plot(size, color, text, title2, div) {
    // defaults: size = 10
    // color = red, blue

    
    let coord = coords(false);
    // Do we even need two subplots? Just shift everything over and make it one plot
    // todo: add mouseover for sen/state name & remove coords on hover

    let trace = {
        r: coord[0],
        theta: coord[1],
        mode: 'markers',
        //name: 'Republican',
        text: text,
        hoverinfo: 'text',
        marker: {
            color: color,
            size: size,
        },
        type: 'scatterpolar',
        //subplot: 'polar2'
    };

    if (size.length > 1) {
        trace.marker.sizemode = 'area';
        trace.marker.sizeref = 2.0 * Math.max(...sizeR) / (30**2);
        trace.marker.sizemin = 2;
    };

    let data = [trace];


    let layout = {
        title: title2,
        showlegend: false,
        polar: {
            sector: [-10,190],
            hole: .2,
            radialaxis: {
                visible: false
            },
            angularaxis: {
                visible: false
            },
            bgcolor: 'rgb(247,226,202)'
        },
        paper_bgcolor: 'transparent',
        margin: {
            l: 0,
            r: 0
        }, 
        
        //plot_bgcolor: 'rgb(247,226,202)'
    }

    Plotly.newPlot(div, data, layout)


}



// at some point we really need to go through formatting and make it camelCase
