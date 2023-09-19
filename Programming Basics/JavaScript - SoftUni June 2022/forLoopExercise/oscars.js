function oscars(input) {

    let index = 0;

    let actorName = input[index];
    index++;

    let academyPoints = Number(input[index]);
    index++;

    let judges = Number(input[index]);
    index++;


    for (let i = 0; i < judges; i++) {
        let currentName = input[index];
        index++;
        let currentPoints = Number(input[index]);
        index++;
        let totalPoints = currentName.length * currentPoints / 2;
        academyPoints += totalPoints;
        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }

    let diff = Math.abs(1250.5 - academyPoints);

    if (academyPoints <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);