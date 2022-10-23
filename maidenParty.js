function solve(input) {
    let priceParty = Number(input[0]); // Цена на моминското парти - реално число в интервала [1.00 … 10000.00]
    let messageLoveCount = Number(input[1]); // Брой любовни послания - цяло число в интервала [0… 1000]
    let rosesCount = Number(input[2]); // Брой восъчни рози - цяло число в интервала [0 … 1000]
    let keychainCount = Number(input[3]); // Брой ключодържатели - цяло число в интервала [0 … 1000]
    let caricatureCount = Number(input[4]); // Брой карикатури - цяло число в интервала [0 … 1000]
    let surprisesCount = Number(input[5]); // Брой късмети изненада - цяло число в интервала [0 … 1000]

   

    let messageLove = 0.60; // Любовно послание - 0.60 лв.
    let roses = 7.20; //· Восъчна роза - 7.20 лв.
    let keychain = 3.60; //· Ключодържател - 3.60 лв.
    let caricature = 18.20; //· Карикатура - 18.20 лв.
    let surprises = 22; //· Късмет изненада - 22 лв.

// Сума: 20 * 0.60 + 25 * 7.20 + 30 * 3.60 + 50 * 18.20 + 10 * 22 = 1430 лв.
    let total = (messageLoveCount * messageLove) + ( rosesCount * roses) + (keychainCount * keychain) + (caricatureCount * caricature) + (surprisesCount * surprises);

    // Брой на артикулите: 20 + 25 + 30 + 50 + 10 = 135
    let numberArticul = messageLoveCount + rosesCount + keychainCount + caricatureCount + surprisesCount;
    // Проверяваме дали има отстъпка: 135 > 25 => 35 % отстъпка
    if(numberArticul > 25) {
        numberArticul *= 0.35;
    }
// Отстъпка: 35 % от 1430 = 500.50 лв.
    let numberArticulCount = total * 0.35;

    // Крайна цена: 1430– 500.50 = 929.50 лв.
    let totalMoneyNeeded = total - numberArticulCount;

    // Разход за хостинг: 10 % от 929.50 лв. = 92.95 лв.
   let holding = (totalMoneyNeeded / 10);
   
   let pechalba = totalMoneyNeeded - holding; // Печалба: 929.50– 92.95 = 836.55 лв.
   //836.55 > 40.80 => 836.55– 40.80 = 795.75 лв.остават
  if(pechalba > priceParty) {
  let pechalbaCnt = pechalba - priceParty;
    console.log(`Yes! ${pechalbaCnt.toFixed(2)} lv left.`);
  } else{
    let pechalbaCountMoney = priceParty - pechalba;
    console.log(`Not enough money! ${pechalbaCountMoney.toFixed(2)} lv needed.`);
    }
}
    solve(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])