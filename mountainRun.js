function solve(input) {

    let secRecords = Number(input[0]); // Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
    let distanceIn = Number(input[1]); // Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
    let timeInSec = Number(input[2]); // Времето в секунди, за което изкачва 1 м. – реално число в интервала [0.00 … 1000.00]

    let meters = distanceIn * timeInSec; // Георги трябва да изкачи 1400 м.:  1400 * 25 = 35000 сек.
    let timeIn = (distanceIn / 50) * 30; //На всеки 50 м. към времето му се добавят 30 сек.: (1400 / 50) * 30 = 840 сек.
    let totalTime = meters + timeIn; // Общо време: 35000 + 840 = 35840 сек.
    let timeOut = totalTime - secRecords; // Времето, което не му е стигнало за да подобри рекорда: 35840 - 10164 = 25676 сек. 

    if(secRecords <= timeOut) {
        console.log(`No! He was ${timeOut.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    }
}

solve(["10164", "1400", "25"])