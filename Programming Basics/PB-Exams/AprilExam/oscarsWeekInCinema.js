function oscarsWeekInCinema(input) {

    let nameOfTheMovie = input[0];
    let hallType = input[1];
    let countOfTheBoughtTicekts = Number(input[2]);
    let priceOfTheTicket = 0;

    if (nameOfTheMovie === 'A Star Is Born') {
        switch (hallType) {
            case 'normal': priceOfTheTicket = 7.50; break;
            case 'luxury': priceOfTheTicket = 10.50; break;
            case 'ultra luxury': priceOfTheTicket = 13.50; break;
        }
    } else if (nameOfTheMovie === 'Bohemian Rhapsody') {
        switch (hallType) {
            case 'normal': priceOfTheTicket = 7.35; break;
            case 'luxury': priceOfTheTicket = 9.45; break;
            case 'ultra luxury': priceOfTheTicket = 12.75; break;
        }
    } else if (nameOfTheMovie === 'Green Book') {
        switch (hallType) {
            case 'normal': priceOfTheTicket = 8.15; break;
            case 'luxury': priceOfTheTicket = 10.25; break;
            case 'ultra luxury': priceOfTheTicket = 13.25; break;
        }
    } else if (nameOfTheMovie === 'The Favourite') {
        switch (hallType) {
            case 'normal': priceOfTheTicket = 8.75; break;
            case 'luxury': priceOfTheTicket = 11.55; break;
            case 'ultra luxury': priceOfTheTicket = 13.95; break;
        }
    }

    let revenueFromTheScreening = (priceOfTheTicket * countOfTheBoughtTicekts).toFixed(2);

    console.log(`${nameOfTheMovie} -> ${revenueFromTheScreening} lv.`)
}

oscarsWeekInCinema((["Green Book", "normal", "63"]));