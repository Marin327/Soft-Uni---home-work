function solve(arg1, arg2) {
    let order = arg1;
    let number = Number(arg2);

//⦁	coffee - 1.50
//⦁	water - 1.00
//⦁	coke - 1.40
//⦁	snacks - 2.00
    switch(order) {
case "coffee":
    console.log(`${(number * 1.50).toFixed(2)}`);
    break;
    case "water":
        console.log(`${(number * 1.00).toFixed(2)}`);
        break;
        case "coke":
            console.log(`${(number * 1.40).toFixed(2)}`);
            break;
            case "snacks":
                console.log(`${(number * 2.00).toFixed(2)}`);
                break;
                default:
                    break;
    }
}
solve("water", 5)
//solve("coffee", 2)