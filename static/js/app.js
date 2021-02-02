

function init() {
    d3.csv("../../resources/SPopulation.csv").then(function(data) {

    // SIMPLE BAR:
    // bar(x, y, title, colors, div)
    // colors are blue & red
    // x is dem & republican
    // y is # of people D vs R senators represent

    let dem_total = 0;
    let rep_total = 0;
    let other_total = 0;

    data.forEach(d => {
        let pop = d.Population / 2;
        //console.log(pop);

        if (d.Party === "Republican") {
            rep_total += pop
        } else if (d.Party === "Democrat") {
            dem_total += pop
        } else {
            other_total += pop
        }
    })

    let bar_x = ['Democrat', 'Republican'];
    let bar_y = [(dem_total + other_total), rep_total];
    let bar_colors = ['blue', 'red'];

    bar(bar_x, bar_y, '# of People each Party Represents', bar_colors, "IS-bar");



    // STATE POP BAR:
    // bar_pop_stack(vars1, vars2, div)
    // vars is a list of [x, y, color, text]
    // x is state, y is state population (divided by 2 bc 2 senators!)
    // color is determined by senator from that state, text is senator's name
    // vars1 vs vars2 are each half the senators (divide in half by index - eg 'x % 2 === 0' vs equals 1)
    // DO NOT NEED TO SORT thank goodness

    colordict = {'Republican': 'red', 'Democratic': 'blue', 'Vacant': 'black', 'Independent': 'gray'}

    let states = []; // x for both vars

    let stack1_pop = []; // y for vars1
    let stack1_color = []; // color for vars1
    let stack1_name = []; // text for vars1
    
    let stack2_pop = []; // y for vars2
    let stack2_color = []; // color for vars2
    let stack2_name = []; // text for vars2

    for(let i = 0; i < 100; i++) {
        let sen = data[i];
        let pop = sen.Population;
        let name = sen.Senator;
        let color = colordict[sen.Party];
        let curr_state = sen.State;

        if (i % 2 == 0) {
            states.push(curr_state);
            stack1_pop.push(pop);
            stack1_color.push(color);
            stack1_name.push(name);
        } else {
            stack2_pop.push(pop);
            stack2_color.push(color);
            stack2_name.push(name);
        }
    }

    let vars1 = [states, stack1_pop, stack1_color, stack1_name];
    let vars2 = [states, stack2_pop, stack2_color, stack2_name];

    bar_pop_stack(vars1, vars2, 'State populations by Senator', 'IS-bar-pop');



    // CHAMBER PLOT:
    // chamber_plot(rep_pops, dem_pops, div)
    // rep_pops is a sorted list of populations from each republican senator
    // dem_pops is the equivalent, etc
    // eventually add - hovertext for state / senator


    }).catch(function(error) {
    console.log(error);
    });

}

init();