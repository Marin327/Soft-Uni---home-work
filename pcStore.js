function solve(input) {
    let priceCPU = Number(input[0]) * 1.57;
    let priceVGA = Number(input[1]) * 1.57;
    let priceRAM = Number(input[2]) * 1.57;
    let quantityRAM = Number(input[3]);
    let discount = Number(input[4]);

    let price = (priceCPU - priceCPU * discount) + (priceVGA - priceVGA * discount) + (priceRAM * quantityRAM);

    console.log(`Money needed - ${price} leva.`);

}
solve(["500",
    "200",
    "80",
    "2",
    "0.05"])