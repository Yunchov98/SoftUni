function weatherForecast(input) {

    let word = input[0];

    if (word === 'sunny') {
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!")
    }

}

weatherForecast(['sunny']);