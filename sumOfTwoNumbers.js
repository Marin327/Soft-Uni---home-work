function solve(input) {
let start = Number(input[0]);
let end = Number(input[1]);
let magicNumber = Number(input[2]);

let isFound = false;
let counter = 0;

for(let i = start; i <= end; i++) {
    for(let a = start; a <= end; a++) {
    let res = i + a;
    counter++;
    if(res === magicNumber) {
       console.log(`Combination N:${counter} (${i} + ${a} = ${magicNumber})`);
       isFound = true;
       break;
       }
    }
    if(isFound) {
        break;
    }
} 
      if(!isFound) {
     console.log(`${counter} combinations - neither equals ${magicNumber}`);
  

  }
}
solve(["1", "10", "5"])