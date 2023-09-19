function solution() {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },

        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },

        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    };

    const products = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const commands = {
        restock,
        prepare,
        report,
    };

    return manager;

    function manager(params) {
        const [command, product, quantity] = params.split(' ');
        return commands[command](product, quantity);
    }

    function restock(product, quantity) {
        products[product] += Number(quantity);
        return 'Success';
    }

    function prepare(recipe, quantity) {
        quantity = Number(quantity);
        const currentOrder = Object.entries(recipes[recipe]);
        currentOrder.forEach((ingredient) => ingredient[1] *= quantity);
        
        for (const [ingredient, requiredAmount] of currentOrder) {
            if (products[ingredient] < requiredAmount) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        currentOrder.forEach(([ingredient, requiredAmount]) => (products[ingredient] -= requiredAmount));
        return 'Success';
    }

    function report() {
        return `protein=${products.protein} carbohydrate=${products.carbohydrate} fat=${products.fat} flavour=${products.flavour}`;
    }
}

let manager = solution();
console.log(manager('restock flavour 50')); // Success 
console.log(manager('prepare lemonade 4')); // Error: not enough carbohydrate in stock 
