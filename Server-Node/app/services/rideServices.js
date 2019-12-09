'use strict';

const mongoose = require('mongoose');
const Ride = mongoose.model('Ride');


exports.save = function(params){
   
    const newRide = new Post(ride);
    const promise = newRide.save();
    
    return promise;
}


exports.get = function(id){
    const promise = Ride.findById(id).exec();
    return promise;
}



