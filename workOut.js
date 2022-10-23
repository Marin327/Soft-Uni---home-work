function solve(input) {
    let n = Number(input.shift());
    let M = Number(input.shift());
    let sum = M;

    for (let i = 0; i < n; i++) {
        let K = Number(input.shift());
        M *= 1 + (K / 100.0);
        sum += M;
    }
    if (sum >= 1000) {
        console.log(`You've done a great job running ${(Math.ceil(sum - 1000.00))} more   kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${(Math.ceil(1000.00 - sum))} more kilometers`);

    }
}


solve(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"
])