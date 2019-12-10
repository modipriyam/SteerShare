'use strict';

const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.saveRide = function(post){
    const newPost = new Post(post);
    const promise = newPost.save();
    
    return promise;
}

exports.searchByExactDateTime = function(params){
    const promise = Post.find({
        from: {$eq: params.from},
        to: { $eq: params.to},
        travel_date: { $eq: params.travel_date}
    }).exec();
    return promise;
};


exports.searchByLocationAndTime = function(params){
    const promise = Post.find({
        $or : [
        {
        from: {$eq: params.from},
        to: { $eq: params.to},
        travel_date: { $gte: params.travel_date},
        travel_time: { $gte: params.travel_time}},
        {
        from: {$eq: params.from},
        to: { $eq: params.to},
        travel_date: { $gt: params.travel_date}}
        ]
    }).exec();
    return promise;
};

exports.searchByLocation = function(params){
    const promise = Post.find({
        from: {$eq: params.from},
        to: { $eq: params.to},
        travel_date: { $gte: params.travel_date}
    }).exec();
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

