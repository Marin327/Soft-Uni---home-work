function solve(input){
    let haveMoney = Number(input.shift()); // пари
    let sex = input.shift(); // пол
    let age = Number(input.shift()); // възраст
    let sport = input.shift(); // спорт
 
    let cardPrice = 0;
 
    if (sex === "m"){
        if (sport === "Gym"){
            cardPrice = 42;
            if (age <= 19){
                cardPrice = cardPrice * 0.80;
            }
        }else if (sport === "Boxing"){
            cardPrice = 41;
            if (age <= 19){
                cardPrice = cardPrice * 0.80;
            }
        }else if (sport === "Yoga"){
            cardPrice = 45;
            if (age <= 19){
                cardPrice = cardPrice * 0.80;
            }
        }else if (sport === "Zumba"){
            cardPrice = 34;
            if (age <= 19){
                cardPrice = cardPrice * 0.80; 
            }
        }else if (sport === "Dances"){
            cardPrice = 51;
            if (age <= 19){
                cardPrice = cardPrice * 0.80;
            }
        }else if (sport === "Pilates"){
            cardPrice = 39;
            if (age <= 19){
                cardPrice = cardPrice * 0.80;
            }
        }
    }else if (sex === "f"){
        if (sport === "Gym"){
            cardPrice = 35;
            if (age <= 19){
                cardPrice = cardPrice * 0.80;
            }
        }else if (sport === "Boxing"){
            cardPrice = 37;
            if (age <= 19){
                cardPrice = cardPrice * 0.80;
            }
        }else if (sport === "Yoga"){
            cardPrice = 42;
            if (age <= 19){
                cardPrice = cardPrice * 0.80;
            }
        }else if (sport === "Zumba"){
            cardPrice = 31;
            if (age <= 19){
                cardPrice = cardPrice * 0.80; 
            }
        }else if (sport === "Dances"){
            cardPrice = 53;
            if (age <= 19){
                cardPrice = cardPrice * 0.80;
            }
        }else if (sport === "Pilates"){
            cardPrice = 37;
            if (age <= 19){
                cardPrice = cardPrice * 0.80;
            }
        }
        
    }
if (haveMoney >= cardPrice){
    console.log(`You purchased a 1 month pass for ${sport}.`)
} else {
    let difference = cardPrice - haveMoney;
    console.log(`You don't have enough money! You need $${difference.toFixed(2)} more.`)
   }
 
}
    solve(["50", "m", "23", "Gym"])
 