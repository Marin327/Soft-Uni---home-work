function solve(input) {
    let budget = Number(input.shift());
    let countWalkons = Number(input.shift());
    let priceClothes = Number(input.shift());
    
    let priceDecor = budget * 0.10;
    
    if(countWalkons > 150) {
        priceClothes -= priceClothes  * 0.10;
    }
    
    let totalPriceClothes = countWalkons * priceClothes;
    let neededMoney = priceDecor + totalPriceClothes;
    let result = Math.abs(budget - neededMoney);
    
    if (budget < neededMoney) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(result.toFixed(2))} leva more.`);
    
     } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`);
       }
    }
    solve([
    "20000",
    "120",
    "55.5"])