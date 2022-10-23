function everest(input){
 
    let index = 0;
    let command = input[index];
    index++;
    let days = 0;
    let meeters = 5364;
 
    while(command !== `END`) {
        let dailyMeeters = Number(input[index]);
        index++;
 
        if(command === `Yes`){
            meeters += dailyMeeters;
            days++;
        } else if (command === `No`){
            days++;
            meeters += dailyMeeters;
        }
         if (meeters >= 8848){
            break;
        } else if (days > 5){
            break;
        }
        command = (input[index]);
        index++;
    }
    if (meeters >= 8848){
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log(`Failed!`);
        console.log(`${meeters}`);
    }
}
everest([
"Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])