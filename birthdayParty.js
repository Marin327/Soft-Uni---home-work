function solve(input) {
    let naem = Number(input); // Наем за залата – реално число в интервала [100.00..10000.00]

    let cake = naem * 0.20; // цена за тортата: 2250 * 20% = 450
    let drinks = cake  * 0.55; // цена за напитки: 450 – 45% = 247.5
    let animator = naem * (1 / 3); // Аниматор – цената му е 1/3 от цената за наема на залата
    let total = naem + cake + drinks + animator; // необходима сума: 2250 + 450 + 247.5 +750 = 3697.5
    console.log(total); // тотал
}
solve(["2250"])