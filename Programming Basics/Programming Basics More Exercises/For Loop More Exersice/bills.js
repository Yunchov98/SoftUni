function bills(input) {

    let index = 0;

    let months = Number(input[index]);
    index++;

    let electricity = 0;
    let waterBill = 0;
    let internetBill = 0;

    for (let electricityBill = 1; electricityBill <= months; electricityBill++) {
        let currnetBill = Number(input[electricityBill]);
        electricity += currnetBill;
        waterBill += 20;
        internetBill += 15;
    }

    let other = (electricity + waterBill + internetBill) + ((electricity + waterBill + internetBill) * 0.2);
    let average = (electricity + waterBill + internetBill + other) / months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${waterBill.toFixed(2)} lv`);
    console.log(`Internet: ${internetBill.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}

bills(['5', '68.63', '89.25', '132.53', '93.53', '63.22']);