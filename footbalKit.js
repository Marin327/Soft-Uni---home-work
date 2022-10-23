function solve([arg1, arg2]){
    let tshirtPrice = Number(arg1);
    let sum = Number(arg2);

    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let shoesPrice = (tshirtPrice + shortsPrice)* 2;
    let totalPrice = (tshirtPrice + shortsPrice + socksPrice + shoesPrice);

    let discout = totalPrice * 0.15;

    let discountedPrice = (totalPrice - discout);

    let moneyNeeded = (sum - discountedPrice).toFixed(2);

 

    if (discountedPrice >= sum){
        console.log ("Yes, he will earn the world-cup replica ball!");
        console.log (`His sum is ${(discountedPrice).toFixed(2)} lv.`);
    } else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log (`He needs ${moneyNeeded} lv. more.`);
    }
}
solve(["25",
    "100"])