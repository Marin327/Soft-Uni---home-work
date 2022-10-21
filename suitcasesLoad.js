function solve(input) {
    let capacity = Number(input.shift());
    let index = 0;
    let baggageCounter = 0;

    let command = input.shift();

    while (command !== 'End') {
        let baggage = Number(command);
        index++;

        if (index % 3 === 0) {
            baggage = baggage * 1.10;
        }
        if (capacity - baggage < 0) {
            break;
        }
        baggageCounter++;
        capacity -= baggage;
        command = input.shift();
    }
    if (command === 'End') {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${baggageCounter} suitcases loaded.`);
    } else {
        console.log("No more space!");
        console.log(`Statistic: ${baggageCounter} suitcases loaded.`);
    }
}
solve(["550",
    "100",
    "252",
    "72",
    "End"
])




//Капацитетът на багажника е 550.
//На следващия ред получаваме обем на куфар 100.
//От общия обем вадим обема на първия куфар и го товарим. Вече имаме един натоварен куфар.
//Останало пространство: 550 – 100 = 450.
//На следващия ред получаваме обем на куфар 252.
//От общия обем вадим обема на втория куфар и го товарим. Имаме втори куфар, който е натоварен успешно. 
//Останало пространство: 450 – 252= 198.
//На следващия ред получаваме обем на куфар 72, тъй като това е трети куфар трябва да увеличим обема му с 10% и той става 79.2.
//От общия обем вадим обема на третия куфар и го товарим. Имаме трети успешно натоварен куфар.
//Останало пространство: 198 – 79.2 = 118.8
//Получаваме команда "End" и принтираме съответния изход