function solve(input) {
    let city = input[0];
    let type = input[1];
    let vip = input[2];
    let days = Number(input[3]);

    // На конзолата се отпечатва 1 ред
    // Когато при въвеждането на града или вида на пакета се въведат невалидни данни, отпечатваме
    let invalidCase = false;
    let price = 0;

    switch (city) {
        case "Bansko":
            if (type === "noEquipment") {
                price = 80;

                if (vip === "yes") {
                    price *= 0.95;
                }

            } else if (type === "withEquipment") {
                price = 100;
                if (vip === "yes") {
                    price *= 0.90;
                }
            } else {
                console.log("Invalid input!");
                invalidCase = true;
            }
            break;

        case "Borovets":
            if (type === "noEquipment") {
                price = 80;
                if (vip === "yes") {
                    price *= 0.95;
                }
            } else if (type === "withEquipment") {
                price = 100;
                if (vip === "yes") {
                    price *= 0.90;
                }
            } else {
                console.log("Invalid input!");
                invalidCase = true;
            }
            break;

        case "Varna":
            if (type === "noBreakfast") {
                price = 100;

                if (vip === "yes") {
                    price *= 0.93;
                }
            } else if (type === "withBreakfast") {
                price = 130;
                if (vip === "yes") {
                    // price *= 78;
                    // VIP отстъпка 12%
                    price *= 0.88;
                }
            } else {
                console.log("Invalid input!");
                invalidCase = true;
            }
            break;

        case "Burgas":
            if (type === "noBreakfast") {
                price = 100;
                if (vip === "yes") {
                    price *= 0.93;
                }
            } else if (type === "withBreakfast") {
                price = 130;
                if (vip === "yes") {
                    // price *= 78;
                    // // VIP отстъпка 12%
                    price *= 0.88;
                }
            } else {
                console.log("Invalid input!");
                invalidCase = true;
            }
            break;

        default:
            console.log("Invalid input!");
            invalidCase = true;
            break;
    }

    if (days > 7) {
        // totalPrice = price * 7;
        // Ако клиентът е заявил престой повече от 7 дни, получава единия ден безплатно.
        days -= 1;
    }

    let totalPrice = price * days;

    if (invalidCase === false) {
        if (days >= 1) {
            console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
        } else {
            console.log("Days must be positive number!");
        }
    }
}

    solve(["Borovets",
                "noEquipment",
                "yes",
                "6"])
