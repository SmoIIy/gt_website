
//-----------------Days since last loss BP--------------------------------------
const lastLoss = new Date('30 October 2021 17:00');
const today = new Date();
let lastLossPrim = lastLoss[Symbol.toPrimitive]('number');
let todayPrim = today[Symbol.toPrimitive]('number');

function dateDiff(tDP, lLP) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((tDP-lLP)/(1000*60*60*24));
}


function updateDate(){
    let output = (dateDiff(todayPrim, lastLossPrim));
    document.getElementById("days").innerHTML = output;

}

console.log(lastLossPrim);
console.log(todayPrim);

//------------------------Check for træning ---------------------------------------------------------
function traening() {
    let day = today.getDay();
    console.log(day);
    let output = "";
    if (day == 2 || day == 4) {
        //document.getElementById("ja").innerHTML = "JA";
        output += "Ja";
    } else {
        //document.getElementById("nej").innerHTML = "NEJ";
        output += "Nej";
    }
    document.getElementById("nej").innerHTML = output;
}

