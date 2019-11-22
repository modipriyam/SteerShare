'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('Post');

exports.save = function(params){
    const newUser = new Post(params);
    const promise = newPost.save();
    return promise;
}

exports.search = function(params){
    const promise = Post.find(params).exec();
    return promise;
};

exports.get = function(id){
    const promise = Post.findById(id).exec();
    return promise;
}

exports.update = function(post){
    const promise = Post.findOneAndUpdate({_id: post._id}, post).exec();
    return promise;
}

exports.delete = function(id){
    const promise = Post.remove({_id: id}).exec();
    return promise;
}

