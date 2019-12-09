'use strict';

const mongoose = require('mongoose');
const Car = mongoose.model('Car');

module.exports = {
    add,
    get
}

async function get(id){
    const car$ = await Car.findOne({user_id: id}).exec();
    return car$
}

async function add(car){
    if(await Car.findOne({user_id: car.user_id})){
        throw "User already has a car";
    }

    const newCar = new Car(car);
    const promise = newCar.save();
    
    return promise;
}

