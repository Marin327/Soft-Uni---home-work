function solve(input) {
    let movie = input[0]; // switch
    let nameProject = input[1]; // normal, luxury, ultra luxury
    let ticketCount = Number(input[2]);
    let price = 0;

    switch (movie) {
        case "A Star Is Born": // nameProject
            switch (nameProject) {
                case "normal":
                    price = 7.50;
                    break;
                case "luxury":
                    price = 10.50;
                    break;
                case "ultra luxury":
                    price = 13.50;
                    break;
            }
            break;
        case "Bohemian Rhapsody": // nameProject
            switch (nameProject) {
                case "normal":
                    price = 7.35;
                    break;
                case "luxury":
                    price = 9.45;
                    break;
                case "ultra luxury":
                    price = 12.75;
                    break;
            }
            break;
        case "Green Book": // nameProject
            switch (nameProject) {
                case "normal":
                    price = 8.15;
                    break;
                case "luxury":
                    price = 10.25;
                    break;
                case "ultra luxury":
                    price = 13.25;
                    break;
            }
            break;
        case "The Favourite": // nameProject
            switch (nameProject) {
                case "normal":
                    price = 8.75;
                    break;
                case "luxury":
                    price = 11.55;
                    break;
                case "ultra luxury":
                    price = 13.95;
                    break;
            }
            break;
    }
    let profit = ticketCount * price;

    console.log(`${movie} -> ${profit.toFixed(2)} lv.`);
}

solve(["A Star Is Born", "luxury", "42"])