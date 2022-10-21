function solve(input) {
   let capacity = Number(input.shift());

    let command = input.shift();
    let profit = 0;
    let fullCinema = false;

    while(command !== "Movie time!") {
        let people = Number(command);
        capacity -= people;
       
        if(capacity < 0)  {
            console.log("The cinema is full.");
            fullCinema = true;
            break;
        }

        if (people % 3 == 0) {
            profit += (people * 5 - 5);
        } else {
            profit += people * 5;
        }

        command = input.shift();
    }

    if (!fullCinema){
        console.log(`There are ${capacity} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${profit} lv.`);
  }


solve(["60",
"10",
"6",
"3",
"20",
"15",
"Movie time!"])

