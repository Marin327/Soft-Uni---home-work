function solve(input) {
    let days = Number(input.shift()); //⦁	Брой дни – цяло число в диапазона [1…30]
    let allFood = Number(input.shift()); // Общо количество храна – реално число в диапазона [0.00…10000.00]

    let dogFood = 0; // Количество изядена храна от кучето – цяло число в диапазона [10…500]
    let catFood = 0; //	Количество изядена храна от котката – цяло число в диапазона [10…500]
    let coocies = 0;
    let foodTogether = 0;

for(let i =1; i <= days; i++) {
    let dog = Number(input.shift());
    let cat = Number(input.shift());
    let foodPerDays = 0;
    dogFood += dog;
    catFood += cat;
    foodPerDays += dog + cat;
    foodTogether += foodPerDays;

    if(i % 3 == 0) {
   coocies += foodPerDays * 0.10;
    } 
}
    coocies = Math.round(coocies);
    console.log(`Total eaten biscuits: ${coocies}gr.`);
    let totalFoodPercentage = foodTogether / allFood * 100;
    console.log(`${totalFoodPercentage.toFixed(2)}% of the food has been eaten.`);
    let dogPercentage = dogFood / foodTogether * 100;
    console.log(`${dogPercentage.toFixed(2)}% eaten from the dog.`);
    let carPercentage = catFood / foodTogether * 100;
    console.log(`${carPercentage.toFixed(2)}% eaten from the cat.`);

}
solve(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"
])

//Имаме 3 дена и общо количество храна 1000гр.
//На първия ден:
//Кучето изяжда 300гр, котката изяжда 20гр.
//На втория ден:
//Кучето изяжда 100гр, котката изяжда 30гр.
//На третия ден:
//Кучето изяжда 110гр, котката изяжда 40гр.
//На този ден трябва да получат и награда – бисквитки:
//10% от 110 + 40 – 15гр.
//Общо изядена храна: 600гр.
//Изядена храна от кучето: 510гр, от котката: 90гр.
//600гр от 1000гр = 60% от храната е изядена.
//510гр от 600гр = 85% е изяло кучето.
//90гр от 600гр = 15% е изяла котката.