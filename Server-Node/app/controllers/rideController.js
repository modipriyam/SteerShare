'use strict';

//Import specific operations to database
const rideServices = require('../services/rideServices');

//Create and return a new ride in JSON based on the HTTP request
exports.add = function(req, res){
    const newRide = Object.assign({}, req.body);
    const resolve = (ride) => {
        res.status(200);
        res.json(ride);
    };

    rideServices.saveRide(newRide)
        .then(resolve)
        .catch(renderErrorResponse(res));
}


exports.get = function(req, res){
    const resolve = (ride) => {
        res.status(200);
        res.json(ride);
    }

    rideServices.get(req.params.id)
        .then(resolve)
        .catch(renderErrorResponse(res));
};



//Return a list of rides in JSON based on the search parameters
exports.list = function(req, res){
    const resolve = (rides) => {
        res.status(200);
        res.json(rides);
    };

    rideServices.search({})
        .then(resolve)
        .catch(renderErrorResponse(res));
}


let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};