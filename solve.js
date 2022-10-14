function solve(input) {
    let n = Number(input[0]);
    let numbers = "";

    for (let i = n; i > 0; i--) {
        numbers = numbers + i;
        if (i != 1) {
            numbers = numbers + ", ";
        }
    }
    console.log(numbers);
}
solve(["8"])