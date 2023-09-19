function movieProfit(input) {

    let name = input[0];
    let daysCount = Number(input[1]);
    let ticketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percent = Number(input[4]);

    let ticketPriceForDay = ticketPrice * ticketsCount;
    let totalTicketPrice = ticketPriceForDay * daysCount;
    let percentForTheCinema = totalTicketPrice * percent / 100;

    let totalMoney = totalTicketPrice - percentForTheCinema;

    console.log(`The profit from the movie ${name} is ${totalMoney.toFixed(2)} lv.`);

}

movieProfit(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"])
    ;