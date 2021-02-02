

function init() {
    d3.csv("../../resources/SPopulation.csv").then(function(data) {

    // SIMPLE BAR:
    // bar(x, y, title, colors, div)
    // colors are blue & red
    // x is dem & republican
    // y is # of people D vs R senators represent


    rep_total = data.filter(d => d.Party === 'Republican').map(sen => sen.Population);

    dem_total = data.filter(d => d.Party !== 'Republican').map(sen => sen.Population);

    other_total = data.filter(d => {
        return (d.Party !== 'Republican') && (d.Party !== 'Democrat')
    }).map(sen => sen.Population);

    // no other total atm
   

    function sumList(nums) {
        return nums.reduce(function(tot, next) {
            return tot + parseInt(next)
        }, 0);
    }


    let bar_x = ['Democrat', 'Republican'];
    let bar_y = [sumList(dem_total), sumList(rep_total)];
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

    // TODO: Add vertical line at halfway point; add state abbrevs into data so those can be used



    // CHAMBER PLOT:
    // chamber_plot(rep_pops, dem_pops, div)
    // rep_pops is a sorted list of populations from each republican senator
    // dem_pops is the equivalent, etc
    // eventually add - hovertext for state / senator

    let sorted_data = data.sort((a, b) => parseInt(a.Population) - parseInt(b.Population));
    let rep_sorted = sorted_data.filter(d => d.Party === 'Republican').map(sen => parseInt(sen.Population));
    let dem_sorted = sorted_data.filter(d => d.Party !== 'Republican').map(sen => parseInt(sen.Population));

    console.log(dem_sorted);

    chamber_plot(rep_sorted, dem_sorted, 'IS-chamber-plot')

    }).catch(function(error) {
    console.log(error);
    });

}

init();