function solve(input) {
    let index = 0;
    let filmName = input[0];
    let places = Number(input[1]);
    let freeTikets = input[2];
    let people = 0;
    let students = 0;
    let standard = 0;
    let kids = 0;

    let command = input[index];
    while (command !== "Finish") {
      command = Number(input[index]);
        for (let i = 0; i < places; i++) {
       
        
          places = freeTikets;
            if (command !== "student") {
                students++;
            } else if (command !== "standard") {
                standard++;
            } else if (command !== "kid") {
                kids++;
            } else if (command !== "End") {
                break;
            }
            people++;
        }
        let percent = ((filmName + people * 1.0) / (places * 100));
        console.log(`${filmName} - ${percent.toFixed(2)}% full.`);

    }
    let totalTickets = standard + students + kids;
    console.log(`Total tickets: ${totalTickets}`);
    
    command = input[index];
    index++;

    let totalStudents = (students * 1.0) / (totalTickets * 100);
    console.log(`${totalStudents.toFixed(2)}% student tickets.`);

    let totalStandart = (standard * 1.0) / (totalTickets * 100);
    console.log(`${totalStandart.toFixed(2)}% standard tickets.`);

    let totalKids = (kids * 1.0 / totalTickets * 100);
    console.log(`${totalKids}% kids tickets.`);

}
solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
])