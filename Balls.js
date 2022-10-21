function solve(input){
 
    let ballNum = Number(input[0]);
    let pointball = 0 ;
    let cauntball = 0 ;
    let colorBallRed = 0;
    let colorballOrange = 0;
    let colorBallYellow = 0;
    let colorBallWhite = 0;
    let colorBallBlack = 0;
     
    for (let ball = 1; ball <= ballNum; ball++) {
          let  currenball = input[ball];
            if (currenball === "red"){
                pointball += 5 ;
                colorBallRed += 1;
            } else if (currenball === "orange"){
                pointball += 10;
                colorballOrange += 1;
            } else if (currenball === "yellow"){
                pointball += 15;
                colorBallYellow += 1;
            } else if (currenball === "white"){
                pointball += 20;
                colorBallWhite += 1;
            }else if (currenball === "black"){
                pointball = pointball / 2;
                colorBallBlack += 1;
            } else {
               cauntball += 1;
            }
    }
    console.log(`Total points: ${Math.floor(pointball)}`);
    console.log(`Red balls: ${colorBallRed}`);
    console.log(`Orange balls: ${colorballOrange}`);
    console.log(`Yellow balls: ${colorBallYellow}`);
    console.log(`White balls: ${colorBallWhite}`);
    console.log(`Other colors picked: ${cauntball}`);
    console.log(`Divides from black balls: ${colorBallBlack}`);
}
solve(["3",
    "white",
    "black",
    "pink"])