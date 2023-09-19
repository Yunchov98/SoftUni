function buildAWall(array) {

    let numbers = array.map(Number);

    let result = [];
    let totalConcrete = 0;
    let crews = numbers.filter(len => len < 30).length;

    while (crews !== 0) {

        let dailyConcrete = 0;

        for (let i = 0; i < numbers.length; i++) {

            if (numbers[i] !== 30) {
                dailyConcrete += 195;
                numbers[i]++;

                if (numbers[i] === 30) {
                    crews--;
                }
            }
        }
        totalConcrete += dailyConcrete;
        result.push(dailyConcrete);
    }

    let totalPesos = totalConcrete * 1900;

    console.log(result.join(', '));
    console.log(`${totalPesos} pesos`);

}

buildAWall([21, 25, 28]);