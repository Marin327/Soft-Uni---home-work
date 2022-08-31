function workingHours(hour, partOfDay) {
    hour = Number(hour);

    if(10 >= hour && hour <= 18) {
        switch(partOfDay) {
         case "Monday":
         case "Tuesday":
         case "Wednesday":
         case "Thursday":
         case "Friday":
         case "Saturday":
            console.log("open");
            break;
            case "Sunday":
               default: console.log("closed");
                break;
        }
         } else {
            console.log("closed");
         }
        }

workingHours(["11", "Monday"]);