function vacationBooksList(input) {

    let pageCount = Number(input[0]);
    let pages = Number(input[1]);
    let daysCount = Number(input[2]);

    let totalTimeForReading = pageCount / pages;
    let neededHours = totalTimeForReading / daysCount;

    console.log(neededHours);

}

vacationBooksList(['212', '20', '2']);