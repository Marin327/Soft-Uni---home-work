function solve(input) {
    let filmsCount = Number(input.shift());

    let maxRating = Number.MIN_VALUE;
    maxMovie = "";

     let minRating = Number.MAX_VALUE;
      minMovie = "";

    let sum = 0;

    for (let i = 0; i < filmsCount; i++) {
        movieName = input.shift();
        let rating = Number(input.shift());
    
        if (rating > maxRating) {
            maxRating = rating;
            maxMovie = movieName;
           // console.log(`${maxMovie} is with highest rating: ${maxRating.toFixed(1)}`);
        }
         if (rating < minRating) {
            minRating = rating;
            minMovie = movieName;
         //   console.log(`${minMovie} is with lowest rating: ${minRating.toFixed(1)}`);
        }
        sum += rating;
    }
    let average = (sum / filmsCount);
    console.log(`${maxMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${average.toFixed(1)}`);
    }

solve(["5",
"A Star is Born",
"7.8", 
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])  