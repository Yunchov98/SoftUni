function cookingByNumbers(...params) {
    const functions = {
        'chop': function (x) {
            return x / 2;
        },
        'dice': function (x) {
            return Math.sqrt(x);
        },
        'spice': function (x) {
            return x + 1;
        },
        'bake': function (x) {
            return x * 3;
        },
        'fillet': function (x) {
            return (x * 0.80).toFixed(1);
        },
    }

    let number = Number(params[0]);

    for (let i = 1; i < params.length; i++) {
        console.log(functions[params[i]](number));
        number = Number(functions[params[i]](number));
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');