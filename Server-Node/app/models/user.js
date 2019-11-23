'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the data model
let User = new Schema({
    username: {
        type: String,
        required: "username is required"
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
User.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
User.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('User', User);