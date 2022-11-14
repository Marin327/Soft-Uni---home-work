function solve(arr) {
    let passengers = arr.shift().split(' ').map(Number);
    let maxWagon = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {

        let command = arr[i].split(' ');
        if (command[0] === "Add") {
            passengers.push(Number(command[1]));
        } else {
            for (let j = 0; j < passengers.length; j++) {
                if (Number(command[0]) + passengers[j] <= maxWagon) {
                    passengers[j] += Number(command[0]);
                    break;
                }
            }
        }
    }
    console.log(passengers.join(" "));
}
solve([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
])