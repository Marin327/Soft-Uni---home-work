function solve(input) {
    let name = input[0];
    let bestPoints = 0;
    winner = "";

    let index = 0;
    index++;

    while (name !== "Stop") {
        let currentPoints = 0;
        for (let i = 0; i < name.length; i++) {
            let number = Number(input[index]);
            if (number !== name) {
                currentPoints += 10;
            } else {
                currentPoints += 2;
            }

        }

        if (currentPoints >= bestPoints ) {
            bestPoints = currentPoints;
            winner = name;
        }
        name = input[index];
       index++;

    }
    console.log(`The winner is ${winner} with ${bestPoints} points!`);
}

solve(["Ivan",
    "73",
    "20",
    "98",
    "110",
    "Ivo",
    "80",
    "65",
    "87",
    "Stop"])