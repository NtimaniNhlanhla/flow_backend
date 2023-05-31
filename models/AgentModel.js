const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
    firstName: {
        type: String,

    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    contactNumber: {
        type: String,
    },
    profileImageUrl : {
        type: String,
    },
    

});

module.exports = mongoose.model('Agent', AgentSchema);