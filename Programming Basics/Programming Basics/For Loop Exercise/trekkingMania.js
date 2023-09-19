function trekkingMania(input) {

    let groupsCount = Number(input[0]);

    let musalaCounter = 0;
    let monblanCounter = 0;
    let kilimanjaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;
    let totalPeople = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let currentNumber = Number(input[i]);
        totalPeople += currentNumber;
        if (currentNumber <= 5) {
            musalaCounter += currentNumber;
        } else if (currentNumber >= 6 && currentNumber <= 12) {
            monblanCounter += currentNumber;
        } else if (currentNumber >= 13 && currentNumber <= 25) {
            kilimanjaroCounter += currentNumber;
        } else if (currentNumber >= 26 && currentNumber <= 40) {
            k2Counter += currentNumber;
        } else {
            everestCounter += currentNumber;
        }
    }

    let percentForMusala = musalaCounter / totalPeople * 100;
    let percentForMonblan = monblanCounter / totalPeople * 100;
    let percentForKilimanjaro = kilimanjaroCounter / totalPeople * 100;
    let percentForK2 = k2Counter / totalPeople * 100;
    let percentForEverest = everestCounter / totalPeople * 100;

    console.log(`${percentForMusala.toFixed(2)}%`);
    console.log(`${percentForMonblan.toFixed(2)}%`);
    console.log(`${percentForKilimanjaro.toFixed(2)}%`);
    console.log(`${percentForK2.toFixed(2)}%`);
    console.log(`${percentForEverest.toFixed(2)}%`);

}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);