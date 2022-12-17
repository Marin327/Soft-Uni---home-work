function solve(str, word) {

let oldLength = str.length
let newArr = str.split(word);
let missingCh = oldLength - newArr.join("").length
console.log(missingCh / word.length);
}
solve('This is a word and it also is a sentence',
'is')