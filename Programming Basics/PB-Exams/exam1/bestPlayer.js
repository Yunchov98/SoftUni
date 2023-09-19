function bestPlayer(input) {

    let index = 0;

    let command = input[index];
    index++;

    let maxGoals = 0;
    let bestName = '';

    while(command !== 'END'){
        let name = command;
        let goalsCount = Number(input[index]);
        index++;

        if(goalsCount > maxGoals){
            bestName = name;
            maxGoals = goalsCount;
        }
        if(maxGoals >= 10){
            break;
        }
        command = input[index];
        index++;
    }

    console.log(`${bestName} is the best player!`);
    if(maxGoals >= 3){
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    }else{
        console.log(`He has scored ${maxGoals} goals.`);
    }



}

bestPlayer(["Petrov",
"2",
"Drogba",
"11"]);