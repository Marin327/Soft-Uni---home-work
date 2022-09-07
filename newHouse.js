function newHouse(input) {
  let flowerType = input.shift();
  let flowerCount = Number(input.shift());
  let budget = Number(input.shift());

  let flowerPrice = 0;
  switch (flowerType) {
      case "Roses":
          flowerPrice = flowerCount > 80 ? 5.00 * 0.90 : 5.00;
          // if (flowerCount > 80) {
          //     flowerPrice = 5.00 * 0.90;
          // } else {
          //     flowerPrice = 5.00;
          // }
          break;
      case "Dahlias":
          flowerPrice = flowerCount > 90 ? 3.80 * 0.85 : 3.80;
          break;
      case "Tulips":
          flowerPrice = flowerCount > 80 ? 2.80 * 0.85 : 2.80;
          break;
      case "Narcissus":
          flowerPrice = flowerCount < 120 ? 3.00 * 1.15 : 3.00;
          break;
      case "Gladiolus":
          flowerPrice = flowerCount < 80 ? 2.50 * 1.20 : 2.50;
          break;
  }

  let totalPrice = flowerCount * flowerPrice;

  let result = Math.abs(budget - totalPrice);
  if (totalPrice > budget) {
      console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`);
  } else {
      console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${result.toFixed(2)} leva left.`);
  }
}
 
newHouse(["Roses", "55", "250"]);
//newHouse(["Tulips", "88", "260"]);
//newHouse(["Narcissus", "119", "300"]);