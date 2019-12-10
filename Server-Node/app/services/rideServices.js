'use strict';

const mongoose = require('mongoose');
const Ride = mongoose.model('Ride');


exports.save = function(params){
   
    const newRide = new Ride(ride);
    const promise = newRide.save();
    
    return promise;
}

exports.saveRide = function(ride){
    const newRide = new Ride(ride);
    const promise = newRide.save();
    
    return promise;
}


exports.get = function(username){
    const promise = Ride.findByUsername(username).exec();
    return promise;
}



