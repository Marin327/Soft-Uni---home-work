function solve(input) {
    let foodInGramms = Number(input.shift()) * 1000; //Закупеното количество храна за кученцето в килограми – цяло число в интервала [1 …100]
    let dailyFood = input.shift();
    let foodNeeded = 0;
    //На всеки следващ ред до получаване на команда Adopted ще получавате колко грама изяжда кученцето на всяко хранене - цяло число в интервала [10 …1000]
    while (dailyFood !== "Adopted") {
        dailyFood = +dailyFood;

        foodNeeded += dailyFood;
        dailyFood = input.shift();

    }
    if (foodNeeded <= foodInGramms) {
        console.log(`Food is enough! Leftovers: ${foodInGramms - foodNeeded} grams.`);
    } else {
        console.log(`Food is not enough. You need ${foodNeeded - foodInGramms} grams more.`);
    }
}
solve(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"
])

//Закупеното количество храна е 4 кг = 4 * 1000 = 4000 грама.
//Общото количество храна, което е изяло кученцето преди да бъде осиновено е: 
//130 + 345 + 400 + 180 + 230 + 120 = 1405 грама. Това количество е по-малко от първоначалното закупено 
//(4000 грама) => остава храна, която е 4000 – 1405 = 2595 грама