function solve(input) {
    let nameSerial = input[0]; // Име на сериал - текст
    let numberSerial = Number(input[1]);// Брой сезони – цяло число в диапазона [1… 10]
    let episode = Number(input[2]);// Брой епизоди – цяло число в диапазона [10… 80]
    let reklami = Number(input[3]);// Времетраене на обикновен епизод без рекламите – реално число в диапазона [40.0… 65.0]

    let totalReklami = reklami * 0.2;//Продължителност на реклами за един  епизод : 20% от 55 = 11.0;
    let totalReklams = reklami + totalReklami;//Продължителност на епизод с рекламите: 55 + 11 = 66.0;
    let totalCountTime = numberSerial * 10;//Допълнително време от специалните епизоди: 3*10 = 30;
    let totalTimes = totalReklams * episode * numberSerial + totalCountTime; 
    //Общо време за гледане на сериала: 66 * 18 * 3 + 30 = 3594.0;
    // console.log());
    console.log(`Total time needed to watch the ${nameSerial} series is ${totalTimes} minutes.`);
  

}
solve(["Lucifer", "3",  "18", "55"])