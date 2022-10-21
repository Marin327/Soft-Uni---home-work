function solve(input) {
    let fruit = input[0];
    let sizeSet = input[1];
    let countSet = Number(input[2]);
     let priceForPackage = 0;
    
    if (sizeSet === "big") {
        switch (fruit) {
            case "Watermelon":
                priceForPackage = 5 * 28.70;
                break;
            case "Mango":
                priceForPackage = 5 * 19.60;
                break;
            case "Pineapple":
                priceForPackage = 5 * 24.80;
                break;
            case "Raspberry":
                priceForPackage = 5 * 15.20;
                break;
        }

    }
    if (sizeSet === "small") {
        switch (fruit) {
            case "Watermelon":
                priceForPackage = 2 * 56;
                break;
            case "Mango":
                priceForPackage = 2 * 36.66;
                break;
            case "Pineapple":
                priceForPackage = 2 * 42.10;
                break;
            case "Raspberry":
                priceForPackage = 2 * 20;
                break;
        }
    }

    let priseForSet = countSet * priceForPackage;
    let discount = 0;
    let totalPrice = 0;
    if (400 <= priseForSet && priseForSet <= 1000) {
        discount = priseForSet * 0.15;
        totalPrice = priseForSet - discount;
        console.log(`${totalPrice.toFixed(2)} lv.`);
    } else if (priseForSet < 400) {
        console.log(`${(priseForSet).toFixed(2)} lv.`);
    } else if (priseForSet > 1000) {
        discount = priseForSet * 0.50;
        totalPrice = priseForSet - discount;
        console.log(`${totalPrice.toFixed(2)} lv.`)
    }
}
    solve(["Watermelon",
        "big",
        "4"])