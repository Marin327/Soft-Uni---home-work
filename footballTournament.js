function solve(input) {
    let nameFootballClub = input.shift();
    let gamesCount = Number(input.shift());

    let totalPoints = 0;
    let totalWins = 0;
    let totalDraws = 0;

    for (let i = 0; i < gamesCount; i++) {
        gameType = input.shift();

        if (gameType == "W") {
            totalPoints += 3;
            totalWins++;
        } else if (gameType == "D") {
            totalPoints += 1;
            totalDraws++;
        }
    }

    if (gamesCount == 0) {
        console.log(`${nameFootballClub} hasn't played any games during this season.`);

    } else {
        winRate = totalWins * 1.0 / gamesCount * 100;

        console.log(`${nameFootballClub} has won ${totalPoints} points during this season`);
        console.log("Total stats:");
        console.log(`## W: ${totalWins}`);
        console.log(`## D: ${totalDraws}`);
        console.log(`## L: ${gamesCount - totalWins - totalDraws}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);

    }

}

solve(["Liverpool",
    "10",
    "W",
    "D",
    "D",
    "W",
    "L",
    "W",
    "D",
    "D",
    "W",
    "W"
])