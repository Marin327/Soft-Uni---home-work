function foo(arr) {
    return JSON.stringify(
        arr
            .map(x => x.split(" / "))
            .reduce((a, v) => {
                a.push({ name: v[0], level: Number(v[1]), items: v[2] ? v[2].split(", ") : [] })
                return a
            }, [])
    )
}
console.log(foo(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))
//
console.log("----------");
//

function heroic(input) {

    const result = input.reduce((acc, curr) => {
        const [name, level, item] = curr.split(" / ");
        const hero = {
            name,
            level: Number(level),
            items: item ? item.split(", ") : [],
        };
        acc.push(hero);
        return acc;
    }, [])
   return JSON.stringify(result); 
}
heroic(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])