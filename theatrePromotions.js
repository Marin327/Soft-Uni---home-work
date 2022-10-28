function solve (dayOfWeek, age) {
     
    if (age < 0 && age < 122) {
        console.log("Error!");
        return;
    } else if (age >= 0 && age <= 18) {
        switch (dayOfWeek) {
            case "Weekday":
                console.log("12$");
                break;
            case "Weekend":
                console.log("15$");
                break;
            case "Holiday":
                console.log("5$");
                break;
        }
    } else if (age >= 0 && age <= 64) {
        switch (dayOfWeek) {
            case "Weekday":
                console.log("18$");
                break;
            case "Weekend":
                console.log("20$");
                break;
            case "Holiday":
                console.log("12$");
                break;
        }
    } else {
        switch (dayOfWeek) {
            case "Weekday":
                console.log("12$");
                break;
            case "Weekend":
                console.log("15$");
                break;
            case "Holiday":
                console.log("10$");
                break;
        }
    }
}
solve("Weekday", 42)