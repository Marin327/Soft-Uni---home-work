function solve(number) {

let sumOfDevisors = 1;
for(let i = 2; i < number; i++){
    if(number % i === 0) {
        sumOfDevisors+= i;
    }
}
if(sumOfDevisors === number) {
    console.log("We have a perfect number!");
} else {
    console.log(" It's not so perfect.");
}
}
solve(6)