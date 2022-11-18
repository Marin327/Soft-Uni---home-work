function solve() {

    let obj = {
        name:'Asq',
        age:20
    };
    if(obj.hasOwnProperty('name')) {
        console.log(obj.name);
    } else {
        console.log('no name');
    }
}
solve()