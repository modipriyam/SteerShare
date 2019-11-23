'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.save = function(params){
    const newUser = new User(params);
    const promise = newUser.save();
    return promise;
}

exports.search = function(params){
    const promise = User.find(params).exec();
    return promise;
};

exports.get = function(id){
    const promise = User.findById(id).exec();
    return promise;
}

exports.update = function(User){
    const promise = User.findOneAndUpdate({_id: user._id}, user).exec();
    return promise;
}

exports.delete = function(id){
    const promise = User.remove({_id: id}).exec();
    return promise;
}

