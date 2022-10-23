function solve(input) {
    let packageAmount = Number(input[0]); // Първи ред – брой ролки опаковъчна хартия - цяло число в интервала [0...100]
    let textileAmount = Number(input[1]); //Втори ред – брой ролки плат - цяло число в интервала [0...100]
    let glueAmount = Number(input[2]); //Трети ред –  литри лепило - реално число в интервала [0.00…50.00]
    let discount = Number(input[3]) / 100; //Четвърти ред – процент намаление - цяло число в интервала [0...100

    let packagePaperPrice = 5.80;
    let textilePrice = 7.20;
    let gluePrice = 1.20;

    let packageTotal = packagePaperPrice * packageAmount; // Цена на ролките хартия => 2 * 5.80 = 11.60
    let textileTotal = textilePrice * textileAmount; // Цена на ролките плат => 3 * 7.20 = 21.60
    let glueTotal = gluePrice * glueAmount; // Цена на лепилото => 2.5 * 1.20 = 3.00
    let moneyNeeded = (packageTotal + textileTotal + glueTotal) *( 1 - discount); // Цена за всички материали => 11.60 + 21.60 + 3.00 = 36.20
   
    console.log(`${moneyNeeded.toFixed(3)}`);
}

solve(["2",
    "3",
    "2.5",
    "25"
])