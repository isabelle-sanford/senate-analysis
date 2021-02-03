
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
            let theta_R = a * 90 / (r/2 +2);
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
        return [all_rads, theta];
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

    let seats = myList.map(m => Math.round(m*100 / tot));

    if (sumList(seats) !== 100) {
        console.log('uh oh! getSeats has a problem!');
        console.log(seats);
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
