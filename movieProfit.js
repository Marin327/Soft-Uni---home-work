function solve(input) {
   let movieName = input[0]; // 1.Име на филм - текст
   let daysCount = Number(input[1]); // 2. Брой дни - цяло число в диапазона [1… 90]
   let screeningCount = Number(input[2]); // 3. Брой билети - цяло число в диапазона [100… 100000]
   let ticketsPrice = Number(input[3]); // 4. Цена на билет - реално число в диапазона [5.0… 25.0]
   let cinemaCntPercentage = Number(input[4]); // 5. Процент за киното - цяло число в диапазона [5... 35]

   let totalProfitPerDay = screeningCount * ticketsPrice; // Сума от билетите за ден => 500 * 7.50 = 3750 лв. 
   // console.log(ticketsCount);
   let totalProfit = daysCount * totalProfitPerDay; // Приходи за целия период => 20 * 3750 = 75000 лв. 
   // console.log(budgetTime);
   let cinemaCnt = totalProfit * (cinemaCntPercentage / 100) ; // Процент от приходите остава за киното: 7% от 75000 = 5250 lv.
   // console.log(percentCount);

   let totalRevenue = totalProfit - cinemaCnt; // Приход от филма = 75000 - 5250 = 69750 lv.
   // console.log(totalRevenue);
   console.log(`The profit from the movie ${movieName} is ${totalRevenue.toFixed(2)} lv.`);
}
solve([
   "The Programmer",
   "20",
   "500",
   "7.50",
   "7"
])