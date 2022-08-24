function solve([n]) {
   n = Number(n);
   console.log(`+ ${"- ".repeat(n - 2)}+`);
   for (let row = 0; row < n - 2; row++) {
    console.log(`| ${"- ".repeat(n - 2)}|`);
      
    }
    console.log(`+ ${"- ".repeat(n - 2)}+`);
}
 solve(["5"]);