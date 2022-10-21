function solve(input) {
    let budget = Number(input.shift());
    let tickets = 0;
    let other = 0;

    let product = input.shift();
    while (product !== "End") {
        if (product > 8) {
            price = product;
            price += product;
            if (budget - price < 0) {
                break;
            } else {
                tickets++;
                budget -= price;
            }

        } else {
            price = product;
            if (budget - price < 0) {
                break;
            } else {
                other++;
                budget -= price;
            }

            product = input.shift();
           
        }
    }
    console.log(`${other}`);
    console.log(`${tickets}`);
}

solve(["1500",
    "Avengers: Endgame",
    "Bohemian Rhapsody",
    "Deadpool 2",
    "End"])