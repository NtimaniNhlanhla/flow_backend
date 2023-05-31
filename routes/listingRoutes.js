const express = require('express');

const router = express.Router();

const { getAllListings, 
    getListingByAgentId, 
    getListingByOrganisationId} = require('../controllers/listingController');

router.get('/', getAllListings);
router.get('/:agentID/agent', getListingByAgentId);
router.get('/:organisationID/organisation', getListingByOrganisationId);


module.exports = router;