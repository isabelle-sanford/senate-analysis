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
        hovermode: 'closest'
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

    // REMEMBER TO ADD LINE FOR HALFWAY POINT

    let data = [trace1, trace2];

    //console.log(title1);

    let layout = {
        title: title1,
        showlegend: false,
        barmode: 'stack',
        xaxis: {
            categoryorder: 'total descending' // CF
        },
        // showlegend is false
        template: 'plotly_white'  // check formatting - why does this work and chamber plot not???

    }


    Plotly.newPlot(div, data, layout);
}


let coord = coords();

// P O L A R-----------------------------------------

function chamber_plot(rep_pops, dem_pops, div) {

    // Do we even need two subplots? Just shift everything over and make it one plot
    // todo: add mouseover for sen/state name

    let reps = {
        r: coord[0],
        theta: coord[1],
        mode: 'markers',
        name: 'Republican',
        marker: {color: 'red',
                    size: rep_pops,
                    sizemode: 'area',
                    sizeref: 2.0 * Math.max(...rep_pops) / (30**2),
                    sizemin: 2
                },
        type: 'scatterpolar',
        subplot: 'polar2'
    };

    let dems = {
        r: coord[0],
        theta: coord[2],
        mode: 'markers',
        name: 'Democrat',
        text: dem_pops,
        marker: {
            color: 'blue',
            size: dem_pops,
            sizemode: 'area',
            sizeref: 2.0 * Math.max(...dem_pops) / (30**2),
            sizemin: 2
        },
        type: 'scatterpolar',
        subplot: 'polar'
    };

    let data = [reps, dems];


    let layout = {
        title: 'US Senate',
        showlegend: false,
        polar: {
            sector: [90,180],
            domain: {
                x: [0, 0.45],
                y: [0,1]
            },
            hole: .2,
            radialaxis: {
                visible: false
            },
            angularaxis: {
                visible: false
            }
        },
        polar2: {
            sector: [0, 90],
            domain: {
                x: [0.55, 1],
                y: [0, 1]
            },
            hole: .2,
            radialaxis: {
                visible: false
            },
            angularaxis: {
                visible: false
            },

          }
        }

    Plotly.newPlot(div, data, layout)


}



// by sex - senators-------------------------------------
function sex_sen_chamber_plot(rep_colors, dem_colors, div) {

    // Do we even need two subplots? Just shift everything over and make it one plot
    // todo: add mouseover for sen/state name

    let reps = {
        r: coord[0],
        theta: coord[1],
        mode: 'markers',
        name: 'Republican',
        marker: {color: rep_colors,
                    size: 10,
                    // sizemode: 'area',
                    // sizeref: 2.0 * Math.max(...rep_pops) / (30**2),
                    // sizemin: 2
                },
        type: 'scatterpolar',
        subplot: 'polar2'
    };

    let dems = {
        r: coord[0],
        theta: coord[2],
        mode: 'markers',
        name: 'Democrat',
        //text: dem_pops,
        marker: {
            color: dem_colors,
            size: 10,
            // sizemode: 'area',
            // sizeref: 2.0 * Math.max(...dem_pops) / (30**2),
            // sizemin: 2
        },
        type: 'scatterpolar',
        subplot: 'polar'
    };

    let data = [reps, dems];


    let layout = {
        title: 'US Senate',
        showlegend: false,
        polar: {
            sector: [90,180],
            domain: {
                x: [0, 0.45],
                y: [0,1]
            },
            hole: .2,
            radialaxis: {
                visible: false
            },
            angularaxis: {
                visible: false
            }
        },
        polar2: {
           // title: 'Republican',
            sector: [0, 90],
            domain: {
                x: [0.55, 1],
                y: [0, 1]
            },
            hole: .2,
            radialaxis: {
                visible: false
            },
            angularaxis: {
                visible: false
            },

          }
        }

    Plotly.newPlot(div, data, layout)


}



// SEX POPULATION CHAMBER-------------------------

function sex_pop_chamber(popsList, popsColors, div) {
    // do function on popslist to get proportional list

    let sex_seats = getSeats(popsList);

    
    // split up list evenly (note: this makes no sense for non-binary attributes)
    let sexRseats = [];
    let sexDseats = [];
    // again this makes no sense pls fix

    sex_seats.forEach(sex => {
        let numSex = sex / 2;

        if (sumList(sexRseats) < sumList(sexDseats)) {
            sexDseats.push(Math.floor(numSex));
            sexRseats.push(Math.ceil(numSex));
        } else {
            sexRseats.push(Math.floor(numSex));
            sexDseats.push(Math.ceil(numSex));
        }

    });

    //console.log(`seats division: ${sex_seats}`);

    sexDcolors = [];
    sexRcolors = [];

    for (let i=0; i < popsList.length; i++) {

        let currRep = Array(sexRseats[i]).fill(popsColors[i]);
        let currDem = Array(sexDseats[i]).fill(popsColors[i]);

        sexDcolors = sexDcolors.concat(currDem);
        sexRcolors = sexRcolors.concat(currRep);
    }

    // ACTUAL PLOT

    // Do we even need two subplots? Just shift everything over and make it one plot
    // todo: add mouseover for sen/state name

    let reps = {
        r: coord[0],
        theta: coord[1],
        mode: 'markers',
        name: 'Republican',
        marker: {color: sexRcolors,
                    size: 10,
                },
        type: 'scatterpolar',
        subplot: 'polar2'
    };

    let dems = {
        r: coord[0],
        theta: coord[2],
        mode: 'markers',
        name: 'Democrat',
        //text: dem_pops,
        marker: {
            color: sexDcolors,
            size: 10,
        },
        type: 'scatterpolar',
        subplot: 'polar'
    };

    let data = [reps, dems];


    let layout = {
        title: 'US Population',
        showlegend: false,
        polar: {
            sector: [90,180],
            domain: {
                x: [0, 0.45],
                y: [0,1]
            },
            hole: .2,
            radialaxis: {
                visible: false
            },
            angularaxis: {
                visible: false
            }
        },
        polar2: {
           // title: 'Republican',
            sector: [0, 90],
            domain: {
                x: [0.55, 1],
                y: [0, 1]
            },
            hole: .2,
            radialaxis: {
                visible: false
            },
            angularaxis: {
                visible: false
            },

          }
        }

    Plotly.newPlot(div, data, layout)



}


// at some point we really need to go through formatting and make it camelCase
