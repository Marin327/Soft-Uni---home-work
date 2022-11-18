function solve(arr) {

    let heroes = [];

    for (let heroInfo of arr) {
        //let [name,level,items] = heroInfo.split(' / ');
        let splitedElements = heroInfo.split(' / ');
        let name = splitedElements[0];
        let level = splitedElements[1];
        let items = splitedElements[2];
        let currentHero = {
            name: name,
            level: +level,
            items: items
        };
        heroes.push(currentHero);
    }
    let sortedBylevel = heroes.sort((a, b) => {
        return a.level - b.level;
    });
    for (const hero of sortedBylevel) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
solve(['Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
])