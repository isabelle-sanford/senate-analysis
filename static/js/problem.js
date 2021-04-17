function init() {
    d3.json("https://isabelle-sanford.github.io/senate-analysis/jsons/senators.json").then(function(sendata) {

// SIMPLE BAR========================================
    rep_total_pop = sendata.filter(d => d.party === 'Republican').map(sen => sen.population);
    dem_total_pop = sendata.filter(d => d.party === 'Democratic').map(sen => sen.population);

    other_total_pop = sendata.filter(d => {
        return ((d.party !== 'Republican') && (d.party !== 'Democratic'));
    }).map(sen => sen.population);

    let bar_x = ['Democrat', 'Republican'];
    let bar_y = [sumList(dem_total_pop)/2, sumList(rep_total_pop)/2];
    let bar_colors = ['blue', 'red'];

    if(sumList(other_total_pop) > 10000000) {
        bar_x.push('Other');
        bar_y.push(sumList(other_total_pop) / 2);
        bar_colors.push('gray');

        console.log("adding other party to Dems & Reps");
    } else {
        bar_y[0] += sumList(other_total_pop)/2;
    }

    bar(bar_x, bar_y, '# of People each Party Represents', bar_colors, "IS-bar");


// STATE POP BAR===========================
    let colordict = {'Republican': 'red', 'Democratic': 'blue', 'Vacant': 'black', 'Independent': 'gray'}
    // wayyy too messy to justify putting in here, yikes


// skipping population-representation chamber plot


// SENATOR DEMOGRAPHIC CHAMBER PLOTS==============================

    // GENDER-------------------------------------------

    let sex_sorted_data = sendata.sort((a,b) => parseInt(a.gender) - parseInt(b.gender));

    let sexKey = {'1': {color:'purple', sex:'male'}, '2': {color:'salmon', sex:'female'}};

    let sensexcolors = sex_sorted_data.map(g => sexKey[g.gender].color);
    let sensexlabels = sex_sorted_data.map(g => `${g.senator} (${sexKey[g.gender].sex})`);

    nonpartychamber_plot(10, sensexcolors, sensexlabels, 'Gender - US Senate', 'IS-chamber-sen-sex');


    // RACE----------------------------------------------
    // @TODO HISPANIC ORIGIN

    let race_sorted_data = sendata.sort((a,b) => parseInt(a.race) - parseInt(b.race));

    let raceKey = {1: {color: 'blue', race: 'white'},
                2: {color: 'red', race: 'African American'},
                3: {color: 'yellow', race: '??????'},
                4: {color: 'green', race: 'Asian American'},
                5: {color: 'purple', race: '&&&&&'},
                6: {color: 'orange', race: '******'}};


    let senracecolors = race_sorted_data.map(g => raceKey[g.race].color);
    let senracelabels = race_sorted_data.map(g => `${g.senator} (${raceKey[g.race].race})`)

    nonpartychamber_plot(10, senracecolors, senracelabels, 'Race Demographics - Senate', 'IS-chamber-sen-race');

    // RELIGION--------------------------------------------

    let protestant_list = ['Congregationalist', 'Episcopalian', 'Presbyterian', 'Evangelical', 
                    'Protestant', 'Baptist', 'Lutheran', 'Methodist', 'Restorationist', 
                    'Quaker', 'Holiness', 'Protestant'];

    
    let relig_sorted_data = sendata.sort((a,b) => {
        let intA = a.religion;
        let intB = b.religion;
        if(protestant_list.includes(a.religion)) {
            intA = "Protestant";
        }
        if(protestant_list.includes(b.religion)) {
            intB = "Protestant";
        }
        
        return (intA > intB) ? 1 : -1;
    });


    let relig_color_dict = {'Buddhist':'blue',  
    'Catholic':'brown', 
    'Hindu': 'pink',
    'Jewish':'purple', 
    'Latter-day Saint': 'orange',
    'Mormon':'orange',
    'Muslim': 'green',
    'Other non-Christian': 'black',
    'Other Christian': 'yellow',
    'Protestant':'red',  
    'Unaffiliated':'gray',
    'Unknown':'black'
    };


    let sen_relig_colors = relig_sorted_data.map(d => {
        if(protestant_list.includes(d.religion)) {
            return relig_color_dict['Protestant'];
        }
        return relig_color_dict[d.religion];
    });

    let sen_relig_labels = relig_sorted_data.map(d => `${d.senator} (${d.religion})`);

    nonpartychamber_plot(10, sen_relig_colors, sen_relig_labels, 'Religion Demographics - Senate', 'IS-chamber-sen-relig');

    // @TODO: make the colors sorted by approx group and not alphabet


    });


    d3.json("https://isabelle-sanford.github.io/senate-analysis/jsons/uspop.json").then(function(usdata) {
    //console.log(usdata);
    // GENDER----------------------------------------------------------
    let guys = usdata.filter(a => a.SEX === 1);
    let gals = usdata.filter(a => a.SEX === 2);


    let guys_pop = sumList(guys.map(g => parseInt(g.POPESTIMATE2019)));
    let gals_pop = sumList(gals.map(g => parseInt(g.POPESTIMATE2019)));

    let pop_sex_colors = getColors(getAllSeats([guys_pop, gals_pop]), ['purple', 'salmon']);

    nonpartychamber_plot(10, pop_sex_colors, 0, 'Gender - US Population', 'IS-chamber-pop-sex');

    // RACE-------------------------------------------------------------

    let raceKey2 = [{n: 1, color: 'blue', race: 'White', pop: 0},
                    {n: 2, color: 'red', race: 'Black', pop: 0},
                    {n: 3, color: 'yellow', race: 'Indigenous', pop: 0},
                    {n: 4, color: 'green', race: 'Asian American', pop: 0},
                    {n: 5, color: 'purple', race: 'Hawaiian/Pacific Islander', pop: 0},
                    {n: 6, color: 'orange', race: 'Multiple races', pop: 0}];

    for(let j = 0; j < usdata.length; j++) {
        let r = raceKey2.filter(r => usdata[j].RACE === r.n)
        r[0].pop += usdata[j].POPESTIMATE2019;
    }

    
    let us_race_colors = getColors(getAllSeats(raceKey2.map(r => r.pop)), raceKey2.map(r => r.color));
    
    let us_race_labels = us_race_colors.map(color => {
        return raceKey2.filter(c => c.color === color)[0].race;
    });

    nonpartychamber_plot(10, us_race_colors, us_race_labels, 'Race Demographics - US Population', 'IS-chamber-pop-race');


});

d3.json("https://isabelle-sanford.github.io/senate-analysis/jsons/religion.json").then(function(relig_data) {

    let religionKey = [
        {religion: 'Buddhist', color: 'blue', pop: 0},
        {religion: 'Catholic', color: 'brown', pop: 0},
        {religion: 'Jewish', color: 'brown', pop: 0},
        {religion: 'Hindu', color: 'pink', pop: 0},
        {religion: 'Jewish', color: 'purple', pop: 0},
        {religion: 'Latter-day Saint', color: 'orange', pop: 0},
        {religion: 'Mormon', color: 'orange', pop: 0},
        {religion: 'Muslim', color: 'green', pop: 0},
        {religion: 'Other non-Christian', color: 'black', pop: 0},
        {religion: 'Other Christian', color: 'yellow', pop: 0},
        {religion: 'Protestant', color: 'red', pop: 0},
        {religion: 'Unaffiliated', color: 'gray', pop: 0},
        {religion: 'Unknown', color: 'black', pop: 0}
    ];

    let other_christian = ['Orthodox Christian', 'Jehovah\'s Witness', 'Other Christian'];

    let religion_list = religionKey.map(r => r.religion);

    for (let i = 1; i < relig_data.length; i++) {
        let curr_relig = relig_data[i];
        
        if (religion_list.includes(curr_relig.Religion)) {
            religionKey.filter(r => r.religion === curr_relig.Religion)[0].pop += curr_relig.Percent;
        } else if (other_christian.includes(curr_relig.Religion)) {
            religionKey.filter(r => r.religion === 'Other Christian')[0].pop += curr_relig.Percent;

        } else if ((curr_relig.Protestant > 0) && (curr_relig.Percent < 99)) {
            religionKey.filter(r => r.religion === 'Protestant')[0].pop += curr_relig.Percent;

        } else {
            console.log(curr_relig.Religion);
        };
    };

    let us_relig_colors = getColors(getAllSeats(religionKey.map(r => r.pop)), religionKey.map(r => r.color));
    let us_relig_labels = us_relig_colors.map(color => {
        return religionKey.filter(c => c.color === color)[0].religion;
    });

    nonpartychamber_plot(10, us_relig_colors, us_relig_labels, 'US Religion Demographics', 'IS-chamber-pop-relig');
    

});


};

init();