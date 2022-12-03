

const today = new Date();
let todayPrim = today[Symbol.toPrimitive]('number');


const firstTraining = new Date('24 September 2022 16:00');
let firsTrainingPrim = firstTraining[Symbol.toPrimitive]('number');

function tidtiltraening() {
    
}

function dateDiff(tDP, lLP) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((tDP-lLP)/(1000*60*60*24));
}

console.log(Math.abs(dateDiff(todayPrim, firsTrainingPrim)))