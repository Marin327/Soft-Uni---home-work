function solve(arr) {
    let res = [];

    for (let el of arr) {
        let command = el.split(" ");
        let name = command[0];
        if (command.length === 3) {
            if (res.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                res.push(name);
            }
        } else {
                if (!res.includes(name)) {
                    console.log(`${name} is not in the list!`);
                
                } else {
                    let index = res.indexOf(name);
                    res.splice(index, 1);
                }
            }
        }
         console.log(res.join("\n"));
    }
    
  solve([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])