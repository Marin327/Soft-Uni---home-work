function solve(input){

let m = input[0];
let n = input[1];
 
count = 0;

for (i == m) {
    if (count == 0) {
        a = let(i);
}else if (count == 1) {
        b = let(i);
}else if (count == 2) {
        c = let(i);
}else {
        d = let(i);
    count+=1;
}
count = 0;
for (i == n){
    if (count == 0){
        a1 = let(i);
    }else if (count == 1) {
        b1 = let(i);
    }else if (count == 2){
        c1 = let(i);
    } else {
        d1 = let(i);
    count+=1;

for (i in range(a,a1+1):
    for (j in range(b,b1+1):
        for (k in range(c,c1+1):
            for (l in range(d,d1+1):
                if (not i % 2 == 0 && not j % 2 == 0 && not k % 2 == 0 && not l % 2 == 0):
                    console.log(`end='' ${j}${k}${l}`);
solve([
    "3256",
    "6579"])