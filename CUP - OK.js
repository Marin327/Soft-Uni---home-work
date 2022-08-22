function drawCup([n]) {
    let width = n * 5;

    let numberOfOuterDots = n;
    //First half of head of cup
    for (var index = 0; index < n / 2; index++) {
        let numberOfHashtag =  width - (2 * numberOfOuterDots);
        console.log(
            '.'.repeat(numberOfOuterDots) + 
            '#'.repeat(numberOfHashtag) + 
            '.'.repeat(numberOfOuterDots))
            numberOfOuterDots++;
        }

            //Second half of head of cup
            for (var index = 0; index <= n / 2; index++) {
                let numberOfInnerDots =  width - (2 * numberOfOuterDots) - 2;
                console.log(
                    '.'.repeat(numberOfOuterDots) + 
                    '#' + 
                    '.'.repeat(numberOfInnerDots) + 
                    '#' +
                    '.'.repeat(numberOfOuterDots))
                    numberOfOuterDots++;
                }

                    //Neck of cup
                        numberOfOuterDots--;
                        let numberOfHashtags =  width - (2 * numberOfOuterDots);
                             console.log(
                            '.'.repeat(numberOfOuterDots) +  
                            '#'.repeat(numberOfHashtags) + 
                            '.'.repeat(numberOfOuterDots))
                            numberOfOuterDots++;

                             numberOfOuterDots -= 2;
                           for( var index = 0; index < n + 2; index++) {

                           
                            if (index == n / 2) {
                              let danceStr = '^D^A^N^C^E^';
                            let currentOuterDots = (width - 10) / 2;
                            console.log(
                                     '.'.repeat(currentOuterDots) +
                                     danceStr +
                                     '.'.repeat(currentOuterDots))                            
                            } else {
                                console.log(
                                    '.'.repeat(numberOfOuterDots) +
                                    '#'.repeat(width - 2 * numberOfOuterDots) +
                                    '.'.repeat(numberOfOuterDots));
                                }
                           }                         
}
     drawCup ([6])