function foo(arr) {
    return arr.reduce((a, v, i) => {
        if (i % 2 === 0) {
            a[v] = Number(arr[i + 1])
        }
        return a
    }, {})
}
console.log(foo(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52'
]))

//
console.log("-------");
//
function calorie(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) obj[arr[i]] = Number(arr[i + 1]); {}
    }
    console.log(obj);
}
calorie(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52'
])

//
console.log("-------");
//
function solve(arr) {
    return arr.reduce((acc, curr, index) => {
        if (index % 2 === 0) acc[curr] = Number(arr[index + 1])
        return acc;
    }, {})
}
console.log(solve(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52'
]))

//
console.log("-------");
//

function solve(worker) {
    if (worker.dizziness) {
        return {
            ...worker,
            levelOfHydrated: worker.levelOfHydrated * 0.1 * worker.experience,
            dizziness: false,
        };
    }
    return {
        ...worker
    }
}
solve(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52'
])