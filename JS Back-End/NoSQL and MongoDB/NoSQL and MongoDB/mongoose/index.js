const mongoose = require('mongoose');

const Cat = require('./models/Cat');
const Person = require('./models/Person');

async function connectDb() {
    await mongoose.connect('mongodb://127.0.0.1:27017/catShelter');

    console.log('Db Connected successfully');

    // cats.forEach(cat => cat.greet()); // instance method
    // cats.forEach(cat => console.log(cat.info)); // virtual property
    // const result = await Cat.giveMeCats() // Static model method

    // Read
    const cats = await Cat.find({ breed: 'Angora' });
    // const cats = await Cat.findOne({breed: 'Angora'});
    // const cats = await Cat.findById('646f8c5265a096882c26c345');

    // Create method 1
    // const newCat = new Cat({
    //     name: 'Zuza',
    //     age: 10,
    //     breed: 'Ulichna'
    // });
    // await newCat.save();

    // Create method 2
    // const newCat = await Cat.create({
    //     age: 6,
    //     name: 'Charli',
    //     color: 'white',
    //     breed: 'Dog',
    // });

    // Update method 1
    // const charli = await Cat.findOne({name: 'Charli'});
    // charli.age = 10;
    // await charli.save();

    // Update method 2 native mongoDb
    // await Cat.updateOne({ name: 'Charli' }, { $set: { age: 9 } });

    // Update method 3 the mongoose extension
    // await Cat.findByIdAndUpdate('6470975a956ac37fcedbf999', {$set: {breed: 'Chihuahua'}});

    // Delete method 1
    // await Cat.deleteOne({name: 'Zuza'});

    // Delete method 2
    // await Cat.findByIdAndDelete('646f8c5265a096882c26c345');

    // Creating collection by creating first record in non existant collection
    // await Person.create({
    //     name: 'Pesho',
    //     age: 20,
    // });

    // Find all non angora cats
    // const cats = (await Cat.find({}).where('age').gt(1).lt(10));
    // const cats = await Cat.find().where('breed').ne('Angora');

    console.log('Connected to the db');
    // const cats = await Cat.find({}).sort({'age': 1});
    console.log(cats);
    
    // console.log(cats);
}

connectDb();