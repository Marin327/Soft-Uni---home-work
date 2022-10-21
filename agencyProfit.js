function solve(input) {
    let nameAviation = input[0]; // Име на авиокомпанията - текст
    let ticketsCount = Number(input[1]); //Брой билети за възрастни – цяло число в диапазона [1…400]
        let kidTickets = Number(input[2]); //Брой детски билети – цяло число в диапазона [25…120]
        let moneyTickets = Number(input[3]); //Нетна цена на билет за възрастен – реално число в диапазона [100.0…1600.0]
        let priceTax = Number(input[4]); //Цената на такса обслужване - реално число в диапазона [10.0…50.0]
      
        let moneyTicketsCount = moneyTickets * 0.30; // Нетна цената на детски билет: 120 - 70% = 36лв

        let moneyTaxCount = moneyTickets + priceTax; // Цена на билет за възрастен с такса обслужване: 120 +  40 = 160 лв.

        let moneyKidTax = moneyTicketsCount + priceTax; // Цена на детски билет с такса обслужване: 36  +  40 = 76 лв.

        let totalTickets = (kidTickets * moneyKidTax) + (ticketsCount * moneyTaxCount); // Общата цена на всички билети: (5 * 76) + (15 * 160)  = 2780 лв.

        let budgetPrice = totalTickets * 0.20; // Печалба: 20% от 2790 = 556 лв.
        
        console.log(`The profit of your agency from ${nameAviation} tickets is ${budgetPrice.toFixed(2)} lv.`);

    }
    solve([
        "WizzAir",
        "15",
        "5",
        "120",
        "40"
    ])


    