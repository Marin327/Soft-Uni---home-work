function solve(input) {
   let index = 0;
   
   let command = input[index];
   index++;
  
let sumPrimeNums = 0;
let sumNonPrimeNums = 0;

 while(command !== "stop") {
    let num = Number(command);

    if(num < 0) {
        console.log("Number is negative.");

        command = input[index];
        index++;
        continue;
    }

     let isPrime = true;
     
     if(num ===1) {
        isPrime = false;
     }

    for(let divider = 2; divider < num; divider++) {
        if(num % divider === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime === true) {
        sumPrimeNums += num;
    } else {
        sumNonPrimeNums += num;
    }
    command = input[index];
    index++;
    continue;
  }

    console.log(`Sum of all prime numbers is: ${sumPrimeNums}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNums}`);
}
    
solve([
"3",
"9",
"0",
"7",
"19",
"4",
"stop"]);
