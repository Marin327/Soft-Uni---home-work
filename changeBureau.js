 function solve([arg1, arg2, arg3]) {
     let bitcoin = Number(arg1); // На първия ред – броят биткойни. Цяло число в интервала [0…20]
     let yuan = Number(arg2); // На втория ред – броят китайски юана. Реално число в интервала [0.00… 50 000.00]
     let comission = Number(arg3); // На третия ред – комисионната. Реално число в интервала [0.00 ... 5.00]

     comission = comission * 0.01; // 0.05;
     let allEuro = (yuan * 0.15 * 1.76 + bitcoin * 1168) / 1.95; // 1168 + 1.32 = 1169.32 лева = 599.651282051282 евро
     let charge = allEuro * comission; // Комисионна: 5% от 599.651282051282 = 29.9825641025641
     let result = allEuro - charge; // Резултат: 599.651282051282 - 29.9825641025641 = 569.668717948718 евро ~ 569.67
     console.log(result.toFixed(2)); // total

 }
 solve([
     "1",
     "5",
     "5"])