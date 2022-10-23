function demo(input) {
    let num = input[0];
    let chislo1 = Number(num[2]); //4
    let chislo2 = Number(num[1]); //2
    let chislo3 = Number(num[0]); // 3
 
    for (let i = 1; i <= chislo1; i++) {
        for (let j = 1; j <= chislo2; j++) {
            for (let k = 1; k <= chislo3; k++) {
                let result = i * j * k;
               console.log(`${i} * ${j} * ${k} = ${result}`);
 
            }
 
        }
    }
 
}
demo(["324"])