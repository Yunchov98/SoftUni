function projectsCreation(input) {

    let architectName = input[0];
    let projectsCount = Number(input[1]);
    let timeForOneProject = 3;

    let timeNeeded = projectsCount * timeForOneProject;

    console.log(`The architect ${architectName} will need ${timeNeeded} hours to complete ${projectsCount} project/s.`);
}

projectsCreation(['George', '4']);
