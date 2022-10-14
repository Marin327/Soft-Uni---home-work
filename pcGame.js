function solve(input) {
    let n = Number(input.shift());

    let hearhstoneCnt = 0;
    let forniteCnt = 0;
    let overwatchCnt = 0;
    let otherGamesCnt = 0;

    for (let i = 0; i < n; i++) {
       game = input.shift();

        switch (game) {
            case "Hearthstone":
                hearhstoneCnt++;
                break;
            case "Fornite":
                forniteCnt++;
                break;
            case "Overwatch":
                overwatchCnt++;
                break;
            default:
                otherGamesCnt++;
                break;
           
        }
    }

    console.log(`Hearthstone - ${(hearhstoneCnt * 1.0 / n * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(forniteCnt * 1.0 / n * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCnt * 1.0 / n * 100).toFixed(2)}%`);
    console.log(`Others - ${(otherGamesCnt * 1.0 / n * 100).toFixed(2)}%`);
}
solve(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"])