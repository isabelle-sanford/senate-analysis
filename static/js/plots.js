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

function bar_pop_stack(vars1, vars2, div) {
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

    let layout = {
        title: title,
        barmode: 'stack',
        xaxis: {
            categoryorder: 'total descending' // CF
        },
        // showlegend is false
        template: 'plotly_white'  // check formatting

    }

    Plotly.newPlot(div, data, layout);
}

