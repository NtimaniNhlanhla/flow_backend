const express = require('express');

const router = express.Router();

const { getAgentsByOrganisationID} = require('../controllers/agentController')

router.get('/:organisationID/organisation', getAgentsByOrganisationID)

module.exports = router;