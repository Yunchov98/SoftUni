class Person {
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    sayHello = () => {
        console.log(`Hello, ${this.#name}`)
    }
}

function solve() {

    let person = new Person('Pesho', 20);
    person.sayHello();
    console.log(person.age);
    let object = {
        name: 'Georgi', age: 24,
    }

    console.log(object.name, object.age);
    
}

solve();