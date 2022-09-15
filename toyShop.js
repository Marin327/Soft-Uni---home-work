function solve(input) {
    let vacation = Number(input.shift());
    let puzels = Number(input.shift());
    let dols = Number(input.shift());
    let teddybears = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());
    let number = puzels+dols+teddybears+minions+trucks;
    let puzelsprice = 2.6 ;
    let dolsprice = 3 ;
    let teddybearsprice = 4.1 ;
    let minionsprice = 8.2 ;
    let trucksprice = 2 ;
    let bigprice= puzels*puzelsprice+dols*dolsprice+teddybears*teddybearsprice+minions*minionsprice+trucks*trucksprice;
    let bigpriceplus50 = (bigprice - (bigprice*0.25));
    let finalpricenaem = (bigprice - (bigprice*0.1));
    let finalpriceplus50 = (bigpriceplus50-(bigpriceplus50*0.1));
    if (number>=50) {
        if (finalpriceplus50>=vacation) {
            let a = (finalpriceplus50 - vacation).toFixed(2);
            console.log( `Yes! ${a} lv left.`)
        }  else {
            let a = (vacation- finalpriceplus50).toFixed(2);
            console.log(`Not enough money! ${a} lv needed.`);
        }
    } else {
        if (finalpricenaem>=vacation) {
            let a = (finalpricenaem - vacation).toFixed(2);
            console.log(`Yes! ${a} lv left.`)
        }
        else {
            let a = (vacation- finalpricenaem).toFixed(2);
            console.log(`Not enough money! ${a} lv needed.`);
        }
    }    
}
solve([
"40.8",
"20",
"25",
"30",
"50",
"10"]);
