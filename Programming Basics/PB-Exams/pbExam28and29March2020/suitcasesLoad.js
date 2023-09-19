function suitcasesLoad(input) {

    let index = 0;

    let quantity = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let counter = 1;
    let totalSuitCaseQuantity = 0;

    while (command !== 'End') {
        let suitCaseQuantity = Number(command);
        if (counter % 3 === 0) {
            suitCaseQuantity *= 1.10;
        }
        totalSuitCaseQuantity += suitCaseQuantity;
        if (totalSuitCaseQuantity > quantity) {
            break;
        }
        counter++;
        command = input[index];
        index++;
    }

    let diff = Math.abs(quantity - totalSuitCaseQuantity);

    if (command === 'End') {
        console.log('Congratulations! All suitcases are loaded!');
    } else if (totalSuitCaseQuantity >= diff) {
        console.log('No more space!');
    }

    console.log(`Statistic: ${counter - 1} suitcases loaded.`);

}

suitcasesLoad(['1200.2', '260', '380.5', '125.6', '305', 'End']);