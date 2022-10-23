function solve(input) {
    let budget = Number(input[0]);
    let nightCnt = Number(input[1]);
    let nightPrice = Number(input[2]);
    let percent = Number(input[3]);

    if (nightCnt > 7) {
        nightPrice = nightPrice * 0.95;
    }

    let totalNightPrice = nightCnt * nightPrice;
    let additionalCosts = budget * (percent / 100.0);

    let totalPrice = totalNightPrice + additionalCosts;

    if (totalPrice > budget) {
        let moneyNeed = totalPrice - budget;
        console.log(`${moneyNeed.toFixed(2)} leva needed.`);
    } else {
        let moneyLeft = budget - totalPrice;
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
    }
}
        solve([
            "800.50",
            "8",
            "100",
            "2"
        ])