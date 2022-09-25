function solve(input) {
    let minimum = Number.MAX_VALUE //using type Max value as initial for minimum
    let currItem = input.shift(); //taking first value of the input to start processing
 
    while (currItem != "Stop") { //while cycle, running untill Stop is not received
        currItem = Number(currItem); //Parsing to Number, after checking the element is not equal to Stop
        if (minimum > currItem) { // checking if current element is lower than the minimum
            minimum = currItem; //changing the minimum variable value to the recently found newer minimum value
        }
        currItem = input.shift(); //taking next element for processing
    }
 
    console.log(minimum);
}
 solve([
"100",
 "99",
 "80",
 "70",
 "Stop"
 ])