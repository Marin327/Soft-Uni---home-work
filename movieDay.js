function solve(input) {
    let photoTime = Number(input.shift()); //Време за снимки – цяло число в диапазона [0… 1440]
    let numScena = Number(input.shift()); //Брой сцени  – цяло число в диапазона [5… 25]
    let totalScena = Number(input.shift()); //Времетраене на сцена – цяло число в диапазона [20… 90]

    let terenCnt = photoTime * 0.15; // Подготовката на терен => 120 * 0.15 = 18 минути.
    let totalScenaCount = numScena * totalScena; //Време за заснемане на сцените => 10 * 11 = 110
    let totalTime = totalScenaCount + terenCnt; //Необходимо време: 128 минути

    if(totalTime <= photoTime){
        console.log(`You managed to finish the movie on time! You have ${Math.round(photoTime - totalTime)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${totalTime - photoTime} minutes.`);
    }
}

solve(["120", "10", "11"])