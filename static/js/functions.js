
// GET COORDINATES OF EACH POINT

function coords() {
    // Get coordinate lists - rep is right, dem is left
    let rep_theta = [];
    let dem_theta = [];
    let rads = [];

    for(let a = 0; a < 13; a++) {
        for(let r = Math.max(10, 2*(a-2)); r < 20; r+= 2) {
            let rad = r;
            let theta_R = a * 90 / (r/2 +2);
            let theta_D = 180 - theta_R;

            rep_theta.push(theta_R);
            dem_theta.push(theta_D);
            rads.push(rad);

        }
    }

    return [rads, rep_theta, dem_theta];
}

// sum list
function sumList(nums) {
    return nums.reduce(function(tot, next) {
        return tot + parseInt(next)
    }, 0);
}

// convert list to number of senate seats (ie rounded percentage)
function getSeats(myList) {
    let tot = sumList(myList);

    let seats = myList.map(m => Math.round(m*100 / tot));

    if (sumList(seats) !== 100) {
        console.log('uh oh!');
        console.log(seats);
    }

    return seats;
}