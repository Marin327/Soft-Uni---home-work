function solve(input) {
let weight = Number(input[0]);
let typeCourier = input[1];
let distance = Number(input[2]);

allPrice = 0.0;

if (typeCourier === "standard"){
    if (weight < 1){
        allPrice = distance * 0.03;
    } else if (weight >=1 && weight <=10){
        allPrice = distance * 0.05;
    } else if (weight >=11 && weight <=40){
        allPrice = distance * 0.10;
    } else if (weight >= 41 && weight <=90){
        allPrice = distance *0.15;
    } else if (weight >= 91 && weight <=150){
        allPrice = distance * 0.20;
    }
} else if (typeCourier === "express"){
    if (weight < 1){
        allPrice = allPrice + 0.8 * 0.03 * distance * weight;
    } else if (weight >= 1 && weight <= 10){
        allPrice = allPrice + 0.4 * 0.05 * distance * weight;
    } else if (weight >= 11 && weight <= 40){
        allPrice = allPrice + 0.05 * 0.10 * distance * weight;
    } else if (weight >= 41 && weight <= 90){
        allPrice = allPrice + 0.02 * 0.15 * distance * weight;
    } else if (weight >= 91 && weight <= 150){
        allPrice = allPrice + 0.01* 0.20 * distance * weight;
    }
}
console.log(`The delivery of your shipment with weight of ${weight} kg. would cost ${allPrice} lv.`);

}
solve([
    "1.5",
    "standard",
    "100"])