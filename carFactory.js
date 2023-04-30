function foo({ model, power, color, carriage, wheelsize }) {
    const storageEngines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ]
    const storageCarriage = [
        { type: "hatchback", color: "" },
        { type: "coupe", color: "" },
    ]
    const getWheels = s => {
        const arr = []
        arr.length = 4
        return s % 2 === 0 ? arr.fill(s - 1) : arr.fill(s)
    }

    return {
        model,
        engine: storageEngines.reduce((a, v) =>
            Math.abs(a.power - power) < Math.abs(v.power - power) ? a : v
        ),
        carriage: { type: carriage, color },
        wheels: getWheels(wheelsize),
    }
}
console.log(foo({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));

//
console.log("-------");
//

function car({model, power, color, carriage, wheelsize}) {
    const engines = {
        small: {power: 90, volume: 1800},
        normal: {power: 120, volume: 2400},
        monster: {power: 200, volume: 3500},
    };
    let engine = {};
    if(power <= 90) {
        engine = engines.small;
    } else if(power <= 120) {
        engine = engines.normal;
    } else {
        engine = engines.monster;
    }

 const newWhelSize = wheelsize % 2 === 0 ? --wheelsize : wheelsize;

 return car = {
model,
engine,
carriage: {
    type: carriage,
    color,
},
wheels: Array(4).fill(newWhelSize),
 };

}
car({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })