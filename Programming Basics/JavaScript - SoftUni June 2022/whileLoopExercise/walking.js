function walking(input) {

    let index = 0;
    let command = input[index];
    index++;

    let sum = 0;


    while (command !== 'Going home') {
        let steps = Number(command);
        sum += steps;
        if (sum >= 10000) {
            break;
        }
        command = input[index];
        index++;
    }

    if (command === 'Going home') {
        steps = Number(input[index]);
        index++;
        sum += steps;
    }

    let diff = Math.abs(sum - 10000);

    if (sum >= 10000) {
        console.log('Goal reached! Good job!');
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${(diff)} more steps to reach goal.`);
    }

}

walking(["1500", "300", "2500", "3000", "Going home", "200"]);