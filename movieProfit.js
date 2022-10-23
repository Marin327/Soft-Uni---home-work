function solve(input) {
    let nameFilm = input[0]; // Име на филм - текст
    let numberDay = Number(input[1]); // Брой дни - цяло число в диапазона [1… 90]
    let tickets = Number(input[2]); // Брой билети  - цяло число в диапазона [100… 100000]
    let priceTikcets = Number(input[3]); // Цена на билет - реално число в диапазона [5.0… 25.0]
    let percent = Number(input[4]); // Процент за киното - цяло число в диапазона [5... 35]

    let priceTikcetsDays = tickets * priceTikcets; //Цената на билетите за ден => 500 * 7.50 = 3750 lv.
    let pricePeriod = numberDay * priceTikcetsDays; //Приходи за целия период => 20 * 3750 = 75000 lv.


    let percentCount = pricePeriod * percent / 100; //Процент от приходите остава за киното 75000 * 7 / 100 = 5250 lv.
    let filmsPrice = pricePeriod - percentCount; //Приход от филма = 75000 - 5250 = 69750 lv.

    console.log(`The profit from the movie ${nameFilm} is ${filmsPrice.toFixed(2)} lv.`);
}
solve([
    "The Programmer",
    "20",
    "500",
    "7.50",
    "7"
])