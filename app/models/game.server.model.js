'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Game Schema
 */
var GameSchema;
GameSchema = new Schema({
    name: {
        type: String,
        default: '',
        required: 'Please fill Game name',
        trim: true
    },
    creator: {
        type: String,
        default: ''
    },
    console: {
        type: String,
        default: '',


    },
    playerCount: {
        type: Number,
        default: 1
    },
    created: {
        type: Date,
        default: Date.now
    },
    hidden: Boolean,est
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Game', GameSchema);