function solve([arg1, arg2, arg3]) {
    let name = arg1;
    let episode = Number(arg2);
    let breakTime = Number(arg3);
    
    let lunch = breakTime / 8;
    let rest = breakTime / 4;
    let time = breakTime - lunch - rest;
    
    if(time >= episode) {
    
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(time - episode)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episode - time)} more minutes.`);
      }
    }
solve([
"Game of Thrones",
"60",
"96"])