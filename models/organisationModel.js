const mongoose = require('mongoose');

const OrganisationSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    logoUrl: {
        type: String,
    },
    address: {
        type: String,
    },
    description: {
        type: String,
    },
    

});

module.exports = mongoose.model('Organisation', OrganisationSchema);