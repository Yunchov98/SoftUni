function cinemaTickets(input) {

    let index = 0;

    let command = input[index];
    index++;

    let studentTicektsCount = 0;
    let standardTicketsCount = 0;
    let kidTicketsCount = 0;
    let totalTicket = 0;

    while (command !== 'Finish') {
        let name = command;
        let freeSpace = Number(input[index]);
        index++;
        let soldTicket = 0;
        let tempCommand = input[index];
        index++;
        while (tempCommand !== 'End') {
            let ticket = tempCommand;
            soldTicket++;
            switch (ticket) {
                case 'student': studentTicektsCount++; break;
                case 'standard': standardTicketsCount++; break;
                case 'kid': kidTicketsCount++; break;
            }
            if (freeSpace === soldTicket) {
                break;
            }

            tempCommand = input[index];
            index++;
        }
        totalTicket += soldTicket;
        let quantityPercent = soldTicket / freeSpace * 100;

        console.log(`${name} - ${quantityPercent.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    console.log(`Total tickets: ${totalTicket}`);

    let percentOfStudentTickets = studentTicektsCount / totalTicket * 100;
    let percentOfStandartTickets = standardTicketsCount / totalTicket * 100;
    let percentOfKidTickets = kidTicketsCount / totalTicket * 100;

    console.log(`${percentOfStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentOfStandartTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentOfKidTickets.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
    ;