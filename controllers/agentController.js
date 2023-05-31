const asyncHandler = require('express-async-handler');
const Agent = require('../models/AgentModel');
const Listing = require('../models/ListingModel');

// @desc   Get lists of agents that belong to an organisation
// @route  GET /api/agents/:organisationId
// @access Public
exports.getAgentsByOrganisationID = asyncHandler( async (req, res) => {

    const { organisationID } = req.params;

    const agentIDs = (await Listing.find({organisation: organisationID})).map(function(list) {
        return list.agent
    });
   
 const agents = await Agent.find({_id: {$in: agentIDs}})

      if(!agents) {
        res.status(404);
        throw new Error(`No Agents found with Oraganisation ID ${organisationID}`)
    }

    res.status(200).json(agents);

})
