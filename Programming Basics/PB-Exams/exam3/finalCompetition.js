function finalCompetition(input) {

    let dancersCount = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let country = input[3];

    let money = 0;

    switch(country){
        case 'Bulgaria':
            money = points * dancersCount;
            if(season === 'summer'){
                money *= 0.95;
            }else if(season === 'winter'){
                money *= 0.92;
            }
             break;
        case 'Abroad':
            money = points * dancersCount + ((points * dancersCount) * 0.50);
            if(season === 'summer'){
                money *= 0.90;
            }else if(season === 'winter'){
                money *= 0.85;
            }
             break;
    }

    let moneyForDonation = money * 0.75;
    let moneyAfterDonation = money * 0.25;
    let moneyPerDancer = moneyAfterDonation / dancersCount;

    console.log(`Charity - ${moneyForDonation.toFixed(2)}`);
    console.log(`Money per dancer ${moneyPerDancer.toFixed(2)}`);

}

finalCompetition(['25', '98', 'winter', 'Bulgaria']);