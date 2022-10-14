function solve([arg1,arg2,arg3,arg4]) {
let people = Number(arg1);
let sumFree = Number(arg2);
let loungePrice = Number(arg3);
let umbrellaPrice = Number(arg4);

let totalEnterPrice = sumFree * people;
let loungeCount = Math.ceil(people * 0.75);
let umbrellaCount = Math.ceil(people / 2);

let finalPrice = totalEnterPrice + loungeCount * loungePrice + umbrellaCount * umbrellaPrice;
console.log(`${finalPrice.toFixed(2)} lv.`)

 }

solve([
    "21",
    "5.50",
    "4.40",
    "6.20"
])