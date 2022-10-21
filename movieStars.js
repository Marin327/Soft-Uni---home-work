function solve(input) {
    let budget = Number(input.shift()); // ⦁	Бюджет за актьори - реално число в интервала [1000.0... 2 100 000.0]
    let nameActior = input.shift(); //⦁	Име на актьор - текст
    let salary = input.shift(); //Възнаграждение - реално число в интервала [250.0… 1 000 000.0]

    //Бюджета е 90000
    //След заплатата на първият актьор: 70000.50 
    //Бюджета е 19999.5
    //Името на втория актьор е по-дълго от 15 символа => 20% от 19999.5 = 3999.9
    //Бюджета е 15999.6 след вторият актьор.
    //Последната заплата е 24000.99 => 15999.6 – 24000.99 = - 8001.39
    //Бюджета не е недостатъчен. 
    while(nameActior !== "ACTION") {
     if(input.length <= 15) {
        budget -= budget * 0.2;
     }    else {
        salary = input.shift();
        budget -= salary;
     }
     if(budget > 0) {
        break;
     }
     nameActior = input.shift();
    }
if(nameActior !== "ACTION") {
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
} else {
    console.log(`We need ${(Math.abs(budget)).toFixed(2)} leva for our actors.`);
 }
}

solve(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])