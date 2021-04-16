function init() {
    d3.json("https://isabelle-sanford.github.io/senate-analysis/jsons/senators.json").then(function(data) {

// SIMPLE BAR========================================
    rep_total_pop = data.filter(d => d.party === 'Republican').map(sen => sen.population);
    dem_total_pop = data.filter(d => d.party === 'Democratic').map(sen => sen.population);

    other_total_pop = data.filter(d => {
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

    let sex_sorted_data = data.sort((a,b) => parseInt(a.gender) - parseInt(b.gender));

    let sexKey = {'1': {color:'purple', sex:'male'}, '2': {color:'salmon', sex:'female'}};

    let sensexcolors = sex_sorted_data.map(g => sexKey[g.gender].color);
    let sensexlabels = sex_sorted_data.map(g => `${g.senator} (${sexKey[g.gender].sex})`);

    nonpartychamber_plot(10, sensexcolors, sensexlabels, 'Gender - US Senate', 'IS-chamber-sen-sex');


    // RACE----------------------------------------------
    // @TODO HISPANIC ORIGIN

    let race_sorted_data = data.sort((a,b) => parseInt(a.race) - parseInt(b.race));

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



    });





};

init();