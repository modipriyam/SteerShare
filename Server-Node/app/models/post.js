'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the data model
let Post = new Schema({
    from: {
        type: String,
        required: "from is required"
    },
    to: {
        type: String,
        required: "destination is required"
    },
    travevl_date: {
        type: String, 
        required: "Start date is required"
    },
    travel_time: {
        type: String,
        required: "Start time is required"
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
Post.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
Post.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Post', Post);