function salary(input) {

    let index = 0;

    let openTabsCount = Number(input[index]);
    index++;

    let salary = Number(input[index]);
    index++;

    for (let i = 0; i < openTabsCount; i++) {
        let siteName = input[index];
        index++;
        switch (siteName) {
            case 'Facebook': salary -= 150; break;
            case 'Instagram': salary -= 100; break;
            case 'Reddit': salary -= 50; break;
        }
        if (salary <= 0) {
            console.log('You have lost your salary.');
            break;
        }
    }

    if (salary > 0) {
        console.log(salary);
    }
}

salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);