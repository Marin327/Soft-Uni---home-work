function solve(arg1,arg2,arg3) {
  let a = Number(arg1);
  let b = Number(arg2);
  let c = Number(arg3);

    
    if (a <= b && a <= c) {
        console.log(a);
    } else if (b <= a && b <= c){
        console.log(b);
    } else if(c <= b && c <= a){
        console.log(c);
    }

}   


solve(2,5,3)