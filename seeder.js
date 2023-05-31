const fs = require('fs');
const mongoose =  require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({path: './config/config.env'});

// Load models
const Agent = require('./models/AgentModel');
const Listing = require('./models/ListingModel');
const Organisation = require('./models/organisationModel');

//Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
});


// Read JSON files
const agent = JSON.parse(fs.readFileSync(`${__dirname}/_data/agents.json`, 'utf-8'));
const listing = JSON.parse(fs.readFileSync(`${__dirname}/_data/listings.json`, 'utf-8'));
const organisation = JSON.parse(fs.readFileSync(`${__dirname}/_data/organisations.json`, 'utf-8'));

// Import into DB
const importData = async () => {
    try {
        await Agent.create(agent)
        await Listing.create(listing)
        await Organisation.create(organisation)
        console.log('Data Imported...');
        process.exit();
    } catch (error) {
       console.error(error); 
    }
}

// Delete Data
const DeleteData = async () => {
    try {
        await Agent.deleteMany()
        await Listing.deleteMany()
        await Organisation.deleteMany()
        console.log('Data Destroyed...');
        process.exit();
    } catch (error) {
       console.error(error); 
    }
}

if(process.argv[2] === '-i'){
    importData();
} else if(process.argv[2] === '-d'){
   DeleteData();
}