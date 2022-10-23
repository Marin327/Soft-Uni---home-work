function solve(input) {
    
    let numberOfDays = Number(input[0]);
    let numbersOfHours = Number(input[1]);

    let total = 0;

    for (let currentDay = 1; currentDay <= numberOfDays; currentDay++) {
        let tollPerDay = 0;

        for (let currentHours = 1; currentHours <= numbersOfHours; currentHours++) {

            let isDayEven = currentDay % 2 === 0;
            let isHourEven = currentHours % 2 === 0;
            let toll = 0;
            
            if (isDayEven && !isHourEven) {
                toll = 2.50;
            } else if (!isDayEven && isHourEven) {
                toll = 1.25;
            } else {
                toll = 1;
            }
            tollPerDay += toll;

        }
        console.log(`Day: ${currentDay} - ${tollPerDay.toFixed(2)} leva`);
        total += tollPerDay;

    }
    console.log(`Total: ${total.toFixed(2)} leva`);

}
solve(["2", "5"])