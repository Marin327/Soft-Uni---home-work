function solve(input) {
    let numberPeople = Number(input[0]);
    let season = input[1] ;

    let pricePerPerson = 0;
    let sumTotal = 0;
   
    switch (season) {
      case "spring":
        if (numberPeople <= 5) {
          pricePerPerson = 50;
          sumTotal = numberPeople * pricePerPerson;
        } else if (numberPeople > 5) {
          pricePerPerson = 48;
          sumTotal = numberPeople * pricePerPerson;
        }
        break;
   
      case "summer":
        if (numberPeople <= 5) {
          pricePerPerson = 48.50;
          sumTotal = numberPeople * pricePerPerson;
        } else if (numberPeople > 5) {
          pricePerPerson = 45;
          sumTotal = (numberPeople * pricePerPerson) * 0.85;
        }
        break;
   
      case "autumn":
        if (numberPeople <= 5) {
          pricePerPerson = 60;
          sumTotal = numberPeople * pricePerPerson;
        } else if (numberPeople > 5) {
          pricePerPerson = 49.50;
          sumTotal = numberPeople * pricePerPerson;
        }
        break;
   
      case "winter":
        if (numberPeople <= 5) {
          pricePerPerson = 86;
          sumTotal = numberPeople * pricePerPerson;
        } else if (numberPeople > 5) {
          pricePerPerson = 85;
          sumTotal = (numberPeople * pricePerPerson) * 1.08;
        }
        break;
    }
   
    console.log(`${sumTotal.toFixed(2)} leva.`);
  }
solve(["5", "spring"]);