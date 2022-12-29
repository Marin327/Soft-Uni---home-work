function solve(input) {

    let nameMap = new Map();
    let names = input.shift().split(', ');

    names.forEach(person => {
        nameMap.set(person, 0);
    });

    let letterPattern = /[A-Za-z]+/gm;
    let digitsPattern = /\d/g;

    for (let index = 0; index < input.length; index++) {

        let currentLine = input[index];

        if (currentLine === 'end of race') {
            break;
        }

        let name = currentLine.match(letterPattern).join('');
        let distance = (currentLine.match(digitsPattern)).reduce((a,b) =>{
            return Number(a) + Number(b);
        },0);

        if (nameMap.has(name)) {

            let prevDistance = nameMap.get(name);

            prevDistance += distance;

            nameMap.set(name, prevDistance);
        }
    }
    let sortedNames = Array.from(nameMap).sort((a, b) => {
        return b[1] - a[1];
    })

    let top3 = sortedNames.slice(0, 3);
   
    console.log(`1st place: ${top3[0][0]}`);
    console.log(`2nd place: ${top3[1][0]}`);
    console.log(`3rd place: ${top3[2][0]}`);
}

solve(['R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])