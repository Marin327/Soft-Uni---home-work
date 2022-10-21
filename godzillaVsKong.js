function solve(input) {
    let budget = Number(input[0]);
    let peopleStatis = Number(input[1]);
    let priceToOneStatis = Number(input[2]);

    // Сума за декор: 10% от 20000 = 2000 лв.
    let sumDecor = 0.1 * budget;
    // Сума за облекло: 120 * 55.5 = 6660 лв.
    let sumClothing = peopleStatis * priceToOneStatis;

    if (peopleStatis > 150) {
        sumClothing *= 0.9;
    }
    if (sumDecor + sumClothing > budget) {
        // Обща сума за филма: 2000 + 6660 = 8660 лв.
        let moneyNeed =(sumDecor + sumClothing) - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeed.toFixed(2)} leva more.`);
    } else {
        // 20000 – 8660 = 11340 лева остават.
        let moneyLeft = budget - (sumDecor + sumClothing);
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}

solve(["20000", "120", "55.5"])