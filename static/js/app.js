function init() {
    d3.json("http://localhost:5000/api/sen").then(function(data) {
        

        // SIMPLE BAR========================================


        rep_total = data.filter(d => d.party === 'Republican').map(sen => sen.population);

        dem_total = data.filter(d => d.party !== 'Republican').map(sen => sen.population);

        other_total = data.filter(d => {
            return (d.party !== 'Republican') && (d.party !== 'Democrat')
        }).map(sen => sen.population);

        // no other total atm
    

        let bar_x = ['Democrat', 'Republican'];
        let bar_y = [sumList(dem_total)/2, sumList(rep_total)/2];
        let bar_colors = ['blue', 'red'];



        bar(bar_x, bar_y, '# of People each Party Represents', bar_colors, "IS-bar");



        // STATE POP BAR===========================

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
            let pop = sen.population;
            let name = sen.senator;
            let color = colordict[sen.party];
            let curr_state = sen.state;

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

        bar_pop_stack(vars1, vars2, 'State Populations by Senator', 'IS-bar-pop');

        // add state abbrevs into data so those can be used



        // POP CHAMBER PLOT==========================================

        let sorted_data = data.sort((a, b) => parseInt(a.population) - parseInt(b.population));
        let rep_sorted = sorted_data.filter(d => d.party === 'Republican');
        let rep_sorted_pops = rep_sorted.map(sen => parseInt(sen.population)/2);
        let rep_sorted_names = rep_sorted.map(sen => `${sen.senator} (${sen.state})`);


        let dem_sorted = sorted_data.filter(d => d.party !== 'Republican');
        let dem_sorted_pops = dem_sorted.map(sen => parseInt(sen.population)/2);
        let dem_sorted_names = dem_sorted.map(sen => `${sen.senator} (${sen.state})`);

        chamber_plot(rep_sorted_pops, dem_sorted_pops, 'red', 'blue', rep_sorted_names, dem_sorted_names, 'IS-chamber-plot');



        // SENATOR SEX CHAMBER PLOT------------------------
        let sex_sorted_data = data.sort((a,b) => parseInt(a.gender) - parseInt(b.gender));

        // let sexRsorted = sex_sorted_data.filter(d => d.party === 'Republican').map(sen => parseInt(sen.gender));
        // let sexDsorted = sex_sorted_data.filter(d => d.party !== 'Republican').map(sen => parseInt(sen.gender));

        let sexDict = {'1': 'purple', '2': 'salmon'};
        let sexObj = {'1': 'male', '2': 'female'};

        let sensexcolors = sex_sorted_data.map(g => sexDict[g.gender]);
        let sensexlabels = sex_sorted_data.map(g => `${g.senator} (${sexObj[g.gender]})`);

        //console.log(sensexcolors);

        // let sensexRcolors = sexRsorted.map(g => sexDict[g]);
        // let sensexDcolors = sexDsorted.map(g => sexDict[g])

        // chamber_plot(10, 10, sensexRcolors, sensexDcolors, 0, 0, 'IS-chamber-sen-sex');

        nonpartychamber_plot(10, sensexcolors, sensexlabels, 'Gender - US Senate', 'IS-chamber-sen-sex');

        //  what about with party though, and show the party breakdown of the country?


        let race_sorted_data = data.sort((a,b) => parseInt(a.race) - parseInt(b.race));
        //console.log(data[0]);

        let raceDict = {1: 'blue', 2: 'red', 3: 'yellow', 4: 'green', 5: 'purple', 6: 'orange'};
        let raceObj = {1: 'white', 2: 'African American', 3: 'yellow', 4: 'Asian American', 5: 'purple', 6: 'orange'}

        let senracecolors = race_sorted_data.map(g => raceDict[g.race]);
        let senracelabels = race_sorted_data.map(g => `${g.senator} (${raceObj[g.race]})`)

        nonpartychamber_plot(10, senracecolors, senracelabels, 'Race Demographics - Senate', 'IS-chamber-sen-race');


    
        // SENATE RELIGION CHAMBER PLOT======================================================

        // ['Catholic', 'Congregationalist', 'Episcopalian', 'Jewish',
        //    'Presbyterian', 'Evangelical', 'Protestant', 'Baptist', 'Lutheran',
        //    'Methodist', 'Restorationist', 'Quaker', 'Holiness',
        //    'Unaffiliated', 'Buddhist', 'Unknown', 'Latter-day Saint']

        let relig_sorted_data = data.sort(); // strings? this might break


        protestant_list = ['Congregationalist', 'Episcopalian', 'Presbyterian', 'Evangelical', 'Protestant', 
                    'Baptist', 'Lutheran', 'Methodist', 'Restorationist', 'Quaker', 'Holiness'];
        religion_list = ['Catholic', 'Jewish', 'Protestant', 'Unaffiliated', 'Unknown', 'Latter-day Saint']


        relig_color_dict = {'Catholic':'brown', 
        'Jewish':'purple', 
        'Protestant':'red', 
        'Unaffiliated':'gray', 
        'Buddhist':'blue', 
        'Unknown':'black', 
        'Latter-day Saint':'orange',
        'Congregationalist':'red', 'Episcopalian':'red', 'Presbyterian':'red', 'Evangelical':'red', 'Protestant':'red', 
        'Baptist':'red', 'Lutheran':'red', 'Methodist':'red', 'Restorationist':'red', 'Quaker':'red', 'Holiness':'red'};

        relig_colors = relig_sorted_data.map(d => relig_color_dict[d.religion]);
        relig_labels = relig_sorted_data.map(d => `${d.senator} (${d.religion})`);

        nonpartychamber_plot(10, relig_colors, relig_labels, 'Religion Demographics - Senate', 'IS-chamber-sen-relig');



        
        d3.json("http://localhost:5000/api/attr").then(function(attr) {


            // US SEX CHAMBER PLOT
            let guys = attr.filter(a => a.SEX === 1);
            let gals = attr.filter(a => a.SEX === 2);


            let guys_pop = sumList(guys.map(g => parseInt(g.POPESTIMATE2019)));
            let gals_pop = sumList(gals.map(g => parseInt(g.POPESTIMATE2019)));

            let pop_sex_colors = getColors(getAllSeats([guys_pop, gals_pop]), ['purple', 'salmon']);
        
            nonpartychamber_plot(10, pop_sex_colors, 0, 'Gender - US Population', 'IS-chamber-pop-sex');

            
            //chamber_plot(10, 10, pop_sex_colors[0], pop_sex_colors[1], 0, 0, 'IS-chamber-pop-sex');


            // US RACE CHAMBER PLOT

            let white = attr.filter(a => a.RACE === 1);
            let black = attr.filter(a => a.RACE === 2);
            let native = attr.filter(a => a.RACE === 3);
            let asian = attr.filter(a => a.RACE === 4);
            let pacific = attr.filter(a => a.RACE === 5);
            let multiple = attr.filter(a => a.RACE === 6);

            let white_pop = sumList(white.map(g => parseInt(g.POPESTIMATE2019)));
            let black_pop = sumList(black.map(g => parseInt(g.POPESTIMATE2019)));
            let native_pop = sumList(native.map(g => parseInt(g.POPESTIMATE2019)));
            let asian_pop = sumList(asian.map(g => parseInt(g.POPESTIMATE2019)));
            let pacific_pop = sumList(pacific.map(g => parseInt(g.POPESTIMATE2019)));
            let multiple_pop = sumList(multiple.map(g => parseInt(g.POPESTIMATE2019)));

            let race_pops = [white_pop, black_pop, native_pop, asian_pop, pacific_pop, multiple_pop];
            let race_colors = ['blue', 'red', 'yellow', 'green', 'purple', 'orange'];
            let race_names = {'blue':'White', 'red':'African American', 'yellow':'Indigenous/Native American', 'green':'Asian American', 'purple': 'Hawaiian or Pacific Islander', 'orange': 'Multiple races'};

            let pop_race_colors = getColors(getAllSeats(race_pops), race_colors);
            let pop_race_labels = pop_race_colors.map(color => race_names[color]);

            nonpartychamber_plot(10, pop_race_colors, pop_race_labels, 'Race Demographics - US Population', 'IS-chamber-pop-race');


            // US POP RELIGION CHAMBER PLOT===================================================

            // IMPORT RELIGION DATA

            // relig_nums = relig_data.forEach(state => {
            //     state.forEach(religion => {
            //         if (religion === '<1') {
            //             curr = 0
            //         } else {
            //             curr = parseInt(religion);
            //         }
            //     })
            // })

            // pulling from cleaned relig_dict in religion_cleaning:

            // can you iterate through an object by key and value??


//Catholic,
//Mormon-LDS,Other Mormom,
//Greek Orthodox,Russian Orthodox,Orthodox Church in America,Other Orthodox Christian,Jehovah's Witness,Other Christian,
//Jewish,Muslim,Buddhist,Hindu,Other World Religions,Unitarians,New Age,Native American Religions,
//Atheist,Agnostic,Nothing in Particular

// PROTESTANT:
// Baptist Family (ET),Methodist Family (ET),Non-denominational Family (ET),Lutheran Family (ET),Presbyterian (ET),
//Pentecostal Family (ET),Episcopalian/Anglican Family (ET),Restorationist Family (ET),Congregationalist Family (ET),
//Holiness Family (ET),Reformed Family (ET),Adventist Family (ET),Anabaptist Family (ET),Pietist Family (ET),Other Evangelical,
//NonSpecific Protestant Family (ET),Baptist Family (MT),Methodist Family (MT),Non-Denominational Family (MT),Lutheran Family (MT),Presbyterian Family (MT),
//Episcopalian/Anglican Family (MT),Restorationist Family (MT),Congregationalist Family (MT),Reformed Family (MT),Anabaptist Family (MT),Friends Family (MT),
//NonSpecific Protestant Family (MT),Baptist Family (HBPT),Methodist Family (HBPT),Pentecostal Family (HBPT),Holiness Family (HBPT),
//Non-Denominational Family (HBPT),NonSpecific Protestant (HBPT),



        });

    }).catch(function(error) {
    console.log(error);
    });

    // ************* Kosal *******************
    drop_pi_option();
    pop_pi_plot('SEX');
    sen_pi_plot('SEX');

}

init();


// ************* kosal ***********************************
// pip option change
function optionChanged(){
    // select id data from dropdownMenu
    var dropdownMenu = d3.select("#option_plot");
    // get id from drop down menu
    var idFromOption = dropdownMenu.property("value");

    console.log(idFromOption);
    
    // call required function
    pop_pi_plot(idFromOption);
    sen_pi_plot(idFromOption);
};