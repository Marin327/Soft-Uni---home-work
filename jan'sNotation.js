function foo(arr) {
    let result = []
    let workArr = arr.includes("error")
        ? arr.slice(0, arr.indexOf("error"))
        : arr.slice()
    const operators = {
        "+": (x, y) => x + y,
        "-": (x, y) => y - x,
        "/": (x, y) => y / x,
        "*": (x, y) => x * y,
    }

    const updateArr = (arr, o) => {
        const temp = arr.slice()
        temp.push(operators[o](temp.pop(), temp.pop()))
        return temp
    }

    for (let i = 0; i < workArr.length; i += 1) {
        if (typeof workArr[i] === "number") {
            result.push(workArr[i])
        } else {
            if (result.length < 2) {
                return `Error: not enough operands!`
            }
            result = updateArr(result, workArr[i])
        }
    }

    return result.length === 1 ? result[0] : `Error: too many operands!`
}
console.log(foo([3,
    4,
    '+']));

    //
    console.log("--------");

//
function notation(arr) {
const ERROR_MESSAGE = "Error: not enough operands!";
    const nums  = [];
    const operations = {
        '+': (a, b) => b + a,
        '-': (a, b) => b - a,
        '*': (a, b) => b * a,
        '/': ( a, b) => b / a,
    };
    
    for(let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(typeof element == 'number') {
            nums.push(element);
        }else {
            if(nums.length < 2) {
                return ERROR_MESSAGE;
            }
            nums.push(operations[element](nums.pop(), nums.pop()))
        }
    }
    if(nums.length != 1) {
        return "Error: too many operands!";

}
return nums[0];
}
notation([3,
    4,
    '+'])