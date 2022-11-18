function solve(input) {

    let currentTown = {};

    for (let city of input) {
        let cityElements = city.split(' | ');
        let townName = cityElements[0];
        let latitude = Number(cityElements[1]);
        let longitude = Number(cityElements[2]);
     

        currentTown.town = townName;
        currentTown.latitude = latitude.toFixed(2);
        currentTown.longitude = longitude.toFixed(2);
        console.log(currentTown);
    }

}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
])