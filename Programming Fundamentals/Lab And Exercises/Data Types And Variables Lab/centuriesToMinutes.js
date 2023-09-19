function centuriesToMinutes(centuries) {

    let year = centuries * 100;
    let days = Math.trunc(year * 365.2422);
    let hours = 24 * days;
    let minnutes = 60 * hours;

    console.log(`${centuries} centuries = ${year} years = ${days} days = ${hours} hours = ${minnutes} minutes`);

}

centuriesToMinutes(1);