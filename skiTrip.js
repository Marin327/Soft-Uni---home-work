function solve(input) {
let days = Number(input[0]);
let spaceType = input[1];
let rating = input[2];

let nights = days - 1; 
let totalPrice = 0;


switch(spaceType) {
 case "room for one person":
    totalPrice = 18 * nights;
    break;

    case "apartment":
     totalPrice = 25 * nights;
     

        if(nights < 10) {
            totalPrice = 0.7 * totalPrice;
        } else if (nights <= 15) {
            totalPrice = 0.65 * totalPrice;
        } else {
            totalPrice = 0.5 * totalPrice;
        }
      break;

  case "president apartment":
     totalPrice = 35 * nights;
    
   if(nights < 10) {
   totalPrice = 0.9 * totalPrice;

   } else if ( nights <= 15) {
    totalPrice = 0.85 * totalPrice;

   } else {
    totalPrice = 0.8 * totalPrice;
   }
   break;
}
if(rating === "positive") {
    totalPrice = totalPrice * 1.25;
} else {
    totalPrice = totalPrice * 0.9;
}
console.log(totalPrice.toFixed(2));
}

solve(["14", "apartment", "positive"]);
//solve(["30", "president apartment", "negative"]);
//solve(["12", "room for one person", "positive"]);
//solve(["2", "apartment", "positive"]);