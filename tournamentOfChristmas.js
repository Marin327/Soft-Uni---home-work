function solve(input) {
    let days = Number(input[0]);
    let totalSum = 0;
    let sumPerDay = 0;
    let numberWinPerDay = 0;
    let numberLosePerDay = 0;
    let daysWin = 0;
    let daysLose = 0;
    let index = 1;
    
    for (let i = 0; i < days; i++) {
        let game = input[index];
    
        while (game !== "Finish") {
            index++;
            let res = input[index];
            if (res === "win") {
                sumPerDay += 20;
                numberWinPerDay += 1;
            } else if (res == "lose") {
                numberLosePerDay += 1;
            }
            index++;
            game = input[index];
        }
        if (numberWinPerDay > numberLosePerDay) {
            sumPerDay *= 1.1;
            daysWin += 1;
        } else {
            daysLose += 1;
        }
        totalSum += sumPerDay;
        sumPerDay = 0;
        numberWinPerDay = 0;
        numberLosePerDay = 0;
        index++;
    }
    if (daysWin > daysLose) {
        let totalWinSum = totalSum * 1.2;
        console.log(`You won the tournament! Total raised money: ${totalWinSum.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalSum.toFixed(2)}`);

    }
}
solve(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])