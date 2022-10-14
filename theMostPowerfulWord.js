function solve(input) {
    let mostPowerfulWord = "";
    let maxPower = 0;
    input = "";
    while (input !== "End of words") {
        inputSum = 0;
        for (let i = 0; i < input.length; i++) {
            inputSum += input.charAt(i);
        }
        numLength = input.length;
        let input2 = input[0];
        if (input2[0] == 'a' ||
            input2[0] == 'e' ||
            input2[0] == 'i' ||
            input2[0] == 'o' ||
            input2[0] == 'u' ||
            input2[0] == 'y') {
            inputSum = inputSum * numLength;
        } else {
            inputSum = Math.floor(inputSum / numLength);
        }
        if (inputSum > maxPower) {
            maxPower = inputSum;
            mostPowerfulWord = input;

        }
    }
    console.log(`The most powerful word is ${mostPowerfulWord } - ${maxPower}`);
}

solve(["The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"
])