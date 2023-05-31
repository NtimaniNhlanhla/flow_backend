const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    title: {
        type: String,

    },
    description: {
        type: String,
    },
    status: {
        type: String,
    },
    listingType: {
        type: String,
    },
    listingSector : {
        type: String,
    },
    unit : {
        bedrooms: {
            type: Number,

        },
        bathrooms: {
            type: Number,
        },
        parking: {
            type: Number
        },
        price: {
            type: Number
        }
    },
    images: {
        type: [String]
    },
    agent: {
        type: mongoose.Schema.ObjectId,
        ref: 'Agent',
        required: true
    },
    organisation: {
        type: mongoose.Schema.ObjectId,
        ref: 'Organisation',
        required: true
    }

});

module.exports = mongoose.model('Listing', ListingSchema);