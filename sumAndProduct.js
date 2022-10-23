function solve(input) {
    let number = input.shift();

for (let a = 1; a <= 9; a++){
    for (let b = 9; b >= a; b--){
        for (let c = 0; c <= 9; c++) {
            for (let d = 9; d >= c; d--) {
                let sum = a + b + c + d;
                let mult = a * b * c * d;

                if (sum === mult && number % 10 === 5) {
                    console.log(`${a}${b}${c}${d}`);
                    return;
                } else if (mult / sum === 3 && number % 3 === 0) {
                    console.log(`${d}${c}${b}${a}`);
                    return;
                }
            }
        }
        }

        }
 console.log("Nothing found");
}


solve(["123"])