function solve(data) {
    let result = {};

    for (let line of data) {
        let [name, address] = line.split(":");
        result[name] = address;
    }

    let entries = Object.entries(result);
    let sortEntries = entries.sort(([keyA,valueA], [keyB,valueB])=> {
        return keyA.localeCompare(keyB);
    });

    for (let [name,address] of sortEntries) {
        console.log(name, "->", address);
    }
}

solve([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])