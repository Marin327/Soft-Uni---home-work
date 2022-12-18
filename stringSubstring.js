function solve(searchWord, sentence) {

    let words = sentence.split(' ');

    for (const word of words) {
        if (word.toLowerCase() === searchWord.toLowerCase()) {
            console.log(searchWord);
            return;
        }
    }
    console.log(`${searchWord} not found!`);

}
solve('javascript',
    'JavaScript is the best programming language')