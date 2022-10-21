function solve(input) {
    let index = 0;
    let group = Number(input[index]);
    index++;
    
    let musalaCounter = 0;
    let monblanCounter = 0;
    let kelimandjaroCounter = 0;
    let kTwoCounter = 0;
    let everestCounter = 0;
    let totalTourists = 0;
  
    for(let i = 0; i < group; i++) {
       let num = Number(input[index]);
       totalTourists += num;
       index++;
       if(num <= 5) {
        musalaCounter += num; 
       } else if(num >= 6 && num <= 12) {
        monblanCounter += num;  
       } else if( num >= 13 && num <= 25) {
         kelimandjaroCounter += num;
       } else if (num >= 26 && num <= 40) {
        kTwoCounter += num;
       } else {
         everestCounter += num;
       }
    }
     let p1 = musalaCounter / totalTourists * 100;
     let p2 = monblanCounter / totalTourists * 100;
     let p3 = kelimandjaroCounter / totalTourists * 100;
     let p4 = kTwoCounter / totalTourists * 100;
     let p5 = everestCounter / totalTourists * 100;
    
         console.log(p1.toFixed(2)+ "%");
         console.log(p2.toFixed(2)+ "%");
         console.log(p3.toFixed(2)+ "%");
         console.log(p4.toFixed(2)+ "%");
         console.log(p5.toFixed(2)+ "%");
  
 }
 solve(["10",
 "10",
 "5",
 "1",
 "100",
 "12",
 "26",
 "17",
 "37",
 "40",
 "78"])