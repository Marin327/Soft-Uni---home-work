function solve([arg1,arg2,arg3,arg4]) {
    let luggageOver20KgPrice = Number(arg1); // Цената на багаж над 20кг - реално число в диапазона [10.0…80.0]
    let luggageKilograms = Number(arg2); // Килограми на багажа – реално число в диапазона [1.0…32.0]
    let daysTillTrip = Number(arg3); // Дни до пътуването – цяло число в диапазона [1…60]
    let numberOfLuggage = Number(arg4); // Брой багажи – цяло число в диапазона [1…10]

    let luggageTax = 0;
    let finalPrice = 0;

    if (luggageKilograms < 10){
        luggageTax = luggageOver20KgPrice * 0.20;
    } else if (luggageKilograms >= 10 && luggageKilograms <= 20) {
        luggageTax = luggageOver20KgPrice * 0.50;
    } else if (luggageKilograms > 20) {
        luggageTax = luggageOver20KgPrice;
    }
    let increase = 0;
    if (daysTillTrip > 30) {
        increase = luggageTax + luggageTax * 0.10;
    } else if (daysTillTrip >= 7 && daysTillTrip <= 30) {
        increase = luggageTax + luggageTax * 0.15;
    } else if (daysTillTrip < 7){
        increase = luggageTax + luggageTax * 0.40;
    }

    finalPrice = increase * numberOfLuggage;
         console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`);
}
solve(["30",
    "18",
    "15",
    "2"])