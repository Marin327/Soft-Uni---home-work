function whileDemo (inputNumbers) {
 let currentNumber = inputNumbers[0];
 let counter = 1;
        while (currentNumber < 1 || currentNumber > 100) {
            console.log('Invalid number');
            currentNumber = inputNumbers[counter];
            counter++;
        }
        console.log('Valid');
    }
        whileDemo([105,  0, - 200, 77])