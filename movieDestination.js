function solve(input) {
    let budget = Number(input[0]); //Бюджет на филма – реално число в диапазона [100 000.0… 2 000 000.0]
    let destination = input[1]; //Дестинация – текст, с възможности "Dubai", "Sofia" и "London"
    let season = input[2]; //Сезон – текст, с възможности "Summer" и "Winter"
    let days = Number(input[3]);; //Брой дни – цяло число в диапазона [1… 40]

    let price = 0;

    switch (destination) {
        case "Dubai":
            switch (season) {
                case "Summer":
                    price = 40000;
                    break;
                case "Winter":
                    price = 45000;
                    break;

            }
            break;

        case "Sofia":
            switch (season) {
                case "Summer":
                    price = 12500;
                    break;
                case "Winter":
                    price = 17000;
                    break;

            }
            break;
        case "London":
            switch (season) {
                case "Summer":
                    price = 20250;
                    break;
                case "Winter":
                    price = 24000;

                    break;

            }
            break;

    }

    // Ако дестинацията е Дубай – 30% отстъпка от крайната цена;
    // Ако дестинацията е София – цената се оскъпява с 25%;
    let totalPrice = days * price;
    if (destination == "Dubai") {
        totalPrice = totalPrice * 0.7;
    } else if (destination == "Sofia") {
        totalPrice = totalPrice * 1.25;
    }
    // Дестинацията е София, което означава че имаме 25% оскъпяване на цената => 34000 + 25% = 425000 lv.
    //Бюджета 400000 - 425000 => не е достатъчен
    //Нужни са още 25000 lv
    if (budget >= totalPrice) {
        console.log(`The budget for the movie is enough! We have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}
solve(["1000000",
"Dubai",
"Summer",
"5"])