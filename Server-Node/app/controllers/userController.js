'use strict';

//Import specific operations to database
const userService = require('../services/userServices');

//Create and return a new user in JSON based on the HTTP request
exports.post = function(req, res){
    const newUser = Object.assign({}, req.body);
    const resolve = (user) => {
        res.status(200);
        res.json(user);
    };

    userService.save(newUser)
        .then(resolve)
        .catch(renderErrorResponse(res));
};

exports.authenticate = function(req, res, next){
    console.log("Activated!");
    console.log(req.body);
    userService.authenticate(req.body);
    res.send("I got ", req.body.username);
}

exports.register = function(req, res, next){
    userService.register(req.body)
        .then(()=> res.json({}))
        .catch(err => next(err));
}

//Return an updated user in JSON based on the update parameters
exports.put = function(req, res){
    const user = Object.assign({}, req.body);
    const resolve = (user) => {
        res.status(200);
        res.json(user);
    };

    user._id = req.params.id;
    userService.update(user)
        .then(resolve)
        .catch(renderErrorResponse(res));
}

//Return a user in JSON based on the search parameter
exports.get = function(req, res){
    const resolve = (user) => {
        res.status(200);
        res.json(user);
    }

    userService.get(req.params.id)
        .then(resolve)
        .catch(renderErrorResponse(res));
};

//Return a list of users in JSON based on the search parameters
exports.list = function(req, res){
    const resolve = (users) => {
        res.status(200);
        res.json(users);
    };

    userService.search({})
        .then(resolve)
        .catch(renderErrorResponse(res));
}

//Delete and return the number of user successfully deleted
exports.delete = function(req, res){
    const resolve = (user) => {
        res.status(200);
        res.json(user);
    }

    userService.delete(req.params.id)
        .then(resolve)
        .catch(renderErrorResponse(res));
};


//Throw error if error object is present
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