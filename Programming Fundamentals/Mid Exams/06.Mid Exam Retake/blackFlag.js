function blackFlag(array) {

    const days = Number(array.shift()); // взеамме дните от масива във входните данни;
    const plunderForDay = Number(array.shift()); // вземаме плячката за ден от масива във входните данни;
    const expectedPlunder = Number(array.shift()); // вземаме очакваната плячка от масива във входните данни;

    let totalPlunder = 0; // създаваме променлива, в която ще трупаме плячката;

    for (let i = 1; i <= days; i++) { // for цикъл, който върти от първият до последния ден;

        totalPlunder += plunderForDay; // всеки нов ден трупаме плячката;

        if (i % 3 === 0) { // проверяваме дали денят е трети;
            totalPlunder += plunderForDay * 0.50; // повишаваме плячката;
        }

        if (i % 5 === 0) { // проверяваме дали денят е пети;
            totalPlunder *= 0.70; // намаляваме плячката;
        }
    }

    if (totalPlunder >= expectedPlunder) { // проверяваме дали общата плячка е по - голяма или равна на очакваната;
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`); // печатаме;
    } else { // ако плячката е по - малка от очакваната:
        const percent = totalPlunder / expectedPlunder * 100; // изчисляваме процента;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`); // печатаме;
    }
}

    // written by Georgi Yunchov 18.10.2022;

blackFlag((["5",
    "40",
    "100"])
);