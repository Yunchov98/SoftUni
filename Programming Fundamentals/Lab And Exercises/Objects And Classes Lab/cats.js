function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let currentCats = [];

    for (let i = 0; i < array.length; i++) {
        let [name, age] = array[i].split(' ');
        currentCats.push(new Cat(name, age));
    }

    for (let currentCat of currentCats) {
        currentCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);