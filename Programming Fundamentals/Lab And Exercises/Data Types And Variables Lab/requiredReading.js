function requiredReading(pages, pagesReadInOneHour, numberOfTheDays) {

    let totalTime = pages / pagesReadInOneHour;
    let timeNeeded = totalTime / numberOfTheDays;

    console.log(timeNeeded);

}

requiredReading(432, 15, 4);