function areaOfFigures(input) {

    let type = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let res = 0;

    if (type === 'square') {
        res = a * a;
    } else if (type === 'rectangle') {
        res = a * b;
    } else if (type === 'circle') {
        res = Math.pow(a, 2) * Math.PI;
    } else if (type === 'triangle') {
        res = 0.5 * a * b;
    }

    console.log(res.toFixed(3));

}

areaOfFigures(['circle', '6']);