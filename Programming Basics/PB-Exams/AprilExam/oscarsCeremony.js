function oscarsCeremony(input) {

    let rent = Number(input[0]);

    let figurines = rent - (rent * 30 / 100);
    let catering = figurines - (figurines * 15 / 100);
    let soundSystem = catering / 2;

    let total = rent + figurines + catering + soundSystem;

    console.log(total.toFixed(2));
}

oscarsCeremony(['5555']);