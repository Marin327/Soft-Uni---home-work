function foo(obj) {
    if (obj.dizziness === true) {
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience
        obj.dizziness = false
    }
    return obj
}
console.log(foo({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));

//
console.log("---------");
//
function crew(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated = worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;

    }
    return worker
}
console.log(crew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}))