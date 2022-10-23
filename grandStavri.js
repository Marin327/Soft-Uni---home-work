function solve(input) {
    let n = Number(input.shift());
    kol = 0;
    gr = 0;
    allKol = 0;
    gradus = 0;
    allGr = 0;
    totalGr = 0;

    for (let i = 1; i <= n; i++) {
        kol = Number(input.shift());
        gr = Number(input.shift());

        gradus = kol * gr;
        allKol += kol;
        allGr += gradus;
    }
    totalGr = allGr / allKol;
    console.log(`Liter: ${allKol.toFixed(2)}`);
    console.log(`Degrees: ${totalGr.toFixed(2)}`);
    if (totalGr < 38) {
        console.log("Not good, you should baking!");
    } else if (totalGr >= 38 && totalGr <= 42) {
        console.log("Super!");
    } else if (totalGr > 42) {
        console.log("Dilution with distilled water!");
    }
}
solve(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"
])