function agencyProfit(input) {

    let name = input[0];
    let adultPeopleTicketsCount = Number(input[1]);
    let kidsTicektsCount = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let tax = Number(input[4]);

    let kidsTicketPrice = adultTicketPrice * 0.30;
    let totalAdultTicketsPrice = adultPeopleTicketsCount * (adultTicketPrice + tax);
    let totalKidsTicketsPrice = kidsTicektsCount * (kidsTicketPrice + tax);
    let totalPrice = totalAdultTicketsPrice + totalKidsTicketsPrice;
    let companyMoney = totalPrice * 0.20;

    console.log(`The profit of your agency from ${name} tickets is ${companyMoney.toFixed(2)} lv.`);

}

agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"])

    ;