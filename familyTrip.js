function solve(input) {
    let budget = Number(input[0]); //· Бюджетът, с който разполагат – реално число в интервала [1.00 … 10000.00]
    let nightsCnt = Number(input[1]); //· Брой нощувки – цяло число в интервала [0 … 1000]
    let nightsPrice = Number(input[2]); //· Цена за нощувка – реално число в интервала [1.00 … 500.00]
    let percent = Number(input[3]); //· Процент за допълнителни разходи – цяло число в интервала [0 … 100

    if (nightsCnt > 7) {
        nightsPrice *= 0.95;
    }
    let totalNightPrice = nightsCnt * nightsPrice;
    let addinationalCosts = budget * (percent / 100);

    let totalPrice = totalNightPrice + addinationalCosts;

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