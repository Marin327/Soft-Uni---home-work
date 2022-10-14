function solve([arg1, arg2, arg3]) {
    let drink = arg1;
    let sugar = arg2;
    let cups = Number(arg3);

    let price = 0;

    switch (drink) {
        case "Espresso":
            if ("Without" == sugar) {
                price = price + 0.90 * cups;
                price = price * 0.65;
            } else if ("Normal" == sugar) {
                price = price + 1.00 * cups;
            } else if ("Extra" == sugar) {
                price = price + 1.20 * cups;
            }
            if (price >= 5) {
                price = price * 0.75;
            }
            break;
        case "Cappuccino":
            if ("Without" == sugar) {
                price = price + 1.00 * cups;
                price *= 0.65;
            } else if ("Normal" == sugar) {
                price = price + 1.20 * cups;
            } else if ("Extra" == sugar) {
                price = price + 1.60 * cups;
            }
            break;
        case "Tea":
            if ("Without" == sugar) {
                price = price + 0.50 * cups;
                price *= 0.65;
            } else if ("Normal" == sugar) {
                price = price + 0.60 * cups;
            } else if ("Extra" == sugar) {
                price = price + 0.70 * cups;
            }
            break;
    }
    if (price > 15.0) {
        price = price * 0.8;
    }

    console.log(`You bought ${cups} cups of ${drink} for ${price.toFixed(2)} lv.`);
}

solve(["Cappuccino", "Normal", "13"]);