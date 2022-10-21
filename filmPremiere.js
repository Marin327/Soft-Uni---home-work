function solve(input) {

    let project = input[0]; //Първи ред - прожекция - текст с възможности"John Wick", "Star Wars" или "Jumanji"
    let packetFilm = input[1]; //Втори ред - пакет за филм - текст  с възможности "Drink", "Popcorn" или "Menu"
    let tickets = Number(input[2]); //Трети ред - брой билети - цяло число в интервала [1… 30]

    let price = 0;

    //      John Wick	 Star Wars	 Jumanji
    //Напитка	12 лв./бр.	18 лв. /бр.	9 лв. /бр.
    //Пуканки	15 лв. /бр.	25 лв. /бр.	11 лв. /бр.
    //Меню	    19 лв. /бр.	30 лв. /бр.	14 лв. /бр.
    switch (project) {
        case "John Wick":
            switch (packetFilm) {
                case "Drink":
                    price = 12;
                    break;
                case "Popcorn":
                    price = 15;
                    break;
                case "Menu":
                    price = 19;
                    break;
            }
            break;

        case "Star Wars":
            switch (packetFilm) {
                case "Drink":
                    price = 18;
                    break;
                case "Popcorn":
                    price = 25;
                    break;
                case "Menu":
                    price = 30;
                    break;
            }
            break;
        case "Jumanji":
            switch (packetFilm) {
                case "Drink":
                    price = 9;
                    break;
                case "Popcorn":
                    price = 11;
                    break;
                case "Menu":
                    price = 14;
                    break;
            }
            break;
    }
    let totalPrice = tickets * price;
    if (project == "Star Wars" && tickets >= 4) {
        totalPrice = totalPrice - 0.3 * totalPrice; //0.7 * totalPrice
    } else if (project == "Jumanji" && tickets == 2) {
        totalPrice = totalPrice * 0.85;

    }
    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}
solve([
    "John Wick",
    "Drink",
    "6"
])