const asyncHandler = require('express-async-handler');
const Listing = require('../models/ListingModel');

// @desc   Get all listings
// @route  GET /api/listings
// @access Public
exports.getAllListings = asyncHandler( async (req, res) => {

    const listings =  await Listing.aggregate([
        { $lookup:
            {
               from: "organisations",
               localField: "organisation",
               foreignField: "_id",
               as: "organisation"
            }
        }
    ]);

    res.status(200).json(listings);
})


// @desc   Get list of properties that belong to a specific agent
// @route  GET /api/listings/:agentId/agent
// @access Public
exports.getListingByAgentId = asyncHandler( async (req, res) => {

    const { agentID } = req.params;

    const listings = await Listing.find({agent: agentID});

    if(!listings) {
        res.status(404);
        throw new Error(`No Listings found with Agent Id ${agentID}`)
    }

    res.status(200).json(listings);
});

// @desc   Get list of properties that belong to all agents in an organisation
// @route  GET /api/listings/:organisationId/organisation
// @access Public
exports.getListingByOrganisationId = asyncHandler( async (req, res) => {

    const { organisationID } = req.params;

    const listings = await Listing.find({organisation: organisationID});

    if(!listings) {
        res.status(404);
        throw new Error(`No Listings found with Organisation Id ${organisationID}`)
    }

    res.status(200).json(listings);
});


