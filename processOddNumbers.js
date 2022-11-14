function solve(numbers) {
let filterEl = numbers.filter((el,i) => i % 2 == 1);

let doubleNumbers = filterEl.map(x=> x*2);

let reversedNumbers = doubleNumbers.reverse();
console.log(reversedNumbers.join(" "));
}
solve([10, 15, 20, 25])