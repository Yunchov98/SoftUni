function tickets(ticketsData, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = [];

    ticketsData.forEach(ticketInfo => {
        let [destination, price, status] = ticketInfo.split('|');
        price = Number(price);

        tickets.push(new Ticket(destination, price, status));
    });

    return tickets.sort((a, b) => {
        if (typeof a[sortingCriterion] === 'number') {
            return a[sortingCriterion] - b[sortingCriterion];
        } else {
            return a[sortingCriterion].localeCompare(b[sortingCriterion]);
        }
    });
}

tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);