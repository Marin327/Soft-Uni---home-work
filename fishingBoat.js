function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishCount = Number(input[2]);
    let price = 0;

    switch(season) {
        case "Spring":
            price = 3000;
            if(fishCount <= 6) {
                price *= 0.90;
        }    else if(fishCount >= 7 && fishCount <= 11) {
                price *= 0.85;
            } else if(fishCount >= 12) {
                price *= 0.75;
            }
    break;
 case "Summer":
    price = 4200;
    if(fishCount <= 6) {
        price *= 0.90;
    } else if (fishCount >= 7 && fishCount <= 11) {
        price *= 0.85;
    } else if (fishCount >= 12) {
        price *= 0.75;
    }
    break;
    case "Autumn":
        price = 4200;
        if(fishCount <= 6) {
            price *= 0.90;
        } else if(fishCount >= 7 && fishCount <= 11) {
            price *= 0.85; 
        } else if(fishCount >= 12) {
            price *= 0.75;
        }
       break;
       case "Winter":
        price = 2600;
        if(fishCount <= 6) {
            price *= 0.90;
        } else if(fishCount >= 7 && fishCount <= 11) {
            price &= 0.85;
        } else if(fishCount >= 12) {
            price *= 0.75;
        }
       break;
    }
    if(fishCount % 2 == 0 && season !== "Autumn") {
        price = price * 0.95;
    }
       let diff = Math.abs(budget - price);
       if(budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);

       } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
       }
    }

    solve([
        "3000",
        "Summer",
        "11"
        ])