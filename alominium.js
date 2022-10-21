function solve(input) {
let order = Number(input[0]);
let size = Number(input[1]);
let delivery = input[2];
sum = 0;

    switch(size) {
        case "90X130":
                price = 110;
                price *= order; 
    
                if (order > 30 && order <= 60) {
                    price *= 0.95; 
                }
                if (order > 60) {
                    price *= 0.92;
                }              
                sum += price;
                
        case "100X150":   
                price = 140;
                price *= order;

                if (order > 40 && order <= 80) {
                    price *= 0.94; 
                }
                if (order > 80) {
                    price *= 0.90; 
                }
                sum += price; 
            
        case "130X180":
                 price = 190;
                price *= order;

                if (order > 20 && order <= 50) {
                    price *= 0.93;
                }

                if (order > 50) {
                    price *= 0.88; 
                }
                sum += price; 
        

        case "200X300":
                price = 250;
                price *= order;
        
                if (order > 25 && order <= 50) {
                    price *= 0.91;
                }
                if (order > 50) {
                    price *= 0.86;
                }
                sum += price; 

                    
    if (delivery === "With delivery") {
        sum += 60;
    }
    if (order > 99) {
        sum *= 0.96; 
    }
    console.log(`${sum.toFixed(2)} BGN`);

    if (order < 10) {
        console.log("Invalid order");
    }
  }
}
solve(["40", 
"90X130",
"Without delivery"])

