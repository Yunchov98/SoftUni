function trekkingMania(input) {

    let index = 0;

    let groupsCount = Number(input[index]);
    index++;

    let musalaClimbers = 0;
    let monblanClimbers = 0;
    let kilimanjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;

    for (i = 1; i <= groupsCount; i++) {
        let currentNumber = Number(input[index]);
        index++
        if (currentNumber <= 5) {
            musalaClimbers += currentNumber;
        } else if (currentNumber >= 6 && currentNumber <= 12) {
            monblanClimbers += currentNumber;
        } else if (currentNumber >= 13 && currentNumber <= 25) {
            kilimanjaroClimbers += currentNumber;
        } else if (currentNumber >= 26 && currentNumber <= 40) {
            k2Climbers += currentNumber;
        } else {
            everestClimbers += currentNumber;
        }
    }

    let totalPeople = musalaClimbers + monblanClimbers + kilimanjaroClimbers + k2Climbers + everestClimbers;
    let musalaClimbersInPercent = musalaClimbers / totalPeople * 100;
    let monblanClimbersInPercent = monblanClimbers / totalPeople * 100;
    let kilimanjaroClimbersInPercent = kilimanjaroClimbers / totalPeople * 100;
    let k2ClimbersInPercent = k2Climbers / totalPeople * 100;
    let everestClimbersInPercent = everestClimbers / totalPeople * 100;

    console.log(`${musalaClimbersInPercent.toFixed(2)}%`);
    console.log(`${monblanClimbersInPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroClimbersInPercent.toFixed(2)}%`);
    console.log(`${k2ClimbersInPercent.toFixed(2)}%`);
    console.log(`${everestClimbersInPercent.toFixed(2)}%`);

}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);