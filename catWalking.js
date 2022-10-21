 function solve([minPerDay, walks, calorie]) {
    // let min = Number(minPerDay;// На първия ред - минути разходка на ден - цяло число в интервала [1...50]
    // let days = Number(walks); //На втория ред - броят на разходките дневно - цяло число в интервала [1…10]
    // let cal = Number(calorie); //На третия ред - приетите от котката калории на ден – цяло число в интервала [100…4000]


     let end = calorie / 2; //Котката се разхожда 3 пъти по 30 минути => общо минути разходка -> 30 * 3 = 90 минути
     let burned = minPerDay * walks * 5; //Общо изгорени калории за един ден от разходки -> 90 * 5 = 450
     //50 % от приетите калории на ден са: 50% от 600 = 300
     //450 > 300 =>  разходката е достатъчна 
     if (burned >= end) {
         console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burned}.`);
     } else {
         console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burned}.`);
     }
 }

 solve(["30",
     "3",
     "600"])