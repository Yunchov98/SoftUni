function everest(input) {
 
    let startingMeters = 5364;
    let daysCount = 1;
    let i = 0;
    let isFinish = false;
 
    while (input[i] !== "END") {
 
        if (input[i] === "Yes") {
            daysCount++;
            if (daysCount > 5) {
                break;
            }
        }
        i++;
        startingMeters += +input[i]
        i++;
        if (startingMeters >= 8848) {
            isFinish = true;
            break;
        }
    }
 
    if (isFinish) {
        console.log(`Goal reached for ${daysCount} days!`)
    } else {
        console.log(`Failed!`);
        console.log(startingMeters);
    }
 
}

everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"]);

