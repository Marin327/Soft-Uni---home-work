function yardGreening(input) {
let squareMeter = Number(input[0]);
let grossPrice = squareMeter * 7.61;
let discount = 0.18 * grossPrice;
let finalPrice = grossPrice - discount;
let area = (`The final price is: ${finalPrice} lv.`);
let result = (`The discount is: ${discount} lv.`);

console.log(area);
console.log(result);

}


yardGreening(["150"]);