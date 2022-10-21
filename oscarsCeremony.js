function solve(input) {
    // наем на заплата
 let priceMoney = Number(input[0]);

    // Цена за статуетки: 3500 – 30% = 2450
    let priceStatuetki = priceMoney * 0.70;

    // Цена за кетъринг: 2450 – 15% = 2082.5
    let priceCatering = priceStatuetki * 0.85;

    // Цена за озвучаване: 1 / 2 от 2082.5 = 1041.25
    let priceMusic =  priceCatering / 2;
    // Обща цена за разходите: 3500 + 2450 + 2082.5 + 1041.25 = 9073.75

    let totalCount = priceMoney +  priceStatuetki + priceCatering + priceMusic;

    console.log(totalCount.toFixed(2));


}
solve(["3500"])