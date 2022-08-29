function vacationBooksToList(input) {
let pageCount = Number(input[0]);
let readePageForCountHour = Number(input[1]);
let dayCount = Number(input[2]);

let needTime = pageCount / readePageForCountHour;
let needTimeForDay = needTime / dayCount;
console.log(needTimeForDay);

}
vacationBooksToList(["212", "20", "2"])