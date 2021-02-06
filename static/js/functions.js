
// GET COORDINATES OF EACH POINT
// may want to shift to 1 list, or have an option for that
function coords(bool) {
    // Get coordinate lists - rep is right, dem is left
    let rep_theta = [];
    let dem_theta = [];
    let rads = [];

    for(let a = 0; a < 13; a++) {
        for(let r = Math.max(10, 2*(a-2)); r < 20; r+= 2) {
            let rad = r+1;
            let theta_R = a * 90 / (r/2 +2) - 5;
            let theta_D = 180 - theta_R;

            rep_theta.push(theta_R);
            dem_theta.push(theta_D);
            rads.push(rad);
        }
    }

    let theta = rep_theta.concat(dem_theta.reverse());

    let rads2 = [...rads];
    rads2.reverse();
    let all_rads = rads.concat(rads2);

    if (bool) {
        return [rads, rep_theta, dem_theta.reverse()];
    } else {
        return [all_rads, theta.reverse()];
    }

}


// sum list
function sumList(nums) {
    return nums.reduce(function(tot, next) {
        return tot + parseInt(next)
    }, 0);
}

// convert list to number of senate seats (ie rounded percentage)
function getAllSeats(myList) {
    let tot = sumList(myList);

    let temp = myList.map(m => (m*100 / tot));

    let seats = myList.map(m => Math.round(m*100 / tot));

    while (sumList(seats) !== 100) {  // NOTE: WILL BREAK EVERYTHING IF SEATS > 100
        console.log('uh oh! getSeats has a problem!');
        console.log(temp);

        seats[0] +=1 
    }

    return seats;
}

function getPartySeats(myList) {
        
    let sex_seats = getAllSeats(myList);

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

    return [sexRseats, sexDseats];

}

function getPartyColors(numsList, colorList) {
    let sexDcolors = [];
    let sexRcolors = [];

    for (let i=0; i < numsList[0].length; i++) {

        let currRep = Array(numsList[0][i]).fill(colorList[i]);
        let currDem = Array(numsList[1][i]).fill(colorList[i]);

        sexDcolors = sexDcolors.concat(currDem);
        sexRcolors = sexRcolors.concat(currRep);
    };

    return [sexRcolors, sexDcolors];
}

function getColors(numsList, colorList) {
    myColors = [];

    for (let i=0; i < numsList.length; i++) {
        let curr = Array(numsList[i]).fill(colorList[i]);
        myColors = myColors.concat(curr);
    };

    return myColors;
}



// ***************************** Kosal **********************

const sen_j_loc = "http://localhost:5000/api/sen";
const pop_j_loc = "http://localhost:5000/api/attr";
const rel_j_loc = "http://localhost:5000/api/relig";

const sex_list = ['Male', 'Female'];
const sex_num = [1,2];
const sex_color = ["#C39BD3", "#F4ECF7"];

const race_list = ["White", "Black", "Native", "Asian", "Islander", "Two+"];
const race_num = [1,2,3,4,5,6];
const race_color = ["#F7A6C8", "#47343C","#C70039", "#FFC300", "#547C98", "#0A0AD9"];

const option_list = [sex_list, race_list];
const option_num = [sex_num, race_num];
const option_color = [sex_color, race_color];

const age_list = ["0-17", "18-34", "35-50", "51-69", "70-87", "87+"];
var age_num_ = [];


// pie plot for general population
function pop_pi_plot(option){

    if (option == "SEX"){
        index = 0;
    } if (option == "RACE"){
        index = 1;
    };

    d3.json(pop_j_loc).then(function(data){

        var opt_select = option;
        var num = option_num[index];
        var labels_list = option_list[index];
        var value_list =[];


        for (var i=0; i<num.length; i++){
            temp = data.filter(a => a[opt_select] === num[i]);
            value_list[i] = sumList(temp.map(f => parseInt(f.POPESTIMATE2019)));
        };

        // console.log(value_list);

        value = value_list;
        label = labels_list;
        title = 'General Population ' + option + ' Ratio';
        color = option_color[index];
        mydiv = 'pi_plot_pop';

        plot_pie(value, label, title, mydiv,color);
    });
    
};

// pi plot for general sen
function sen_pi_plot(option){

    if (option == "SEX"){
        index = 0;
        option1 = "gender";
    } if (option == "RACE"){
        index = 1;
        option1 = "race";
    };

    d3.json(sen_j_loc).then(function(data){
        var opt_select = option1;

        var num = option_num[index];
        var labels_list = option_list[index];
        var value_list =[];


        for (var i=0; i<num.length; i++){
            temp = data.filter(a => a[opt_select] === num[i]);
            value_list[i] = sumList(temp.map(f => parseInt(f.population)));
        };

        value = value_list;
        label = labels_list;
        title = 'Senate ' + option + ' Ratio';
        color = option_color[index];
        mydiv = 'pi_plot_sen';

        plot_pie(value, label, title, mydiv, color);
    });
    
};


// drop down from pi plot
function drop_pi_option(){
    // option for pi_plot
    var pi_option = ["SEX", "RACE"];
    var drop_pi = d3.select("#option_plot");

    pi_option.forEach(function(a){
        drop_pi.append("option").text(a).property("value");
    });
};

// pie plot
function plot_pie(val, lab, titl, div, color){

    var dataPlot = [{
        type : "pie",
        values : val,
        labels : lab,
        textinfo: "label+percent",
        automargin: true,
        marker:{
            colors: color
        },
        rotation :-45
    }];

    var layoutPlot = {
        title : titl,
        // height: 500,
        // width: 920,
        // margin: {"t": 50, "b": 50, "l": 50, "r": 50},
        showlegend: true,
        // transform: rotate(-25.2)
        };
    
    var config = {responsive : true}
    return Plotly.newPlot(div, dataPlot, layoutPlot, config)
};