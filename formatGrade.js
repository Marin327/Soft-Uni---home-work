function solve(grade) {
let desc;
let formattedGrade = grade.toFixed(2);
if(grade < 3) {
    desc = "Fail";
    formattedGrade = 2;
} else if(grade < 3.50) {
    desc = "Poor";
} else if( grade < 4.50) {
    desc = "Good";
} else if (grade < 5.50) { 
    desc = "Very good";
} else {
    desc = "Excellent";
}
console.log(` ${desc} (${formattedGrade})`);
}
solve(2.99);
solve(3.00);
solve(3.50);
solve(4.50);
solve(5.50);