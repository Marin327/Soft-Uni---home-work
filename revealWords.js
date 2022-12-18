function solve(words, sentence) {

    let wordsToReveal = words.split(', ');
    let senteceArr = sentence.split(' ');
    let resultSentence = '';

    for (let element of wordsToReveal) {
        for (let word of senteceArr) {
            if (word.includes('*') && word.length === element.length) {
                sentence = sentence.replace(word, element);
            }
        }
    }
    console.log(sentence);
}
solve('great',
    'softuni is ***** place for learning new programming languages')