const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlCampaign = require('../controllers/campaign.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
// router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/createcampaign', ctrlCampaign.post);
router.get('/userprofile',ctrlCampaign.get);

module.exports = router;



