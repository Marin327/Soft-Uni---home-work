function solve(arg1, arg2, arg3) {
    let sum = Number(arg1);
    let two = Number(arg2);
    let tree = Number(arg3);

    let sumTotal = sum + two;
    let substrack = sumTotal - tree;

    console.log(substrack);
}
solve(23, 6, 10)