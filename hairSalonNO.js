function solve(input) {
    let index = 0;
    let dailyGoal = Number(input[0]);
    moneyCount = 0;
    
   command = input[index];
   index++;

    while(moneyCount < dailyGoal) {
        command = Number(input[index]);
        index++;
    }
    if (command !== "closed") {
        type = Number(input[index]);
        index++;
    }
    if (command === "haircut") {

        if (type === "mens") {
            moneyCount += 15;
        }
        if (type === "ladies") {
            moneyCount += 20;
        }
        if (type === "kids") {
            moneyCount += 10;
        }
        if (command === "color") {
            if (type === "touch up") {
                moneyCount += 20;
            }
            if (type === "full color") {
                moneyCount += 30;
            }
            if (command === "closed") {
                
            }
        }
        if (moneyCount >= dailyGoal) {
            console.log("You have reached your target for the day!");
        } else {
            diff = abs(dailyGoal - moneyCount);
            console.log(`Target not reached! You need ${diff}lv. more.`);
            console.log(`Earned money: ${moneyCount}lv.`);
        }
    }
}
solve(["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"])