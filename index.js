// Declare variables
const drivers = [];

//Test 1
const returnFirstTwoDrivers = function(drivers){
   const firstTwoDrivers = drivers.slice(0,2);
   
    /* let i;
    for (i = 0; i < 2; i++){
        firstTwoDrivers[i] = drivers[i];
    }*/
    return firstTwoDrivers;
}

//Test 2
const returnLastTwoDrivers = function (drivers){
    const lastTwoDrivers = drivers.slice(-2);
    

    /*const lastTwoDrivers = [];
    lastTwoDrivers[0] = drivers[drivers.length - 2]; 
    lastTwoDrivers[1] = drivers[drivers.length - 1];
    console.log(lastTwoDrivers);*/
    return lastTwoDrivers;
 
}

//Test 3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//Test 4
function createFareMultiplier(mult){
    return function fareRate(fare){
        return fare * mult;
    }
}

//Test 5
const fareDoubler = createFareMultiplier(2);

//Test 6
const fareTripler = createFareMultiplier(3);

//Test 7
function selectDifferentDrivers (drivers, driverOption){
    return driverOption(drivers);
}

console.log("TEST TEST TEST");