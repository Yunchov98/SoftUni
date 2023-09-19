function daysInAmonth(month, year) {
    const date = new Date(year, month, 0).getDate();

    console.log(date);
}

daysInAmonth(1, 2012);
daysInAmonth(2, 2021);